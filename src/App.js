import React, {useState} from 'react';
import './App.css';
//import ErrorBoundary from "./component/ErrorBoundary";
import {ErrorBoundary} from "react-error-boundary";
import Person from "./component/Person";
import Counter from "./component/Counter";
import {Fallback} from "./component/Fallback";

function App() {
  let[name,setName]=useState({
     firstName:'ROHIT',
     secondName:'SHARMA'
  })
    const errorHandler=(error,errorInfo) =>{
      console.log('Logging',error,errorInfo)
    }
  return (
    <div className="App">
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Person personName={name}/>
        {/*<Person personName={}/>*/}
        <Counter/>
    </ErrorBoundary>


    </div>
  );
}

export default App;
