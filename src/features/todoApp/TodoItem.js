import React from "react";
import { useRef } from "react";

import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { motion } from "framer-motion";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, updateStatus } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, x) => {
    if (x.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(x) => update(item.id, inputRef.current.value, x)}
      />

      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          <AiFillEdit />
        </motion.button>
        {item.status === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => updateStatus(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          <RiDeleteBin6Fill />
        </motion.button>
      </div>
      {item.status && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
