import type { LogoDefinitionSet } from "@kissge/kissqr";

export function logo(data: Record<number, string>) {
  return Object.fromEntries(
    Object.entries(data).map(([size, logoString]) => [
      size,
      logoString
        .replace(/^\n|\n$/g, "")
        .split("\n")
        .map((line) => [...line].map((c) => "・／黒".indexOf(c))),
    ]),
  ) as LogoDefinitionSet;
}
