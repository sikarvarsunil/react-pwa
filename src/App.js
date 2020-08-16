import React, {useEffect, useState} from 'react';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home/';
import Recipe from './components/Recipe/';
import firebase from './firebase';

function App() {
const [msg, setMsg] = useState()
  useEffect(() => {
    const message = firebase.messaging();
    setMsg(message);
    message.requestPermission().then(() => {
      return message.getToken();
    }).then((data) => {
      console.log('token', data);
    })
  }, [msg])
  return (
    <div className="App">
      
        <Router>
        <header className="App-header">
          <Navbar bg="primary">
            <Navbar.Brand href="#home">React PWA</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/recipe'>Recipe</Link></Nav.Link>
            </Nav>
            
          </Navbar>
          </header>
          <Route component={Recipe} exact path='/recipe' />
          <Route component={Home} path='/' exact />
      </Router>
      
    </div>
  );
}

export default App;
