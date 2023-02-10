import React, { useState } from 'react';


import {  validateEmail } from '../../utils/helpers';

function Form() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
  
    e.preventDefault();

  
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
     
      return;
      
    }

    alert(`Hello ${name}`);
   
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <div className="Title">
        <h1>Contact</h1>
      </div>
      <p>If you're intrested in my service, please reach out. {name}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div class="footer">
      <p>Thank you for visting!</p>
    </div>
    </div>
  );
}

export default Form;
