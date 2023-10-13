import { configureStore } from "@reduxjs/toolkit";
import todReducer from "../features/todo/todoSlice";

export default configureStore({
    reducer: todReducer,
})