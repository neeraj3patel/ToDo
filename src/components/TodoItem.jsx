import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-2 rounded">
      {isEditing ? (
        <>
          <input
            className="flex-grow p-1 mr-2 border rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-2 py-1 rounded mr-1"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span className="flex-grow">{todo.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 py-1 rounded mr-1"
          >
            Edit
          </button>
        </>
      )}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
