import logger from "redux-logger";
import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";


export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger],
})