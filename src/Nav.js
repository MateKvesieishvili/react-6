import React from 'react';
import { useUser } from './UserContext';

function Nav() {
  const { state } = useUser();

  return (
    <div>
      <p>{state.user.name}</p>
      <p>{`Todos: ${state.todos.length}`}</p>
    </div>
  );
}

export default Nav;
