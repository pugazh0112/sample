import React from "react";
import './Create.css'

function Create() {
    return (
        <div className='component'>
        <div className="nav">
            <h2>Create an Account</h2>
            <hr />
        </div>
        <div className="cont">
            <div className="name">
                <p>Full Name</p>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Middle Name"></input>
                <input type="text" placeholder="Last Name"></input>
            </div>
            <div className="mail">
                <p>E-mail</p>
                <input type="email" placeholder="Example: abc123@gmail.com"></input>
            </div>
            <div className="regno">
                <p>Register Number</p>
                <input type="text"></input>
            </div>
            <div className="year">
                <p>Year & Branch</p>
                <select>
                    <option>--select--</option>
                    <option>I Year</option>
                    <option>II Year</option>
                    <option>III Year</option>
                    <option>IV Year</option>
                </select>
                <select>
                    <option>--select--</option>
                    <option>Bachelor of Engineering</option>
                    <option>Bachelor of Technology</option>
                </select>
                <select>
                    <option>--select--</option>
                    <option>MECH</option>
                    <option>CSE</option>
                    <option>AI & DS</option>
                    <option>AI & ML</option>
                    <option>IT</option>
                    <option>CSEC</option>
                    <option>EEE</option>
                    <option>ECE</option>
                </select>
            </div>
            <div className="date">
                <p>DOB</p>
                <input type="date"></input>
            </div>
            <div className="ph">
                <p>Phone No</p>
                <input type="text"></input>
            </div>
            <div className="password">
                <p>New Password</p>
                <input type="password"></input>
                <p>Confirm Password</p>
                <input type="password"></input>
            </div>
            <div>
                <button className="reate" type="submit">
                    <span className="icon">Create</span>
                </button>
            </div>
        </div>
        </div>
    );
}

export default Create;
