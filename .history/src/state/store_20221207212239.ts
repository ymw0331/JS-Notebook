import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Actio

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({


});

console.log(store.getState());
