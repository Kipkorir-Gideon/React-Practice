import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import List from './components/List'
import Greetings from './components/Greetings'
import * as operator from './components/calculator'
import Card from './components/Card'
import contacts from './components/contacts'
import Profile from './components/Profile'







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
        <Profile img="/images/87479324.jpeg" />
        <Card
          name={contacts[0].name}
          img={contacts[0].imgURL}
          tel={contacts[0].phone} 
          email={contacts[0].email} 
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].imgURL}
          tel={contacts[1].phone} 
          email={contacts[1].email} 
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].imgURL}
          tel={contacts[2].phone} 
          email={contacts[2].email} 
        />
      </div>
    </div>
  );
};

export default App;
