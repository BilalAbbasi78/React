import React, { useState } from "react";
import "../App.css";

export default function Home() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handlelogin = (e) => {
    e.preventDefault();
  };
  const loginBtn = () => {
    // Handle login logic here
    console.log("Text:", text);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="main">
      <div className="logo">
        <img src="smit-logo.png" alt="SMIT Logo" />
      </div>
      <div className="heading">
        <p>Student Portal</p>
      </div>

      <form onSubmit={(e) => handlelogin(e)}>
        <div className="portion">
          <p className="login">login</p>
          <p className="create-password">create password</p>
        </div>
        <h1>Login</h1>
        <p>
          Kindly provide the CNIC and password used during SMIT course
          registration.
        </p>

        <label htmlFor="text">CNIC *</label>
        <input
          type="text"
          id="text"
          placeholder="xxxxx-xxxxxxx-x"
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="">Password *</label>
         <div className="input"><input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          
        /> <input type="button" className="show-password" value="Show"   
        /> </div>
        <div className="main-check"> 
        <div className="checkbox">
          <input 
            type="checkbox"
            name=""
            id="checkbox"
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor=""><p>Remember me</p></label> </div> <p className="forgot">Forgot password?</p>
          </div>
        
        <button onClick={loginBtn}>Login</button>
      </form>
    </div>
  );
}
