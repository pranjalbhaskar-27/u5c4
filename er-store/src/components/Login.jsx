import { useState } from "react";
import {useDispatch} from "react-redux"
import {  Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const [form,setform]=useState({
    username:"",
    pass:""
  })
  const handle=async ()=>{
   const res=await fetch("http://localhost:8080/users");
   const data=await res.json();
   
   for(let i=0;i<data.length;i++){
     if(data[i].username===form.username&& data[i].pass===form.pass){
      console.log(data[i]);
      if(data[i].role==="admin"){
        navigate("/orders")
      }
      else if(data[i].role==="client"){
        navigate("/neworder")
        localStorage.setItem("name",data[i].username)
      }

      break;
     }
     

   }



  }
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setform({
      ...form,
      [name]:value
    })
   
  }
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
       
        onChange={handlechange}
      />
      <input
        className="password"
        type="password"
        name="pass"
        
        placeholder="Enter password"
        onChange={handlechange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit"  onClick={handle}>Login</button>
    </div>
  );
};
