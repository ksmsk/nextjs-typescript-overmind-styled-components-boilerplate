export enum Pages {
  index = "Index",
  about = "About",
}

type State = {
  page: Pages;
};

export const state: State = {
  page: Pages.index,
};
