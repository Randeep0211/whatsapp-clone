import React,{useState} from 'react'
import './App.css';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
// import Login from './Login.js'
// import {useStateValue} from './StateProvider.js'

function App() {

  
  const [user, setUser]= useState(null)
  
  return (

  

    <div className='App'>

    <div>
      <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>


    <h1>Whatsapp</h1>

   

    <div className='app__body'>


    <Router>
    <Switch>
    

    <Route path="/rooms/:roomId">

    <Sidebar />
    <Chat />
    
    </Route>

    <Route path='/'>
      <Chat />
    </Route>

   
    




    </Switch>
    </Router>


  



    </div>
    </div>

    
    
  )
}

export default App;
