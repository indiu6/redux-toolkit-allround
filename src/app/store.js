import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsSlice from '../features/post/PostsSlice';
import todosReducer from '../features/todos/TodosSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    post: postsSlice,
  },
});
