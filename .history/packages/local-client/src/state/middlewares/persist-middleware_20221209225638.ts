import { Dispatch } from "redux";
import { Action } from "../actions";
export const persistMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next : ) => {
    return (action) => {};
  };
};
