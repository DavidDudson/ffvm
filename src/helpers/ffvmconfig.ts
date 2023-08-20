import { cosmiconfig } from "cosmiconfig";
import os from "node:os";
import { packageName } from "./package-json";
import { ConfigResult } from "./config";

export interface FfvmConfig {
  version: string;
  cacheDirectory: string;
}

export async function globalConfig(): Promise<ConfigResult<FfvmConfig> | null> {
  const explorer = cosmiconfig(packageName());
  return explorer.search(os.homedir());
}

export async function globalVersion(): Promise<string | null> {
  const config = await globalConfig();
  return config?.config?.version ?? null;
}
