import React, { useState } from "react";
import "./App.css";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-white text-xl font-bold">ToDo App</h1>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>

      {/* SIGNED OUT UI */}
      <SignedOut>
        <div className="flex items-center justify-center h-[80vh]">
          <div className="bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center max-w-md w-full">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              Organize Your Life 📝
            </h2>

            <p className="text-gray-600 mb-8">
              Login to manage your daily tasks, stay productive and never miss
              anything important.
            </p>

            <SignInButton>
              <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-700 transition">
                Sign In to Continue
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      {/* SIGNED IN UI */}
      <SignedIn>
        <div className="flex justify-center mt-10 px-4">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              My To-Do List ✅
            </h2>

            <TodoForm addTodo={addTodo} />

            <div className="mt-4">
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}

export default App;
