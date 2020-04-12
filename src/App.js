import React from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList'
import {Context} from './hoc/Context'
function App() {
  return (
    <Context>
      <div className="App">
        <UserForm/>
        <UserList/>
      </div>
    </Context>
  );
}

export default App;
