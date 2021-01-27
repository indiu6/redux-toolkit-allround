import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
    },
    del: (state, { payload }) => state.filter(({ id }) => id !== payload),
  },
});

export const { add, del } = todoSlice.actions;

export const selectTodos = ({ todos }) => todos;

export default todoSlice.reducer;
