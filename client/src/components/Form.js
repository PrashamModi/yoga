import React, { useState } from "react";
import "./Style.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [batchTime, setbatchTime] = useState("");


  const submitHandler = async (e) => {
    e.preventDefault();
    if(age < 18 || age > 65) {
      if(age < 18) {
        alert("Age must be greater than 18");
      }
      if(age > 65) {
        alert("Age must be less than 65")
      }
      return ;
    }
    let result = await fetch("http://localhost:4000/", {
      method: "post",
      body: JSON.stringify({ name, email, age, batchTime }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    setName("");
    setEmail("");
    setAge("");
    setbatchTime("");
    alert(`SuccessFully enrolled on batch : `+ batchTime + " on Date : " + Date());
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h1 className="text-center pt-3">Yoga Class Registration</h1>
        <div className="line"></div>
        <div className="mb-3 mt-3">
          <label className="form-label">UserName</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          />
          
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label mr-4">Batch Timing</label>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={batchTime}
          label="Age"
          onChange={(e) => setbatchTime(e.target.value)}
          required
        >
          <MenuItem value={"6-7AM"}>6-7AM</MenuItem>
          <MenuItem value={"7-8AM"}>7-8AM</MenuItem>
          <MenuItem value={"8-9AM"}>8-9AM</MenuItem>
          <MenuItem value={"5-6PM"}>5-6PM</MenuItem>
        </Select>
        </div>
        <button type="submit" className="btn btn-success">
         Pay ₹500
        </button>
      </form>
    </div>
  );
};

export default Form;
