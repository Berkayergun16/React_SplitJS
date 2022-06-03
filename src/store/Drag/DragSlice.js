import { createSlice } from "@reduxjs/toolkit";

export const LocalStrogeQuery = (text) => {
  return localStorage.getItem(text)
    ? JSON.parse(localStorage.getItem(text))
    : [50, 50];
};

export const DragSlice = createSlice({
  name: "drag",
  initialState: {
    drag_top: [LocalStrogeQuery("split-sizes")],
    drag_bottom: [LocalStrogeQuery("split-sizes-bottom")],
    drag_vertical: [LocalStrogeQuery("split-sizes-vertical")],
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
    },
  },
});

export const { setDrag, setDragBottom, setDragVertical } = DragSlice.actions;
export default DragSlice.reducer;
