import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  applyMiddleware,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsSlice from '../features/post/PostsSlice';
import todosReducer from '../features/todos/TodosSlice';

const reducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  post: postsSlice,
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: true })],
});
