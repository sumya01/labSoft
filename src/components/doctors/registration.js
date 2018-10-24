import React from 'react';
import  './registration.css';

const Registration = () => (
    <div>
        <form>
            <div className="container">
                <h1>Register Doctor</h1>
                <p>Please fill in this form to register</p>
                <hr></hr>
                
                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter name eg. Dr Ashok Kumar" name="name" required></input>
                
                <label for="education"><b>Education</b></label>
                <input type="text" placeholder="Enter degrees eg. MBBS, MD " name="education" required></input>

                <label for="hospital"><b>Hospital Name</b></label>
                <input type="text" placeholder="Enter hospital or clinic's name" name="hospital" ></input>
                
                <label for="address"><b>Address</b></label>
                <input type="text" placeholder="Enter hospital or clinic's address" name="address" ></input>
                <hr></hr>

                <button type="submit" class="registerbtn">Register</button>
            </div>
        </form>
    </div>

);

export default Registration;
