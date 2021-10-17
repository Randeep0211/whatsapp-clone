import React,{useEffect,useState} from 'react';
import './Chat.css'
import {Avatar,IconButton} from '@material-ui/core' 
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from "@material-ui/icons/MoreVert"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import {useParams} from "react-router-dom"
import db from "./Firebase"
import firebase from 'firebase' 





function Chat(props) {

    const [input,setInput]=useState('')

    const[seed,setSeed]=useState('')

    const {roomId} = useParams() 

    const[roomName,setRoomName]= useState('')

    const [messages,setMessages] = useState([])

    const [user]=useState('')

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data(roomId).name)
    ))

            db.collection('rooms').doc(roomId).collection("messages").orderBy('timestamp','asc').onSnapshot(snapshot =>(
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    },[roomId])


    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const sendMessage= (e)=>{
        e.preventDefault();
        console.log("typed" , input)

        db.collection('rooms').doc(roomId).collection('messages').add({
            message:input,
            name: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('')
    }

    


    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last Seen{''}
                    {new Date(
                        messages[messages.length - 1]?.timestamp?.toDate()
                    ).toUTCString()}
                    </p>

                    <div className='chat__headerRight'>
                    
                    <IconButton>

                       < SearchIcon />
                    </IconButton>

                     <IconButton>
                        <AttachFileIcon />

                      </IconButton>

                     <IconButton>


                        <MoreVertIcon />

                    </IconButton>

                    </div>
                </div>
            </div>

             <div className='chat__body'>

             {messages.map((message) => (


                   <p  className={`chat__message' ${message.name === user.displayName && "chat__Reciever"}`}>
                 
                    <span className='chat__name'>{message.name}</span>
                    
                        {message.message}

                     <span className='chat__timestamp'>
                     
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                     </span>
                    
                    </p>
                    
                    
                    
             ))}
                
                
             </div>

              <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Type Your Text'/>
                    <button onClick={sendMessage} type="submit">Send</button>
                </form>
                <MicIcon />
              </div>
        </div>
    );
}

export default Chat;