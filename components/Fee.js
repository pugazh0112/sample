import React from "react";
import './Fee.css'
import logo from "../components/images/logo.jpg";

function Fee() {
    return (
        <div>
    <div class="fee">
            <img src={logo} />
            <h1>STUDY WORLD COLLEGE OF ENGINEERING</h1>
        </div>
        <div class="fee1">
                <div class="fee2">
                    <p><b>Students</b></p>
                    <p>Roll No</p>
                    <p>Year</p>
                    <p class="s"><b>Select Your Year & Semester</b></p>
                    <select>
                        <option>--select--</option>
                        <option>I year</option>
                        <option>II year</option>
                        <option>III year</option>
                        <option>IV year</option>
                    </select>
                    <select>
                        <option>--select--</option>
                        <option>I sem</option>
                        <option>II sem</option>
                        <option>III sem</option>
                        <option>IV sem</option>
                        <option>V sem</option>
                        <option>VI sem</option>
                        <option>VII sem</option>
                        <option>VIII sem</option>
                    </select><br></br>
                    <button class="pay"> Pay Now</button>
                </div>
                <div class="fee3">
                    <table>
                        <tr>
                            <th>FEES LIST</th>
                            <th>ALLOCATED FEES</th>
                            <th>PAYED</th>
                            <th>BALANCE</th>
                            <th>OVERALL</th>
                        </tr>
                        <tr>
                            <td>Course Fees</td>
                            <td>60000.00</td>
                            <td>60000.00</td>
                            <td>0.00</td>
                            <td>Cleared</td>
                        </tr>
                        <tr>
                            <td>Hostel Fees</td>
                            <td>60000.00</td>
                            <td>30000.00</td>
                            <td>30000.00</td>
                            <td>Not Cleared</td>
                        </tr>
                    </table>

                </div>
            </div>
            </div>

    )
}
export default Fee;
