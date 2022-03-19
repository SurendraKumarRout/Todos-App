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
        },
        updateTodo: ( state, action ) =>
        {
            state =  state.todos.map( ( e ) =>
            {
                if ( e.id === action.payload.id )
                {
                    return {
                        ...e,
                        item: action.payload.item,
                    };
                }
                return e;
            })
        },
        updateStatus: ( state, action ) =>
        {
            state.todos = state.todos.map( ( e ) =>
            {
                if ( e.id === action.payload )
                {
                    return {
                        ...e,
                        status: true,
                    }
                }
                return e;
            })
        }
    }
} )

export const { addTodo, removeTodo, updateTodo, updateStatus } = todosSlice.actions;
export default todosSlice.reducer;