// App.js
import React from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider> {}
        <Nav />
        <TodoList />
        <AddTodo />
    </UserProvider>
  );
}

export default App;
