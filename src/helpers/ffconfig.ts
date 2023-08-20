import { cosmiconfig } from "cosmiconfig";
import { ConfigResult } from "./config";

export interface Ffconfig {
  version: string;
}

export async function ffVersion(): Promise<string | null> {
  const config = await ffconfig();
  return config?.config?.version?.toString() ?? null;
}

export async function ffconfig(): Promise<ConfigResult<Ffconfig> | null> {
  const explorer = cosmiconfig("ff");
  return explorer.search();
}
