import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const TeacherSignUp = () => {
  const [formData, setFormData] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [subject , setSubject] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
      {
        navigate('/Dashboard')
      }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic (send data to backend, etc.)
    console.log(formData);
  };
  const collectData = async () => {
    try {
        const result = await fetch("http://localhost:6600/registerteacher", {
            method: 'post',
            body: JSON.stringify({ username, email, password, subject}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json();
        console.warn(data);
       if (data.username,password,email, subject){
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/Dashboard')
        }
    } catch (error) {
        alert("pleases enter correct details");
    }
  
}

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"60%", }}>
      <h2 style={{justifyContent:"center", textAlign:"center"}}>Teacher Sign Up</h2>
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="name" placeholder="Name"  />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email"  />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} value={subject} onChange={(e) => setSubject(e.target.value)} type="text" name="subject" placeholder="Subject"  />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password"  />
      <button style={{height:"6vh", marginTop:"1rem"}} onClick={collectData} type="submit">Sign Up</button>
    </form>
  );
};

export default TeacherSignUp;
