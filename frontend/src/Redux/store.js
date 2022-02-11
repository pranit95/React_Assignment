import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = reducer;



export const store  = createStore(rootReducer,applyMiddleware(thunk));