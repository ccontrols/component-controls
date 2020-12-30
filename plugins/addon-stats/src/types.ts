import { Story, Document, Component, JSXNode } from '@component-controls/core';

export interface ComponentStats {
  /**
   * list of stories for this component
   */
  stories: Story[];
  /**
   * list of components that are using this component, and how many times
   */
  usedBy: Record<
    string,
    {
      count: number;
      node: JSXNode;
    }
  >;
  /**
   * list of the used attributes for this component, and how many times other components are using this attribute
   */
  attributes: Record<string, number>;
  /**
   * name of the component
   */
  name: string;
}

export type ComponentStatsList = Record<string, ComponentStats>;

/**
 * stats filter callback function
 */
export type StatsFilter = ({
  doc,
  component,
}: {
  doc: Document;
  component: Component;
}) => boolean;

export interface ComponentAggregateRow {
  component: Component;
  componentHash: string;
  stats: ComponentStats;
  storiesCount: number;
  usedByCount: number;
  attributesCount: number;
}

export interface ComponentAggregateStats {
  data: ComponentAggregateRow[];
  maxStories: number;
  maxUsed: number;
  maxAttributes: number;
}

export interface AttributeAggregateRow {
  attribute: string;
  components: Record<
    string,
    {
      name: string;
      count: number;
    }
  >;
  componentsCount: number;
  usedByCount: number;
}

export interface AttributeAggregateStats {
  data: AttributeAggregateRow[];
  maxUsed: number;
  maxComponentsCount: number;
}
