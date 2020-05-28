import { Action, rehydrate } from "overmind";
import { Pages } from "./state";

export const changePage: Action<any> = ({ state }, mutations: any) => {
  rehydrate(state, mutations || []);

  switch (state.page) {
    case Pages.index:
      // Do some additional logic
      break;
    default:
      break;
  }
};
