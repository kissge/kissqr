/** 0: 空白, 1: 黒, 2: 白 */
export type LogoDefinition = (0 | 1 | 2)[][];

export interface LogoDefinitionSet {
  [size: number]: LogoDefinition;
}
