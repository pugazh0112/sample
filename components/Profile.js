import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import logo from "../components/images/logo.jpg";
import marks from "../components/images/marks.jpg";
import profile2 from "../components/images/profile2.jpg";
import profile3 from "../components/images/profile3.jpg";
import rename from "../components/images/rename.jpg";
import white from "../components/images/white.jpg";
import fees from "../components/images/fees.jpg";                       
import home from "../components/images/home.jpg"
function Profile() {
    return (
        <div>
            <div className="navbar">
                <img src={logo} />
                <h1>STUDY WORLD COLLEGE OF ENGINEERING</h1>

            </div>
            <div className="content">
                <div className="theme">
                    <img src={rename} class="main" /><br />
                    <button className="one"><img src={home} className="main1" />HOME</button><br />
                    <button className="two"><img src={profile2} />PROFILE</button><br />  
                    <button className="three"><img src={profile3} />ATTENDENCE</button><br />
                    <button className="four"><img src={marks} /><Link to ='/mark'>MARK</Link></button><br />
                    <button className="five"><img src={fees} /><Link to='/fee'> FEES</Link></button><br />
                </div>
                <div className="aside">
                    <div className="top">
                        <img src={white} className="circle"/>
                        <p>STUDENT NAME</p>
                    </div>
                    <div className="bottom">
                        <label>Reg No:</label>
                        <input className="six" type="text"/><br />
                        <label>Branch:</label>
                        <input className="seven" type="text"/><br />
                        <label>Program:</label>
                        <input className="eight" type="text"/><br />
                        <label>DOB:</label>
                        <input className="nine" type="dob"/><br />
                        <label>Phone No:</label>
                        <input className="ten" type="number"/>
                    </div>
                </div>

             </div>
        </div>
    )
                     
                            }
export default Profile;
