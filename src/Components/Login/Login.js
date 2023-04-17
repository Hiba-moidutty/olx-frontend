import React from 'react';
import './Login.css';
import { useState,useEffect } from "react";
import { userAction } from "../../redux/usernameSlice"
import Logo from '../../olx-logo.png';
import Swal from 'sweetalert2';
import axios from "../../utils/axios";
import { userLogin } from "../../utils/Constants";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { userImageAction } from '../../redux/userImageSlice';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    const token = Cookies.get('jwt')
    if(token){
      navigate('/')
      }
    },[navigate])

  const handleLogin = (e) =>{
    
    e.preventDefault();
    const body = JSON.stringify({
      email,
      password,
    });
    if (email==='' || password ===''){
      Swal.fire("Please fill the components....")
    } else{
      axios.post(userLogin,body,{
        headers : {"Content-Type": "application/json"},
      }).then((response)=>{
        
          if (response.data.status ==="Wrong password" || response.data.status === "Email is not found"){
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Email or Password is incorrect",
              showConfirmButton: false,
              timer: 1500,
            });
          }else{
            Cookies.set("jwt",String(response.data.user_jwt))
            Cookies.set("id",String(response.data.id))
            Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          if (response.status === 200){
            console.log(response.data);
            dispatch(userAction.setUsername(response.data.payload.email));
            dispatch(userImageAction.setUserImage(response.data.payload.image));
            navigate("/")
          }
          }
        })
    }
  };


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            name="password"
          />
          <br />
          <br />
          <button type="button" onClick={handleLogin}>Login</button>
          <br/>
          <span>
            Don't have an Account?<Link to="/signup">Register</Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
