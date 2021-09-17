import { applyMiddleware, createStore } from "redux";
import redcuer from "../store/reducers/redcuer";
import { middlewares } from "../store/store";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(redcuer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const setHookState = (newState) =>
  jest.fn().mockImplementation((state) => [newState, (newState) => {}]);
