import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'rsuite';
import { selectTodos } from './TodosSlice';

function Todos() {
  const todos = useSelector(selectTodos);

  return (
    <List bordered>
      {todos.map((todo, i) => (
        <List.Item bordered key={i}>
          {todo}
        </List.Item>
      ))}
    </List>
  );
}

export default Todos;
