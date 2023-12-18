import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./sliceFrom";

export const valueRes = createAsyncThunk<number[], void>(
    "sliceValue/value",
    async (_, { rejectWithValue }) => {
        return fetch(
            `https://v6.exchangerate-api.com/v6/e915be4bac39ade33dc11fc4/latest/${initialState}`
        )
            .then((res) => res.json())
            .then((res) => Object.values(res.conversion_rates))
            .then((res) => localStorage.setItem("value", JSON.stringify(res)))
            .then(() => JSON.parse(localStorage.getItem("value") || ""))
            .catch((e) => rejectWithValue(e.message));
    }
);

interface init {
    value: number[];
}
const State: init = {
    value: [],
};

export const sliceValue = createSlice({
    name: "sliceValue",
    initialState: State,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(valueRes.fulfilled, (state, action) => {
            state.value = action.payload;
        });
        builder.addCase(valueRes.rejected, (state, action) => {
            console.error("Ошибка: ", action.payload);
        });
    },
});

export default sliceValue.reducer;
