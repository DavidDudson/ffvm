import { Command } from "commander";
import { ffVersion } from "../helpers/ffconfig";
import console from "node:console";
import { globalVersion } from "../helpers/ffvmconfig";
import { packageVersion } from "../helpers/package-json";
import { currentPlatform } from "../helpers/ffbinaries";

export function addInfoCommand(program: Command): void {
  program
    .command("info")
    .description("general info about what versions are in use")
    .action(async () => {
      const version = await ffVersion().catch((err) =>
        console.error(`Failed to find local version: ${err}`),
      );
      const defaultVersion = await globalVersion().catch((err) =>
        console.error(`Failed to find global version: ${err}`),
      );
      console.log(`Ffvm Version: ${packageVersion()}`);
      console.log(`Platform: ${currentPlatform()}`);
      console.log(`Global Version: ${defaultVersion}`);
      console.log(`Local Version: ${version}`);
    });
}
