import React from "react";
import "./App.css";
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="title">
      <h2>Keep Track of your Friends with Friends App</h2>
      <br />
      <a style={{marginRight: "10px"}} rel="nofollow" href="/home/about"><Button className="btn btn-dark">Learn More</Button></a>
      <a rel="nofollow" href="/friends/new"><Button className="btn btn-dark">Get Started</Button></a>
    </div>
  );
}

export default App;
