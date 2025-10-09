import React from "react";
import './Mark.css'
import logo from "../components/images/logo.jpg";

function Mark() {
    return (
        <div>
            <div className="headers">
                <img src={logo} />
                <h1>STUDY WORLD COLLEGE OF ENGINEERING</h1>
            </div>
            <div className="header2">
                <h4>STUDENT OBTAINED MARKS</h4>
            </div>
            <div className="mid">
                <div className="mid1">
                     <h4><b>Student</b></h4>
                     <p>Roll No:12345</p>
                     <p>Dept:CSE</p>
                     <p>Year: III</p> 
                     <h4><b>Overall Performance</b></h4> 
                     <p className="line">l</p>
                     <p>75% Avg</p>
                </div>
                <span className="spanning">
                    <div className="tittle">
                        <p>Subject</p>
                        <p>CIA-1</p>
                        <p>CIA-2</p>
                        <p>SEM</p>
                    </div>
                    <div className="subject">
                        <p>sub</p>
                        <p>sub</p>
                        <p>sub</p>
                        <p>sub</p>
                    </div>
                    <div className="mark1">
                        <p>cia1</p>
                        <p>cia1</p>
                        <p>cia1</p>
                        <p>cia1</p>
                    </div>
                    <div className="mark2">
                        <p>cia2</p>
                        <p>cia2</p>
                        <p>cia2</p>
                        <p>cia2</p>
                    </div>
                    <div className="sem">
                        <p>sem</p>
                        <p>sem</p>
                        <p>sem</p>
                        <p>sem</p>
                    </div>
                </span>

            </div>
        </div>
    
    )
    
}
export default Mark;
