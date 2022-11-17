import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "list",
    initialState: {
        value: []
    },
    reducers: {
        add_todo: (state, action) => {
            state.value = action.payload.list
        },
        delete_todo: (state, action) => {
            state.value = action.payload.list
        }
    }
})

export const { add_todo } = todoSlice.actions;
export const { delete_todo } = todoSlice.actions;
export default todoSlice.reducer; 