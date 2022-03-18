import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./todosSlice";

function Todos() {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.myTodoApp.todos);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Aarya's Todo App</h1>
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() =>
          dispatch(
            addTodo({
              id: Math.floor(Math.random() * 1000),
              item: todo,
              status: false,
            })
          )
        }
      >
        ADD
      </button>
{/* {console.log(todos)} */}
      {todos.map((e) => {
        return (
          <p key={e.id}>
            {e.item}{" "}
            <button onClick={() => dispatch(removeTodo(e.id))}>DEL</button>
          </p>
        );
      })}
    </>
  );
}

export default Todos;
