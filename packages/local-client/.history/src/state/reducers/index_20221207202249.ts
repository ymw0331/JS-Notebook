import cellsReducer from './cellsReducrs';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducers;

export type Root
