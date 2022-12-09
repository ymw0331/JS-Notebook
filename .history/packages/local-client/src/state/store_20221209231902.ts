import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddlware } from ''

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddlware, thunk)
);
