import { createSlice } from "@reduxjs/toolkit";

export const DragSlice = createSlice({
  name: "drag",
  initialState: {
    drag_top: [
      localStorage.getItem("split-sizes")
        ? JSON.parse(localStorage.getItem("split-sizes"))
        : [50, 50],
    ],
    drag_bottom: [
      localStorage.getItem("split-sizes-bottom")
        ? JSON.parse(localStorage.getItem("split-sizes-bottom"))
        : [50, 50],
    ],
    drag_vertical: [
      localStorage.getItem("split-sizes-vertical")
        ? JSON.parse(localStorage.getItem("split-sizes-vertical"))
        : [50, 50],
    ],
  },
  reducers: {
    setDrag: (state, action) => {
      state.drag_top = action.payload;
    },
    setDragBottom: (state, action) => {
      state.drag_bottom = action.payload;
    },
    setDragVertical: (state, action) => {
        state.drag_vertical = action.payload;
    }
  },
});

export const { setDrag, setDragBottom ,setDragVertical} = DragSlice.actions;
export default DragSlice.reducer;
