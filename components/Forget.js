import React from 'react';
import './Forget.css';

function Forget() {

  return (
    <div className='container'>
        <div className='header'>
            <div className='forget'>Forget</div>
            <div className='forget'>Password</div>
            <div className='title'>Please enter your email address</div>
        </div>
        
        <div className='email'><input id="emailInput" type="email" /></div>
    
        <div className='link'><button>Send link</button></div>

    </div>

  );
}

export default Forget;
