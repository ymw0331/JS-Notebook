import { ActionType } from '../action-types';
import { Action } from '../actions';
import {Cell} from '.'

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}
