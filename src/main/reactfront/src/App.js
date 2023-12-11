import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import axios, {Axios} from "axios";

function App() {
  const [member, setMember] = useState("");
  useEffect(() => {
    Axios.post("/api/users").then((response) => {
      if (response.data) {
        // console.log(response.data);
        setMember(response.data);
      } else {
        alert("failed to ");
      }
    });
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{member.id}</h1>
        <h1>{member.name}</h1>
        <h1>{member.password}</h1>
        <h1>{member.email}</h1>
        <h1>{member.address}</h1>
      </header>
      <p className={"App-intro"}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
export default App;

export default App;
