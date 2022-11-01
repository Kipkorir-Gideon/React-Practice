import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import List from './components/List'
import Greetings from './components/Greetings'
import * as operator from './components/calculator'
import {Card, Emoji} from './components/Card'
import contacts from './components/contacts'
import emojis from './components/emojis'
import Input from './components/conditionals/Input'
import Login from './components/conditionals/Login'
import { useState } from "react"
import cars from './components/destructuring/practice'
import animals from './components/destructuring/data'



var userIsRegistered = false;

// const [cat, dog] = animals

// console.log(cat)

// const {name, sound} = cat

// console.log(sound)

// const [honda, tesla] = cars

// const {speedStats: {topSpeed: hondaTopSpeed}} = honda

// const {speedStats: {topSpeed: teslaTopSpeed}} = tesla

// const {colorsByPopularity: [hondaTopColor]} = honda
// const {colorsByPopularity: [teslaTopColor]} = tesla

function App() {

  // setInterval(updateTime, 1000);

  // let time = new Date().toLocaleTimeString();

  // const [currentTime, setState] = useState(time);

  // const [count, setCount] = useState(0);

  // console.log(currentTime);
  // console.log(count)

  // function updateTime() {
  //   const newTime = new Date().toLocaleTimeString();
  //   setState(newTime)
  // }

  // function increase() {  
  //   setCount(count + 1)
  // }

  // const model = cars.model



  // const [headingText, setHeadingText] = useState("Hello")
  // const [isMouseOver, setMouseOver] = useState(false);


  // function handleClick() {
  //   setHeadingText("Submitted")
  // }

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }




  const [name, setName] = useState("");
  const [nameText, setNameText] = useState("");

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick(event) {
    setNameText(name)

    event.preventDefault()
  }


  return (
    <div className="App">
      <div className="container">
        <h1>Hello {nameText}</h1>
        <form onSubmit={handleClick}>
          <input
            onChange={handleChange} 
            type="text" 
            placeholder="What's your name?"
            value={name} 
          />
          <button type="submit">Submit</button>
        </form>



        {/* <h1>{headingText}</h1>
        <input type="text" placeholder="What's your name?" />
        <button style={{ backgroundColor: isMouseOver ? "black" : "white" }} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button> */}
      </div>







      {/* <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColor}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColor}</td>
        </tr>
      </table> */}

      {/* <div className="container">
        <h1>{currentTime}</h1>
        <button onClick={updateTime}>Get Time</button>

        
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div> */}



      {/* <Greetings />
      <Heading />
      <List />
      <ul>
        <li>{operator.add(1, 2)}</li>
        <li>{operator.multiply(2, 3)}</li>
        <li>{operator.subtract(7, 2)}</li>
        <li>{operator.divide(5, 2)}</li>
      </ul>
      <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map((contact) => {
          return (
            <Card
              id ={contact.id}
              key={contact.id}
              name={contact.name}
              img={contact.imgURL}
              tel={contact.phone}
              email={contact.email}
            />
          )
        })}
      </div>

      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        {emojis.map((emoji) => (
            <Emoji
              key={emoji.id}
              icon={emoji.emoji}
              name={emoji.name}
              description={emoji.meaning}
            /> 
        ))}

      </div>

      <div className="container">
        <Login isRegistered={userIsRegistered} />
      </div> */}
    </div>
  );
};




// var numbers = [3, 56, 2, 48,5]

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);

// var newNumbers = [];


// numbers.forEach(function (x){
//   return newNumbers.push(x * 2)
// });

// const newNumbers = numbers.map( (x) => { 
//   return x * 2;
// })



// const newNumbers = numbers.filter( (num) => {
//   return num >10;
// })

// console.log(newNumbers)

// var newNumbers = [];

// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumbers.push(num);
//   }
// })

// var newNumber = 0;

// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// })

// var newNumber = numbers.reduce( (accumulator, currentNumber) => {
//   console.log("Accumulator: " + accumulator);
//   console.log("Current Number: " + currentNumber);
//     return accumulator + currentNumber;
// })

// console.log(newNumber)

// var newNumber = numbers.find( (num) => {
//   return num > 10;
// })

// var newNumber = numbers.findIndex( (num) => {
//   return num > 10;
// })

// console.log(newNumber);

// var meaning = []
// emojis.forEach(function (emoji) {
//   meaning.push(emoji.meaning)
// })

// var meaning = emojis.map( (emoji) => {
//   return emoji.meaning.substring(0, 100);
// })

// console.log(meaning)

// var numbers = [3, 56, 2, 48,5]

// const newNumbers = numbers.map( num => num * num);

// console.log(newNumbers);

export default App;
