import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';


const ParentSignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [childName , setChildName] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
      {
        navigate('/Dashboard')
      }
  })

  const collectData = async () => {
    try {
        const result = await fetch("http://localhost:6600/registerparents", {
            method: 'post',
            body: JSON.stringify({ username, email, password, childName}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json();
        console.warn(data);
       if (data.username,password,email, childName){
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/Dashboard')
        }
    } catch (error) {
        alert("pleases enter correct details");
    }
  
}
  return (
    <form style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"60%", }}>
      <h2 style={{justifyContent:"center", textAlign:"center"}}>Parent Sign Up</h2>
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="parentName" placeholder="Parent's Name"  />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} value={childName} onChange={(e) => setChildName(e.target.value)}  type="text" name="childName" placeholder="Child's Name"  />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}}  value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password"  />
      <button style={{height:"6vh", marginTop:"1rem"}} onClick={collectData}  type="submit">Sign Up</button>
    </form>
  );
};

export default ParentSignUp;
