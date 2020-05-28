export const hydrator = (overmind: any) =>
  JSON.parse(JSON.stringify(overmind.hydrate()));
