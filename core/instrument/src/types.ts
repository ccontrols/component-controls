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
  name?: string;
  loc: CodeSource;
}

export type StoryParameters = StoryParameter[];

export interface Story {
  name?: string;
  arguments?: StoryParameters;
  properties?: StoryParameters;
  location?: CodeSource;
  source?: string;
}

export interface Stories {
  [name: string]: Story;
}

export interface StoriesGroup {
  title?: string;
  properties?: StoryParameters;
  stories: Stories;
}
