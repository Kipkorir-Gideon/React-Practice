import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import List from './components/List'
import Greetings from './components/Greetings'
import * as operator from './components/calculator'
import {Card, Emoji} from './components/Card'
import contacts from './components/contacts'
import emojis from './components/emojis'



function createCard(contact) {
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
}


function createEmojiCard(emoji) {
  return (
    <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    /> 
  )
}




function App() {

  return (
    <div className="App">
      <Greetings />
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
      {contacts.map(createCard)}
      </div>

      <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojis.map(createEmojiCard)}

      </div>
    </div>
  );
};

export default App;
