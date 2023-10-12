//! აქ  ვერ ვასწორებდი ამ ორ ერორს, როდესაც Edit-ს ვცდილობდი და ვეცდებოდი Input ში რამის დაწერას Input აუტომატურად ქრებოდა და შეცვლის უფლებას არ მაძლევდა, ხოლო მეორე პრობლემა წაშლის ღილაკზე დაჭერისას არ იშლებოდა
import React, { useState } from 'react';
import { useUser } from './UserContext';

const TodoList = () => {
  const { state, dispatch } = useUser();
  const { todos, user } = state;
  const [editedTodo, setEditedTodo] = useState(null);

  const handleEdit = (todo) => setEditedTodo(todo);

  const handleSaveEdit = (todo) => {
    dispatch({ type: 'EDIT_TODO', payload: todo });
    setEditedTodo(null);
  };

  const handleDelete = (todo) => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <div>
      <h2>Todo List</h2>
      {user.isLoggedIn ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {editedTodo === todo ? (
                <div>
                  <input
                    type="text"
                    value={todo.text}
                    onChange={(e) => {
                      const updatedTodo = { ...todo, text: e.target.value };
                      handleSaveEdit(updatedTodo);
                    }}
                  />
                  <button onClick={() => handleSaveEdit(todo)}>Save</button>
                </div>
              ) : (
                <div>
                  {todo.text}
                  {user.role === 'admin' && (
                    <>
                      <button onClick={() => handleEdit(todo)}>Edit</button>
                      <button onClick={() => handleDelete(todo)}>Delete</button>
                    </>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Please log in to view your todos.</p>
      )}
    </div>
  );
};

export default TodoList;
