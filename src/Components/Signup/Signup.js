import React from 'react';
import { useState } from 'react';
// import {useHistory} from 'react-router-dom';
import axios from '../../utils/axios'
import { userSignUp } from "../../utils/Constants"
import Logo from '../../olx-logo.png';
import './Signup.css';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const[username,setUsername] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
  const[password,setPassword] = useState("");
  const navigate=useNavigate();


  const handleSubmit=(e)=>{

    e.preventDefault()
    const body = JSON.stringify({
      username,email,phone,password
    });
    console.log(body)
    axios.post(userSignUp,body,
      {headers:{"Content-Type" : "application/json"}
      }).then((response)=>{
      console.log(response.status)
      console.log('haiiiiiii')
      if (response.status === 200){
        navigate('/login');
        console.log('kjdkjkkjk....')
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: response.data.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }).catch((err)=>{
      Swal.fire({
        position: "center",
        icon: "warning",
        title: 'Somethimh=g ha',
        showConfirmButton: false,
        timer: 1500,
      });
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            id="fname"
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            id="lname"
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        {/* <a>Login</a> */}
      </div>
    </div>
  );
}
