import { Command } from "commander";
import { install } from "../helpers/ffbinaries";

export function addInstallCommand(program: Command): void {
  program
    .command("install")
    .description("Install a specific version")
    .argument("version")
    .action((version) => install(version.toString()));
}
