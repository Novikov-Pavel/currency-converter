import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./sliceFrom";

export const cur = createAsyncThunk<string[], void>(
    "sliceCurrency/curr",
    async (_, { rejectWithValue }) => {
        return fetch(
            `https://v6.exchangerate-api.com/v6/e915be4bac39ade33dc11fc4/latest/${initialState}`
        )
            .then((res) => res.json())
            .then((res) => Object.keys(res.conversion_rates))
            .then((res) => localStorage.setItem("item", JSON.stringify(res)))
            .then(() => JSON.parse(localStorage.getItem("item") || ""))
            .catch((e) => rejectWithValue(e.message));
    }
);

interface init {
    item: string[];
}
const State: init = {
    item: [],
};

export const sliceCurrency = createSlice({
    name: "sliceCurrency",
    initialState: State,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(cur.fulfilled, (state, action) => {
            state.item = action.payload;
        });
        builder.addCase(cur.rejected, (state, action) => {
            console.error("Ошибка: ", action.payload);
        });
    },
});

export default sliceCurrency.reducer;
