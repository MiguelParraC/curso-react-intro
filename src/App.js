import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso', completed: true },
  { text: 'Terminar curso', completed: true },
];

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}            
            completed={todo.completed}            
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}


export default App;