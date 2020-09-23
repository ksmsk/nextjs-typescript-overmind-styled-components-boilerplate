import { Action, rehydrate } from "overmind";
import { Pages, Themes } from "./state";

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

export const toggleTheme: Action<void> = ({ state }) => {
  state.theme =
    state.theme === Themes.primary ? Themes.secondary : Themes.primary;
};
