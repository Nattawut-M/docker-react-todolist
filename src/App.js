import React, { useState, useEffect } from 'react';
import Logo from './logo.svg';
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Wrapper, Header, Text, theme } from './components/Styled';
import Author from './components/Author';
import InputBar from './components/InputBar';
import Todo from './components/Todo';

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

  const onDelete = (id) => {
    console.log(id);
    const filteredTodo = todoList.filter((todo, index) => todo._id !== id);
    setTodoList(filteredTodo);
  };

  const onDeleteAll = () => setTodoList([]);

  useEffect(() => console.log(todoList));

  return (
    <Wrapper>
      <Header>
        <Author logo={Logo} subject={'Cloud Computing'} studentId={'116010905118-6'} fullname={'นายณัฐวุฒิ มีสามเสน'} section={2} />
      </Header>

      <div className="container">
        <Text className="display-6 fc-accent my-3" fw={900} color={theme.accent.light}>
          Todo List App
        </Text>
        <InputBar setTodo={onSubmit} />
        <button className="btn text-info fc-secondary position-relative my-2" onClick={onDeleteAll}>
          ลบทั้งหมด
          <span class="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-accent bg-accent-hover">
            {todoList.length}
            <span class="visually-hidden">count of todo list</span>
          </span>
        </button>
        
        <div id="todoGroup" className="d flex flex-column">
          {todoList.length <= 0 ? (
            <Text className="fs-6 my-4" fw={900} color={'#757575'} align={'center'}>
              ไม่มีรายการที่ต้องทำ
            </Text>
          ) : (
            todoList.map((todo) => <Todo key={todo._id} todo={todo} onDelete={onDelete} />)
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
