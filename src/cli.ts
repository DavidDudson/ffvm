import process from "node:process";
import { Command } from "commander";
import { addUseCommand } from "./commands/use";
import { packageVersion } from "./helpers/package-json";
import { addGetCommand } from "./commands/get";
import { addInstallCommand } from "./commands/install";
import { addCacheCommand } from "./commands/cache";
import { addInfoCommand } from "./commands/info";
import { addListCommand } from "./commands/list";
import { addSwitchCommand } from "./commands/switch";

const program = new Command();

program.version(packageVersion()).description("Easily switch ffmpeg versions");

addUseCommand(program);
addInfoCommand(program);
addGetCommand(program);
addInstallCommand(program);
addListCommand(program);
addSwitchCommand(program);
addCacheCommand(program);

program.parse(process.argv);
