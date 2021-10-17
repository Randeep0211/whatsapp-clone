import React,{useState,useEffect} from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SidebarChat from './SidebarChat'
import SearchIcon from '@material-ui/icons/Search';
import db from './Firebase.js'




function Sidebar(props) {


    const[rooms, setRooms]=useState([])

    useEffect(()=>{
       const unsubscribe =  db.collection('rooms').onSnapshot(snapshot =>(
            setRooms(snapshot.docs.map(
                doc => ({
                    id: doc.id,
                    data: doc.data()
                })
            ))
        ))

        return ()=>{
            unsubscribe();
        }
    },[]) 

    return (
        <div className='sidebar'>

        <div className='sidebar__header'>
        
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/> 

        <div className='sidebar__headerRight'>

        <IconButton>

        <DonutLargeIcon />
        </IconButton>

         <IconButton>
        <ChatIcon />

         </IconButton>

          <IconButton>


        <MoreVertIcon />

        </IconButton>

        

        
        
        
        </div>
            
        </div>

        <div className='sidebar__search'>

        <div className='sidebar__searchContainer'>
        
        <SearchIcon />
        <input placeholder="Search or start new chat" type="text" />
        </div>
        </div>
        

        <div className='sidebar__chats'>
        
        <SidebarChat addNewChat/>
        
        {rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
        
        </div>

            
        </div>
    );
}

export default Sidebar;