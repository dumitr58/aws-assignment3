import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Translate from './components/Translate/translate.component';
import TextRekognition from './components/TextRekognition/textrekognition.component';





class App extends React.Component {
  state = {
    loading: true,
    question: null,
    questionS: [],
  };

  async componentDidMount() {
    const url = "http://13.58.100.188:443/flask";
    const response = await fetch(url);
    const data = await response.text();
    this.setState({question: data
      , loading: false });
    console.log(data);
  }

render() {
  return (
    <div className="App">
      <h1>Assignment 3 Cloud Computing AWS</h1>
      <div>
        {this.state.loading || !this.state.question
        ? ( <div>loading...</div> )
        : (
        <div>
          <h2 className="headers">Getting Data from my RDS MySQL Database in json format</h2>
          <div>{this.state.question}</div>
        </div>
        )}
      </div>
      <div>
      <h2 className="headers">My AWS S3 Bucket</h2>
          <a className='App-link' href="https://assignment3cloudbucket.s3.us-east-2.amazonaws.com/IMG_0928.JPG" 
      target="_blank" rel="noopener noreferrer">Click to see my best friend</a>
      </div>
          <Translate></Translate>
          <TextRekognition></TextRekognition>
    </div>
  );
}
}

export default App;
