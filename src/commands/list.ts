import { Command } from "commander";
import { listPlatforms, listVersions } from "../helpers/ffbinaries";

export function addListCommand(program: Command): void {
  const listCommand = program
    .command("list")
    .description("list versions, platforms etc.");
  addListVersionsCommand(listCommand);
  addListPlatformsCommand(listCommand);
}

export function addListVersionsCommand(listCommand: Command): void {
  listCommand
    .command("available")
    .description("Lists versions available")
    .action(() => listVersions());
}

export function addListPlatformsCommand(listCommand: Command): void {
  listCommand
    .command("platforms")
    .description("Lists platforms available")
    .action(() => listPlatforms());
}
