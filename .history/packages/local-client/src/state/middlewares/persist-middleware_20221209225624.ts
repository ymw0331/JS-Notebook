import { Dispatch } from "redux";
export const persistMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next) => {
    return (action) => {};
  };
};
