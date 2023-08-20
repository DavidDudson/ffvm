import process from "node:process";
import { Command } from "commander";
import { addUseCommand } from "./commands/use";
import { packageVersion } from "./helpers/package-json";
import { addVersionCommand } from "./commands/version";
import { addGetCommand } from "./commands/get";

const program = new Command();

program.version(packageVersion()).description("Easily switch ffmpeg versions");

addUseCommand(program);
addVersionCommand(program);
addGetCommand(program);

program.parse(process.argv);
