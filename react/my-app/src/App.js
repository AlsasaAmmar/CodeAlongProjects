import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  let [quote, updateQuote] = useState(0); 

  const selectRandomQuote = (json)=> {
   const randomNum = Math.floor(Math.random() * json.length) + 1; 
   console.log(json[randomNum]);
  //  return json[randomNum]; 
  updateQuote(json[randomNum]); 
  } 

  const nextQuoteClickHandler = ()=> {
    console.log("hoi! ")
  }
  useEffect(()=> {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data=> data.json())
    .then(json=> {
      selectRandomQuote(json); 
    } )
  })
  return (
    <div className="App" id='quote-box'>
      <Button buttonDisplayName='Next Qoute' nextQuoteClickHandler={nextQuoteClickHandler}/>
    </div>
  );
}

export default App;
