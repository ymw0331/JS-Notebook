import { ActionType } from '../action-types';
import {
  Action,
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellBeforeAction,
} from '../actions';

export const updateCell = (id: string, content: strin): UpdateCellAction => {};

export const deleteCell = (): DeleteCellAction => {};

export const moveCell = (): MoveCellAction => {};

export const insertCellBefore = (): InsertCellBeforeAction => {};
