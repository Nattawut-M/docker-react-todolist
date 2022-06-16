import React, { useState, useEffect } from 'react';
import Logo from './logo.svg';
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Wrapper, Header } from './components/Styled';
import Author from './components/Author';
import InputBar from './components/InputBar';

function App() {
  /* 
    interface Todo = {
      _id: number;
      text: string;
      createdAt: Date;
    }
  */
  const [todoList, setTodoList] = useState([]);

  const onSubmit = (todo) => {
    console.log(todo);
    setTodoList((prevTodo) => {
      todo._id = prevTodo.length;
      return [todo, ...prevTodo];
    });
  };

  useEffect(() => console.log(todoList));

  return (
    <Wrapper>
      <Header>
        <Author logo={Logo} subject={'Cloud Computing'} studentId={'116010905118-6'} fullname={'นายณัฐวุฒิ มีสามเสน'} section={2} />
      </Header>

      <div className="container">
        <p className="display-6 fw-bolder fc-accent my-3">Todo List App</p>
        <InputBar setTodo={onSubmit} />
      </div>
    </Wrapper>
  );
}

export default App;
