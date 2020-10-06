import { IConfig } from "overmind";
import { merge } from "overmind/config";
import { createHook } from "overmind-react";
import * as base from "./base";

export const storeConfig = merge(base, {});

declare module "overmind" {
  interface Config extends IConfig<typeof storeConfig> {}
}

export const useOvermind = createHook<typeof storeConfig>();
