import React, { useState } from 'react';

const TeacherSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic (send data to backend, etc.)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"60%", }}>
      <h2 style={{justifyContent:"center", textAlign:"center"}}>Teacher Sign Up</h2>
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} type="text" name="subject" placeholder="Subject" onChange={handleChange} />
      <input  style={{height:"6vh" , marginBottom:"0.4rem"}} type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button style={{height:"6vh", marginTop:"1rem"}} type="submit">Sign Up</button>
    </form>
  );
};

export default TeacherSignUp;
