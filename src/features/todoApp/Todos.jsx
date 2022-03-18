// import React from 'react'
// import { useState } from 'react';

// import { addTodo } from "../redux/Actions";


// const Todos = () =>
// {
    
//   const [ todos, setTodos ] = useState( "" );
 

//     const handleChange = ( e ) =>
//     {
//         setTodos( e.target.value );  //e.target.value = input value
//     }
//     console.log(todos);
//   return (
//     <div>
//       <h1>Aarya's Todos App</h1>
//       <input
//         type="text"
//         placeholder="Enter your task"
//         onChange={(e) => handleChange(e)}    //Whenever something changes in the input, e got updated, then e value pass through the function
//         ></input>
//       <button onClick={ () => dispatch(addTodo(todos))}>ADD</button>
//     </div>
//   );
// }

// export default Todos





function Todos() {
  return (
      <>
          <h1>Aarya's Todo App</h1>
          <input />
          <button>ADD</button>
      </>
  )
}

export default Todos