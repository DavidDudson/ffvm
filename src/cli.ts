import process from "node:process";
import { Command } from "commander";
import { addUseCommand } from "./commands/use";
import packageJson from "#package.json";

const program = new Command();

program
  .version(packageJson.version)
  .description("Easily switch ffmpeg versions");

addUseCommand(program);

program.parse(process.argv);
