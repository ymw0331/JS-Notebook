import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import {saveCells} from '../'

export const persistMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next: (action: Action) => void) => {
    return (action: Action) => {



    };
  };
};
