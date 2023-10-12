// AddTodo.js
import React, { useState } from 'react';
import { useUser } from './UserContext';

function AddTodo() {
  const {state, dispatch } = useUser();
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setText('');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Enter your todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
