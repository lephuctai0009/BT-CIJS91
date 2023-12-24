import React, { useState } from 'react';

const RegistrationForm = ({ memberBenefits }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
      };
    return (
    <div style={{ display: 'flex', marginLeft:'300px'}}>

      <div style={{ flex: 1, border:'1px solid rgb(216, 214, 214)', borderRadius:'10px',width:'300px'}}>
        <h2 style={{backgroundColor:'rgb(82, 197, 251)', borderRadius:'10px', padding:'20px 20px', marginTop:'0'}}>Benefits of being a member</h2>
        <ul>
          {memberBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1 ,paddingLeft:'20px'}}>
        <h2 style={{marginTop:'0'}}>Sign in for an account</h2>
        <li style={{listStyleType:'none'}}>Signing up for an account is free and easy</li>
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <br />
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <br />
          <label> Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <br />
          <li style={{listStyleType:'none'}}>By clicking the 'Sign up' button below</li>
          <br />
          <span><button type="submit">Đăng Ký</button>
          <button type="button">Hủy</button></span>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
            
          
          
         
