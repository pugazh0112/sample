import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css'
function Login() {

  return (
        <div class="container">
          <div class="header">
            <div class="text">Student Login</div>
            <div class="text2"><p>Hey Enter Your Details to Sign in to Your Account</p></div>
          </div>
          <div className='inputs'>
            <div className="input">
            <label htmlFor="email">Email</label>
            <input
            id="email"
            name="email"
            type="email"
            placeholder="abcd@gmail.com"
            required
            />
            </div>

            
            <div className='input'>
              <div className="password-row">
                <span>Password</span>
                <Link to='/forget ' className="forget-password">Forget password?</Link>
              </div>

              <input type='password'></input>
            </div>
            <div className='input'><br></br>
              <Link to="/profile"><button placeholder='Login' className='box'>login</button></Link>
            </div>
            <div className='create'>Don't have an account?<Link to="/create" className="new"><button>Sign Up</button></Link></div>
          </div>
        </div>
            
            

  );
}

export default Login;
