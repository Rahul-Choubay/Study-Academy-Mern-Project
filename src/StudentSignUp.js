import React, { useState } from 'react';

const StudentSignUp = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show the rest of the form
    setShowForm(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '60%' }}>
      {!showForm ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 style={{ justifyContent: 'center', textAlign: 'center' }}>Student Sign Up</h2>
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} type="date" value={dateOfBirth} onChange={handleDateChange} />
          <button style={{ height: '6vh', marginTop: '1rem' }} type="submit">Next</button>
        </form>
      ) : (
        <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 style={{ justifyContent: 'center', textAlign: 'center' }}>Student Sign Up</h2>
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} type="text" placeholder="Name" />
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} type="email" placeholder="Email" />
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} type="password" placeholder="Password" />
          <button style={{ height: '6vh', marginTop: '1rem' }} type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default StudentSignUp;
