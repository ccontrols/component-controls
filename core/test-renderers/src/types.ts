import { Story, Document, RunConfiguration } from '@component-controls/core';

export type Json =
  | {
      type: string;
      props?: { [key: string]: any };
      children: Array<Json> | null;
    }
  | DocumentFragment;

export type RendererFnResult = {
  toJson: () => Json | null;
};

export type RendererFn = (
  props: { story: Story; doc: Document; config: RunConfiguration },
  options?: any,
) => Promise<RendererFnResult | undefined>;
