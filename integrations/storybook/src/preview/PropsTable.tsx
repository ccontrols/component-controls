import React from 'react';
import { styled } from '@storybook/theming';
import {
  PropDef,
  PropsTableExtraColumn,
  PropsTableExtraRows,
  Icons,
} from '@storybook/components';
import {
  FlexContainer,
  PropertyEditor,
  getPropertyEditor,
} from '@component-controls/editors';

const TitleIcon = styled(Icons)({
  height: 18,
  width: 18,
});

export const createPropsTableControls = ({
  storyId,
  rows: propsTable,
  context,
}: {
  storyId: string;
  rows: PropDef[];
  context: any;
}): PropsTableExtraColumn => {
  const api: any = (context as any).clientApi;
  const story = context.storyStore.fromId(storyId) || {};
  const { controls } = story;
  const onChange = (propName: string, value: any) => {
    if (storyId) {
      api.setControlValue(storyId, propName, value);
    }
  };
  const onClick = (id: string, propName: string) => {
    if (id) {
      api.clickControl(id, propName);
    }
  };
  const rows = controls
    ? Object.keys(controls)
        .filter(name => propsTable.find(row => row.name === name) !== undefined)
        .reduce((acc: PropsTableExtraRows, name) => {
          const field = controls[name];
          const InputType: PropertyEditor = getPropertyEditor(field.type);
          if (InputType) {
            return {
              ...acc,
              [name]: (
                <FlexContainer align="left">
                  <InputType
                    prop={field}
                    name={name}
                    onChange={onChange}
                    onClick={onClick}
                  />
                </FlexContainer>
              ),
            };
          }
          return acc;
        }, {})
    : {};
  return {
    title: (
      <FlexContainer>
        <TitleIcon icon="edit" />
      </FlexContainer>
    ),
    rows: Object.keys(rows).length ? rows : null,
  };
};
