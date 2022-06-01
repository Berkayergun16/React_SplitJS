import { createSlice } from "@reduxjs/toolkit";



export const DragSlice = createSlice({
    name: "drag",
    initialState: {
        drag:{},
    },
    reducers: {
        setDrag: (state, action) => {
            state.drag = action.payload;
        }
    }
});


export const {setDrag} = DragSlice.actions;
export default DragSlice.reducer;
