export interface SourceLoc {
  line: number;
  column: number;
}

export interface CodeSource {
  start: SourceLoc;
  end: SourceLoc;
}
export interface StoryParameter {
  value: string | StoryParameters;
  loc: CodeSource;
}

export type StoryParameters = StoryParameter[];

export interface Story {
  parameters?: StoryParameters;
  source: CodeSource;
}

export interface Stories {
  [name: string]: Story;
}
