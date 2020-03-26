export interface Scope {
  lookup: (name: string) => Scope | undefined;
  node: NodePath;
}

export interface NodePath {
  parentPath: NodePath;
  scope: Scope;
}

export type ParserPluginWithOptions =
  | ['decorators', NodePath]
  | ['pipelineOperator', Scope];
