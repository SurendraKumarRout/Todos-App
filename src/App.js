import "./features/todoApp/STYLE/main.css"

import DisplayTodos from "./features/todoApp/DisplayTodos";
import Todos from "./features/todoApp/Todos";

import { motion } from "framer-motion";



function App ()
{
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
<<<<<<< HEAD
        GLOBALLOGIC
=======
        New Todo
>>>>>>> e6a5ff1f27f3f2639ea9760a6a3c0bd5cb90b1c6
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
