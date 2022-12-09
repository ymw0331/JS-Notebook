import { Dispatch } from "redux";
import { Action } from "../actions";
export const persistMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next : (action:Action) => ) => {
    return (action) => {};
  };
};
