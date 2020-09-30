import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
//import MyComponent from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'

function App() {
  return (
    <div className="App">
        {/* <h1>Welcome to React JS</h1>
        <Greet name='Jithu' address='Hyd'>
            <p>This is children props</p>
        </Greet>
        <Greet name='Chinna' address='Pune'>
          <button>Child Prop</button>
        </Greet>
        <Welcome />
        <Hello /> */}
        {/* <Message /> */}
        {/*<Counter /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        <EventBind />
    </div>
    
  );
}

export default App;
