import { useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo, updateStatus } from "./todosSlice";

function Todos() {
  const [todo, setTodo] = useState("");

  const inputRef = useRef( true );
 

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
 console.log("ref",inputRef)
  const update = (id, value, x) => {
    if (x.which === 13) {
      dispatch(updateTodo(({ id, item: value })));
      inputRef.current.disabled = true;
    }
  };

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
      <ul>
        {todos.map((e) => {
          return (
            <li key={e.id}>
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={e.item}
                onKeyPress={(x) => update(e.id, inputRef.current.value, x)}
              />

              <button onClick={ () => changeFocus() }>EDIT</button>
              <button onClick={() => dispatch(updateStatus(e.id))}>STATUS</button>
              <button onClick={() => dispatch(removeTodo(e.id))}>DEL</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
