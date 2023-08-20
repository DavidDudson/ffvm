import { Command } from "commander";
import { install } from "../helpers/ffbinaries";
import { ffVersion } from "../helpers/ffconfig";
import { globalVersion } from "../helpers/ffvmconfig";
import console from "node:console";

export function addSwitchCommand(program: Command): void {
  program
    .command("switch")
    .description("Switch to the version defined in ffrc")
    .action(async () => {
      const version = await ffVersion();
      const gVersion = await globalVersion();
      if (version) {
        console.log(`Installing Version (${version})`);
        await install(version);
        console.log(`Installed Version (${version})`);
      } else if (gVersion) {
        console.log(`Installing Version (${gVersion})`);
        await install(gVersion);
        console.log(`Installed Version (${gVersion})`);
      } else {
        await install();
        console.log(`No .ffrc or .ffvmrc versions found. Installed default`);
      }
    });
}
