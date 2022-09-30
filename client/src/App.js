
import './App.css';
import React,{useState, } from 'react';
import Axios from 'axios'
function App() {

  const [registrationNumber, setRegistrationNumber] = useState("")
  const [recommendation, setRecommendation] = useState("")
   
  const submitRecommendation = () =>{

    Axios.post('http://localhost:3000//api/insert',{
      registrationNumber: registrationNumber,
      recommendation: recommendation}).then(() =>{
        alert("successful insert");
      });

  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
      <label>RegistrationNumber:</label>
        <input type="text" name="registrationNumber"
         onChange = {(e) =>{setRegistrationNumber(e.target.value)}} ></input>
        <label>Recommendation:</label>
      <input type="text" name="recommendation" 
      onChange = {(e) =>{

      setRecommendation(e.target.value)}}></input>
      <button onClick={submitRecommendation} >Submit</button>
      </div>

    </div>
  );
}

export default App;
