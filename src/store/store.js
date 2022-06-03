import { configureStore } from "@reduxjs/toolkit";
import dragReducer from "./Drag/DragSlice";

export const store = configureStore({
    reducer: {
        drag: dragReducer,
    },
  });