import { Command } from "commander";
import console from "node:console";
import { globalConfig } from "../helpers/ffvmconfig";
import { packageName } from "../helpers/package-json";

export function addGetCommand(program: Command): void {
  const getCommand = program
    .command("get")
    .description("gets ffvm configuration current values");

  addGetAllCommand(getCommand);
}

export function addGetAllCommand(program: Command): void {
  program
    .command("all")
    .description("dumps the full ffvm configuration to console")
    .action(async () => {
      const config = await globalConfig().catch((err) =>
        console.error(`Failed to find global config file: ${err}`),
      );

      if (config) {
        console.log(`Found Global Config file at ${config.filepath}`);
        console.log(config.config);
      } else {
        console.error(`Failed to find global config file: ${packageName()}`);
      }
    });
}
