import logo from './logo.svg';
import './App.css';
import Search from './components/Search.js';
import Card from './components/Card.js';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


  

function App(props) {
  const [hiddenUsers, setHiddenUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
     fetch('http://localhost:3000', {
    headers: {
      'Accept': 'application/json'
    }
    }).then(response => response.json())
    .then(json => { setUsers(json); setHiddenUsers(json); console.log("users"); console.log(users);  })
  }, []) // <-- empty dependency array
  



  function onchange_(val) {
    setUsers(
      hiddenUsers.filter(
        (user)=>{return user.name.includes(val) || val===""}
        )
      )
  }
  



  return (
    <div className="App">
      <div class="container">
        <Search onchange={onchange_} />
        <div class="row justify-content-between">
          {users.map(user =>
            <Card user={user} />
          )}
        </div>
      </div>


    </div>
  );
}

export default App;
