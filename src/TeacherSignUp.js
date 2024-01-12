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
    <form onSubmit={handleSubmit}>
      <h2>Teacher Sign Up</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default TeacherSignUp;
