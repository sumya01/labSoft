import React, { Component } from 'react';
import axios from 'axios';

import  './registration.css';

class Registration extends Component {
    state = {
        name:'',
        education:'',
        hospitalName:'',
        address:''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = () => {
        console.log("State values are --- ", this.state);
        let req = {
            url:"http://localhost:3050/api/doctor",
            method:"POST",
            data:{
                name:this.state.name,
                education:this.state.education,
                hospitalName:this.state.hospitalName,
                address:this.state.address
            }
        }
        
        axios(req).then((response)=>{
            alert("Great!! ");
            this.getData();
        },error=>{
            console.log(error);
        })
    }

    render(){
        return (
            <div>
                <form>
                    <div className="container">
                        <h1>Register Doctor</h1>
                        <p>Please fill in this form to register</p>
                        <hr></hr>
                        
                        <label><b>Name</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter name eg. Dr Ashok Kumar" 
                            name="name" 
                            value={this.state.name}
                            //onChange={e => this.setState({name: e.target.value})}
                            onChange = { e => this.change(e) }
                            required></input>
                        
                        <label><b>Education</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter degrees eg. MBBS, MD " 
                            name="education" 
                            value={this.state.education}
                            onChange={ e => this.change(e) }
                            required></input>

                        <label><b>Hospital Name</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter hospital or clinic's name" 
                            name="hospitalName" 
                            value={this.state.hospitalName}
                            onChange= {e => this.change(e)}
                            required></input>
                        
                        <label><b>Address</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter hospital or clinic's address" 
                            name="address" 
                            value={this.state.address}
                            onChange = { e => this.change(e)}
                            required></input>
                        <hr></hr>

                        <button 
                            type="submit" 
                            className="registerbtn"
                            onClick={ () => this.onSubmit()}>
                                Register
                        </button>
                    </div>
                </form>
            </div>
        );
    }    
}

export default Registration;
