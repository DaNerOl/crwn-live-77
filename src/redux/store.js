import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const store = createStore(rootReducer, composeEnhancers());
export const persistor = persistStore(store);

export default { store, persistor };
