import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FullInput from './components/FullInput/FullInput';
import { title } from 'process';
import Input from './components/Input /Input';
import Button from './components/Button/Button';



function App() {


  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' }
  ])

  let [title, setTitle] = useState('')


  // const newTask = () => {
  //   message: title
  // }

  const addMessage = (title:string) => {
    let newMessage = {message:title}    
    setMessage([ newMessage, ...message ]) 
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
}

  return (
    <div className="App">
      {/* <FullInput addMessage={addMessage}/> */}
      <Input title={title} setTitle={setTitle} />
      <Button callBack={callBackButtonHandler}/>
    {message.map((m, index) => {
      return (
        <div key={index}> {m.message}</div>
      )
    } )}
    </div>
  );
}

export default App;
