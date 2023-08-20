import { Command } from "commander";
import { cleanCache } from "../helpers/ffbinaries";

export function addCacheCommand(program: Command): void {
  const cacheCommand = program
    .command("cache")
    .description("Manage the binary cache");
  addCacheCleanCommand(cacheCommand);
}

export function addCacheCleanCommand(cacheCommand: Command): void {
  cacheCommand
    .command("clean")
    .description("Removes all downloaded binaries")
    .action(() => cleanCache());
}
