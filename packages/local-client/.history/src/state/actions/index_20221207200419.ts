import { ActionType } from '../action-types';

interface MoveCellAction {
  type: ActionType.MOVE_CELL;
}

interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
}

interface InsertCellBeforeAction {}

interface UpdateCellAction {}
