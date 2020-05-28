import { IConfig } from "overmind";
import { merge } from "overmind/config";
import { createHook } from "overmind-react";
import * as base from "./base";

export const config = merge(base, {});

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
