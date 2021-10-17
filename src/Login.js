import React from 'react';
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,provider} from './Firebase.js'
// import {actionTypes} from './Reducer.js'
// import {useStateValue} from './StateProvider.js'

function Login(props) {

    

    const signIn=()=>{
        auth.signInWithPopup(provider).then((result) => 
        console.log(result)).catch(error=> alert(error.message))
    }
    return (
        <div className='login'>

        <div className='login__container'>

     <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>

      <div className='login__text'>
        <h1>Sign in to whatsapp</h1>
      </div>

      <Button type='submit' onClick={signIn}>Sign in with google</Button>

        </div>
            
        </div>
    );
}

export default Login;