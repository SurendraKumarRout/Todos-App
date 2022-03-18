import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../features/todoApp/todosSlice"

export const store = configureStore({
    reducer: {
      myTodoApp: todosReducer, 
  },
});
