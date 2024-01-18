import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../myrou/Navbar';
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
`;

const DonationInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const DonateButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DonationDisplay = styled.div`
  margin-top: 20px;
`;

const DonationItem = styled.div`
  margin-bottom: 8px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

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
      <Title>Make a Donation Study Academy</Title>
      <InputWrapper>
        <InputLabel>Enter Donation Amount:</InputLabel>
        <DonationInput
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
      </InputWrapper>
      <DonateButton onClick={handleDonate}>Donate</DonateButton>

      {donations.length > 0 && (
        <DonationDisplay>
          <h3>Recent Donations:</h3>
          {donations.map((amount, index) => (
            <DonationItem key={index}>${amount.toFixed(2)}</DonationItem>
          ))}
        </DonationDisplay>
      )}
    </Wrapper>
    </div>
  );
};

export default DonationPage;
