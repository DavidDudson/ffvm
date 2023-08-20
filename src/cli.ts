import process from "node:process";
import { Command } from "commander";
import { addUseCommand } from "./commands/use";
import * as pack from '../package.json';


const program = new Command();

program.version(pack.version).description("Easily switch ffmpeg versions");

addUseCommand(program);

program.parse(process.argv);
