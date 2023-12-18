export type Transparent = 0;
export type Black = 1;
export type White = 2;
export type LogoDefinition = (Transparent | Black | White)[][];

export interface LogoDefinitionSet {
  [size: number]: LogoDefinition;
}

export function Logo(
  chars: string,
): (str: TemplateStringsArray) => LogoDefinition;
export function Logo(str: TemplateStringsArray): LogoDefinition;
export function Logo(
  arg: string | TemplateStringsArray,
): LogoDefinition | ((str: TemplateStringsArray) => LogoDefinition) {
  if (typeof arg === "string") {
    const chars = arg;

    if (chars.length !== 3) {
      throw new Error(
        `Invalid logo definition: chars must be 3 characters, but got ${chars.length}`,
      );
    }

    if (
      chars[0] === chars[1] ||
      chars[1] === chars[2] ||
      chars[2] === chars[0]
    ) {
      throw new Error(
        "Invalid logo definition: chars must have 3 different characters",
      );
    }

    return _Logo(chars);
  } else {
    return _Logo(".-*")(arg);
  }
}

function _Logo(chars: string): (str: TemplateStringsArray) => LogoDefinition {
  return function (str: TemplateStringsArray): LogoDefinition {
    const definition = str[0]
      .replace(/^\n|\n$/g, "")
      .split("\n")
      .map((line) =>
        [...line].map((c) => {
          const index = chars.indexOf(c);

          if (index < 0) {
            throw new Error(`Invalid character: ${c}`);
          }

          return index as Transparent | Black | White;
        }),
      );

    if (definition.some((line) => line.length !== definition[0].length)) {
      throw new Error(
        "Invalid logo definition: all lines must have the same length",
      );
    }

    return definition;
  };
}
