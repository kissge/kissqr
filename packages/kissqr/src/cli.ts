#!/usr/bin/env -S node --enable-source-maps

import { readFile, writeFile } from "fs/promises";
import { create } from "./create";
import { Logo } from "./logo";
import { renderToSVGString } from "./render";
import { resolve } from "path";

async function main() {
  const { options, rest } = await parseArguments(process.argv.slice(2)).catch(
    (reason) => {
      if (reason) {
        console.error(reason);
      }

      console.error("Usage: kissqr --logo LOGO_FILE [--] DATA [DATA2 ...]");

      process.exit(1);
    },
  );

  const logo = await loadLogo(resolve(options.logo)).catch((error) => {
    console.error("Failed to load logo");
    console.error(error);
    process.exit(2);
  });

  for (const data of rest) {
    const qr = await create({ data, logo });
    const fileName = "kissqr-" + getSafeFileName(data) + ".svg";
    await writeFile(fileName, renderToSVGString(qr), "utf-8");
    console.log("Saved to", fileName);
  }
}

async function parseArguments(args: string[]) {
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    throw null;
  }

  const options: { logo: string } = {
    logo: "",
  };
  const rest: string[] = [];
  let doubleDash = false;

  while (args.length) {
    const arg = args.shift()!;

    if (arg === "--logo" || arg === "-l") {
      options.logo = args.shift()!;
    } else if (arg === "--") {
      doubleDash = true;
    } else if (arg.startsWith("--") && !doubleDash) {
      throw "Unknown option: " + arg;
    } else {
      rest.push(arg);
    }
  }

  if (rest.length === 0) {
    throw "No data to process";
  }

  if (!options.logo) {
    throw "No logo defined";
  }

  return { options, rest };
}

async function loadLogo(path: string) {
  const source = await readFile(path, "utf-8");
  return new Function("Logo", source)(Logo);
}

function getSafeFileName(raw: string) {
  return raw.replace(/["<>#%\{\}\|\\\^~\[\]`;\?:@=&/]+/g, "_");
}

main();
