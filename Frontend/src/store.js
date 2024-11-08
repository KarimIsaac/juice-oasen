import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { juiceApiSlice } from "./slices/juiceApiSlice";
import  userApiSlice  from "./slices/userApiSlice";
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [juiceApiSlice.reducerPath]: juiceApiSlice.reducer,
        user: userApiSlice, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, juiceApiSlice.middleware),
    devTools: true,
});

export default store;