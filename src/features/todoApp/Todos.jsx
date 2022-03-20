import { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

import { GoPlus } from "react-icons/go";

import { motion } from "framer-motion";

function Todos() {
  const [ todo, setTodo ] = useState( "" );

  const dispatch = useDispatch();
  return (
    <div className="addtodos">
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="todo-input"
        value={todo}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          {todo !== ""
            ? dispatch(
                addTodo({
                  id: Math.floor(Math.random() * 1000),
                  item: todo,
                  status: false,
                })
              )
            : alert("Please type something!");
          };
          setTodo("");
        }}
        className="add-btn"
      >
        <GoPlus />
      </motion.button>
    </div>
  );
}

export default Todos;
