import React, { useState } from "react";
import Swal from 'sweetalert2';
import "../App.css"

export default function Form2() {

    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        password: ""
    })
        const [data, setData] = useState("");
        const [error, setError] = useState("");

    const handleForm=(e)=>{
        
        e.preventDefault()
        console.log(formData);
         if (formData.email.trim() == "") {
            setError("email must use @ ")

        } else if (formData.password.length < 5) {
            setError("minimum 5 numbers required")

        } else {
            Swal.fire({
                title: "Form Submitted",
                text: "Your response is submitted",
                icon: "success"
            })



        const storeValue=JSON.stringify(formData);
        localStorage.setItem("fromData",storeValue);
        const getValue=localStorage.getItem("fromData");
        const setValue=JSON.parse(getValue);
        setData(setValue);
    }}
    
    
    
    const handleChange=(e)=>{
        const {name,value}= e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
  return (
    <div className="main">
      <form onSubmit={(e)=>handleForm(e)}>
        <div className="heading">
          <h3>Already have an account?</h3>
          <h3 className="singIn">Sing in to LMS</h3>
        </div>

        <h2>Create New Account</h2>

        <label htmlFor="firstName">First Name</label>
        
        <input type="text" id="firstName" name="firstName" placeholder="pleace enter your first name" onChange={handleChange} />
        
        <label htmlFor="lastName">Last  Name</label>
        
        <input type="text" id="lastName" name="lastName" placeholder="pleace enter your last name" onChange={handleChange} />
        
        <label htmlFor="mobileNumber">Mobile No.</label>
      
        <div className="numbers">
        <select name="mobileNumber" id="mobileNumber" className="option1" onChange={handleChange}>
          <option value="">+91</option>
          <option value="">+92</option>
          <option value="">+93</option>
        </select>
        <select name="mobileNumber" id="mobileNumber"className="option2" onChange={handleChange}>
          <option value="Operator">Operator</option>
        </select>
        <input type="text" id="mobileNumber" name="mobileNumber" className="no" placeholder="7-digit number" onChange={handleChange} />
        </div>
        
        <label htmlFor="email">Email</label>
        
        <input
          type="email"
          name="email"
          id="email"
          placeholder="pleace enter valid email adress"
          onChange={handleChange}
        />
        
        <label htmlFor="password">Password</label>
        
        <input type="text" id="password" name="password" placeholder="pleace enter valid password" onChange={handleChange} />
        <p>
          7-17 characters starts with Alphabets, then Numbers OR Special
          Characters !@#$%^&*
        </p>
        <button>Submit</button>
        <br />
        { data ? <h2>Welcome : {data.email}</h2> :""}
      </form>
     
    </div>
  );
}
