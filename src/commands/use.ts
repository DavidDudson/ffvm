import { Command } from "commander";

export function addUseCommand(program: Command): void {
  program.command("use").description("Switch to a different version");
}
