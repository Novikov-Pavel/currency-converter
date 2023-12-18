import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState = "USD";

const fromSlice = createSlice({
    name: "from",
    initialState,
    reducers: {
        setFromSlice(state, action: PayloadAction<string>) {
            state = action.payload;
            return state;
        },
    },
})

export const { setFromSlice } = fromSlice.actions;
export default fromSlice.reducer;