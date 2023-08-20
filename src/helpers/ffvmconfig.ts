import { cosmiconfig } from "cosmiconfig";
import os from "node:os";
import path from "node:path";
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

export async function binaryCacheFolder(): Promise<string> {
  const config = await globalConfig();
  const cacheDir = config?.config?.cacheDirectory ?? null;
  return cacheDir ? path.resolve(cacheDir) : defaultBinaryCacheFolder();
}

export function defaultBinaryCacheFolder(): string {
  return path.join(os.homedir(), ".ffvm", "current");
}
