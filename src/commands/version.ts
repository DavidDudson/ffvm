import { Command } from "commander";
import { ffVersion } from "../helpers/ffconfig";
import console from "node:console";
import { globalVersion } from "../helpers/ffvmconfig";

export function addVersionCommand(program: Command): void {
  program
    .command("versions")
    .description("resolve which version are in use")
    .action(async () => {
      const version = await ffVersion().catch((err) =>
        console.error(`Failed to find local version: ${err}`),
      );
      const defaultVersion = await globalVersion().catch((err) =>
        console.error(`Failed to find global version: ${err}`),
      );
      console.log(`Global Version is ${defaultVersion}`);
      console.log(`Local Version is ${version}`);
    });
}
