import React, { useState } from 'react';
import styled from 'styled-components';


const CustomModal = ({ isOpen, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    // Handle option change logic here
    // For simplicity, let's just toggle the selected state
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Selected Options:', selectedOptions);
    onClose();
  };

  return (
    <Div>
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Customize Study Academy Courses</h2>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes('option1')}
                onChange={() => handleOptionChange('option1')}
              />
              Algebra basics
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes('option2')}
                onChange={() => handleOptionChange('option2')}
              />
             High school statistics
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectedOptions.includes('option2')}
                onChange={() => handleOptionChange('option2')}
              />
             Multivariable calculus
            </label>
          </li>
        </ul>
        <div className="button-container">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
    </Div>
  );
};
const Div = styled.div`
/* CustomModal.css */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal.open {
  display: flex;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.button-container {
  margin-top: 20px;
  text-align: right;
}

button {
  margin-left: 10px;
}

`;

export default CustomModal;
