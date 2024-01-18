import { useState } from 'react' // To import hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let colourr = "blue";

  //useState(default value is given here)

  let [colourr, SetColorr] = useState("lightYellow");

  let [count, SetCount] = useState("5");

// Through use State we get an array
// the first element is a value (default value) and the second element is a function that update the changes everywhere
// Use State is responsible to propgate the change to all the properties and update the UI
//use State is responsible to change the state and propogate the change into UI or dom





  const LightMode = () => {
    colourr = "white";
    SetColorr(colourr);
  }

  const DarkMode = () => {
    colourr = "black";
    SetColorr(colourr);
    
  }

  const IncCount = () => {

    if(count<20){
    count++;
    SetCount(count);
    }
  }
  const DecCount = () => {
    if(count>0){
    count--;
    SetCount(count);
    }
  }

  
 

  return (
    <div style ={{backgroundColor:colourr, height: '100vh', width:'100vh'}}> 

    <p style={{ 'color': "rgb(37 18 80)"}}> This is bg color changer colour = {colourr}. Value = {count}</p>
   
   



    <button style = {{margin:'20px', backgroundColor : '#5050a6'}} onClick={LightMode}>
       Light  Mode
    </button>
    <button style = {{margin:'20px' , backgroundColor : '#5050a6'}} onClick={DarkMode}>
      Dark Mode
    </button>
    <br/>
    
    <button style = {{margin:'20px', backgroundColor : '#5050a6'}} onClick={IncCount}>
        Increase Count
    </button>
    <button style = {{margin:'20px' , backgroundColor : '#5050a6'}} onClick={DecCount}>
      Decrease Count
    </button>
      
    </div>
  )
}

export default App



// So in React we dont need to select element and then change its colour or to select an element and change its text value

// In React, when you change the value in state or hooks, the UI is automatically re-rendered to reflect the updated state. React's reactivity system is responsible for detecting changes in state or props and then efficiently updating the DOM to reflect those changes.

// That is why react is named as React because it reflect the changes everywhere when a state get changed.

// If i dont use hooks then i have to manually select each element where that changed value is used and update its value there

// Hooks are of various types and every hook have his own role


/*

If i have to do it without using hooks or state (hooks of cbc) just pure js then it will be a hectic work i have to update the value of bgc and the value of color in ui by slecting there element

And to change the color name i have to select the text and then change its value each time by using
colorNameElement.textContent = `Background Color: ${colorName}`;
So it will be a hectic work 

********* But through hooks we can do that by just chnanging a name at a one place ************

import React from 'react';

class App extends React.Component {
  LightMode = () => {
    document.body.style.backgroundColor = 'white';
    this.updateColorName('white');
  }

  DarkMode = () => {
    document.body.style.backgroundColor = 'black';
    this.updateColorName('black');
  }

  updateColorName = (colorName) => {
    const colorNameElement = document.getElementById('colorName');
    if (colorNameElement) {
      colorNameElement.textContent = `Background Color: ${colorName}`;
    }
  }

  render() {
    return (
      <div >
        <h1 style={{ color: 'rgb(211 211 6)' }}>
          This is bg color changer
        </h1>

        <div>
          <p id="colorName">Background Color: blue</p>
        </div>

        <button style={{ margin: '20px', backgroundColor: '#5050a6' }} onClick={this.LightMode}>
          Light Mode
        </button>
        <button style={{ margin: '20px', backgroundColor: '#5050a6' }} onClick={this.DarkMode}>
          Dark Mode
        </button>
      </div>
    );
  }
}

export default App;


*/ 
