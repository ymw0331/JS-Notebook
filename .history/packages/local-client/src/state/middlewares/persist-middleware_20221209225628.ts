import { Dispatch } from "redux";
imoor 
export const persistMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next) => {
    return (action) => {};
  };
};
