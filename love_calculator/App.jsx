import { enableExpoCliLogging } from "expo/build/logs/Logs";
import React, { useState } from "react";
import NavBar from "./Components/NavBar"
import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {

  const [fullName, setFullName] = useState({
    yname: "",
    lname: "",
    lperc:"",
    lresult:""
  });
  
const clickToShow = () =>{
     fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fullName.yname}&sname=${fullName.lname}`,
     {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f47d182111msh1c52faa963b0219p16ee9ajsn8c59718905d9",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    }
     
     ).then((data)=>data.json()).
     then((data2)=>{
        setFullName({
          lperc:data2.percentage,
          lresult:data2.result
     })
     })
}

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    });
  };
  return (
    <>
      <NavBar />
      <div className="container col-md-6 mt-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
          <input type="email" className="form-control" id="yname" placeholder="Enter Your Name" name="yname" value={fullName.yname} onChange={inputEvent} />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Enter Your Lover Name</label>
          <input type="email" className="form-control" id="lname" placeholder="Enter Your Lover Name" name="lname" value={fullName.lname} onChange={inputEvent} />
          <button className="col-md-12 btn btn-outline-danger my-5" onClick={ clickToShow }>Calculate</button>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Love Percentage</label>
          <input type="email" className="form-control" id="lperc" placeholder="" name="lperc" value={fullName.lperc}  disabled={true} />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Result</label>
          <input type="email" className="form-control" id="lresult" placeholder="" name="lresult" disabled={true} value={fullName.lresult} />
        </div>
      </div>
    </>
  );
};

export default App;
