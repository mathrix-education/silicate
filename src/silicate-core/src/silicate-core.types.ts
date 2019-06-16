export type Wall = any[];


export interface BrickDeclaration {
  icon: string;
  displayName: string;
  component: any;
}


export interface BrickMappings {
  [kind: string]: BrickDeclaration;
}
