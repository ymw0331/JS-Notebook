import cellsReducer from './cellsReducers';
import { combineReducers } from 'redux';
import bund

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
