import React, {useState} from "react";
import TodoItem from "./TodoItem";

import { motion,AnimatePresence } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, updateStatus } from "./todosSlice";

const DisplayTodos = () => {
  const [sort, setSort] = useState("active");

    const todos = useSelector( ( state ) => state.myTodoApp.todos );
    
  const dispatch = useDispatch();

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {/* ACTIVE */}
          {todos.length > 0 && sort === "active"
            ? todos.map((e) => {
                return (
                  e.status === false && (
                    <TodoItem
                      key={e.id}
                      item={e}
                      removeTodo={(id) => dispatch(removeTodo(id))}
                      updateTodo={(obj) => dispatch(updateTodo({ obj }))}
                      updateStatus={(id) => dispatch(updateStatus(id))}
                    />
                  )
                );
              })
            : null}

          {/* COMPLETED */}
          {todos.length > 0 && sort === "completed"
            ? todos.map((e) => {
                return (
                  e.status === true && (
                    <TodoItem
                      key={e.id}
                      item={e}
                      removeTodo={(id) => dispatch(removeTodo(id))}
                      updateTodo={(obj) => dispatch(updateTodo({ obj }))}
                      updateStatus={(obj) => dispatch(updateStatus(obj))}
                    />
                  )
                );
              })
            : null}

          {/* ALL */}
          {todos.length > 0 && sort === "all"
            ? todos.map((e) => {
                return (
                  <TodoItem
                    key={e.id}
                    item={e}
                    removeTodo={(id) => dispatch(removeTodo(id))}
                    updateTodo={(obj) => dispatch(updateTodo(obj))}
                    updateStatus={(obj) => dispatch(updateStatus(obj))}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodos;
