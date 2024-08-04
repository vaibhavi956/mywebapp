import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";
import logger from "redux-logger";
import { sagaReducer } from "./sagaReducer";
import rootSaga from "./action/rootSaga";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware=createSagaMiddleware();


export const appStore= configureStore({
    reducer: {
        appReducer,
        sagaReducer
    },
    middleware: () => {
        return [logger, sagaMiddleware]
    }
})
sagaMiddleware.run(rootSaga)
