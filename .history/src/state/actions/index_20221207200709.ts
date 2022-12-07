import { ActionType } from '../action-types';

interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: 'down' | 'up';
  };
}

interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string; //id
}

interface InsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string;
    type: 'code' | 'text';
  };
}

interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
}
