import React, { useState, useContext } from "react";
import TodoList from "./TodoList";
import { ThemeContextType } from "./ThemeContext";
import ThemeContext from "./ThemeContext";
import { title } from "process";
interface TodoType {
  title: string;
  done: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
    const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
    const [input, setInput] = useState<string>("");
  return (
    <div className={theme ? "todos dark" : "todos"}>
          <input type="text" value={input} onChange={(e) => {
              setInput(e.target.value);
          }}
        />
      <button
        onClick={() => {
                  setTodos([...todos, { title: input, done: false }]);
                  setInput("");
        }}
      >
        Add Todo
      </button>
      {todos.map((todo, index) => (
        <TodoList title={todo.title} done={todo.done} />
      ))}
    </div>
  );
};

export default Todos;
