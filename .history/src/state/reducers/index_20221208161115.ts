import cellsReducer from './cellsReducers';
import { combineReducers } from 'redux';
import bundlesReducer from './bundlesReducer';

const reducers = combineReducers({
  cells: cellsReducer,
  bundles
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
