import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlexboxGrid, Icon, IconButton, List } from 'rsuite';
import { selectTodos, del } from './TodosSlice';

function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <List bordered>
      {todos.map(({ txt, id }) => (
        <FlexboxGrid key={id}>
          <FlexboxGrid.Item colspan={12}>
            <List.Item bordered>{txt}</List.Item>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={2}>
            <IconButton
              icon={<Icon icon="minus" />}
              color="red"
              circle
              onClick={() => dispatch(del(id))}
            />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      ))}
    </List>
  );
}

export default Todos;
