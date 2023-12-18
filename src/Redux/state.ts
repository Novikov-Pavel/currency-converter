import { configureStore } from "@reduxjs/toolkit";
import sliceCurrency from "./sliceCurrency";
import sliceValue from "./sliceValue";
import fromSlice from "./sliceFrom";

const store = configureStore({
    reducer: {
        sliceCurrency,
        sliceValue,
        fromSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
