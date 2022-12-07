import { ActionType } from '../action-types';
import { Action } from '../actions';
import 

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}
