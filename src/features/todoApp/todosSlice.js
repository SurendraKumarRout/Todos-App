import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
} 

export const todosSlice = createSlice( {
    name: "todoApp",
    initialState,
    reducers: {
        addTodo: ( state, action ) =>
        {
            state = state.todos.push( action.payload );
        },
        removeTodo: ( state, action ) =>
        {
           state.todos = state.todos.filter((e) => e.id !== action.payload)
        }
    }
} )

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;