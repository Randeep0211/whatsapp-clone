import React,{useEffect,useState} from 'react';
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'
import db from './Firebase';
import {Link} from "react-router-dom"

function SidebarChat({id,name,addNewChat}) {


    const[seed,setSeed]=useState('')




    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const createChat= ()=>{

        const roomName= prompt('Please enter name for chat')

        if(roomName){
            db.collection("rooms").add({
                name:roomName,
            })
        }
    }


    return !addNewChat ? (

        
        <Link to={`/rooms/${id}`}>

        <div className='sidebarchat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className='sidebarchat__info'>

            <h1>{name}</h1>
            <p>Last Message...</p>
            
            </div>
        </div>
        </Link>
    ) : (
        <div onClick={createChat} className='sidebarchat'>
            <h2>Add New Message</h2>
        </div>

        
    );
}

export default SidebarChat;