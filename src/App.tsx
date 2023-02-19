import React from 'react';
import { HelloWorld, Person } from './HelloWorld';

const person1:Person = {
  name:"Marek",
  age:11
}

function App() {
  return (
    <>
      <p>Hello world</p>
      <HelloWorld name={person1.name}/>
    </>
  );
}

export default App;