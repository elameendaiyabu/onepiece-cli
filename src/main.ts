#!/usr/bin/env node
import { Command } from "commander";
import { luffy } from "./characters/luffy.js";

const program = new Command();

program
  .command("luffy")
  .action(() => {
    console.log(luffy);
  })
  .description("print information on monkey d luffy");

program.parse(process.argv);
