import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App(props) {
  const [mode, setmode] = useState('light');  //mode that is set light by default;
  let togglemode = () => {    //functions that will toggle the mode between dark to light;
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Please install this app";
      alertmsg("Light Mode is Enabled", "success");  // msg alerting you about the modes operation

    }
    else {
      setmode("dark");
      document.body.style.backgroundColor = "#233b52";
      document.title = "Nice Dark Mode...";
      alertmsg("Dark Mode is Enabled", "success"); // msg alerting you about the modes operation
    }
  }
  const [msg, setMsg] = useState(null);
  let alertmsg = (message, type) => {
    setMsg({
      mes: message,
      type: type
    });
  }
  setTimeout(() => {
    setMsg(null)
  }, 1200);
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} />
      <Alert msg={msg} />
      
      <div className="container">
          {/* <Switch>
          <Route exact path="/"> */}
              <Textforms text="Text Analyser- Change mode | Changes to Uppercase | Clear Text | Remove Extraspaces" mode={mode} alertmsg={alertmsg} />
          {/* </Route>
          <Route path="/about">
              <About mode={mode}/>
         </Route>
            
          </Switch> */}
      </div>
      {/* </Router> */}


    </>
  );
}

export default App;
