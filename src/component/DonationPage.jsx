import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../myrou/Navbar';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donations, setDonations] = useState([]);

  const handleDonate = () => {
    if (donationAmount) {
      // Add the donation to the list
      const newDonation = parseFloat(donationAmount);
      setDonations([...donations, newDonation]);

      // Clear the input field
      setDonationAmount('');

      // Log the donation (for simulation purposes)
      console.log(`Donating $${newDonation}`);
    }
  };

  return (
    <div style={{width:"98.5", overflow:"hidden"}}>
    <Navbar />
    <Wrapper>
      <h2 className='Title'>Make a Donation Study Academy</h2>
      <div className='InputWrapper'>
        <label className='InputLabel'>Enter Donation Amount:</label>
        <input
        className='DonationInput'
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
      </div>
      <button className='DonateButton' onClick={handleDonate}>Donate</button>

      {donations.length > 0 && (
        <div className='DonationDisplay'>
          <h3>Recent Donations:</h3>
          {donations.map((amount, index) => (
            <div className='DonationItem' key={index}>${amount.toFixed(2)}</div>
          ))}
        </div>
      )}
    </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .InputWrapper {
    margin-bottom: 16px;
    .InputLabel{
      display: block;
      margin-bottom: 8px;
      color: #555; 
    }
    .DonationInput{
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
  }
 .Title { 
  text-align: center;
  color: #333;
 }
  .DonateButton{
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  DonationDisplay{
    margin-top: 20px;
    .DonationItem {
      margin-bottom: 8px;
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`;





export default DonationPage;
