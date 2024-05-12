import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk'; // Import 'thunk' as a named export
import todoReducer from './reducers/todoReducer';
import tabReducer from './reducers/tabReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    currentTab: tabReducer
});

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
