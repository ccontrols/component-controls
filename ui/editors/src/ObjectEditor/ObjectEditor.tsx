import React, { FC } from 'react';
import { Button, Box } from 'theme-ui';
import {
  ControlTypes,
  ComponentControl,
  ComponentControlObject,
  mergeControlValues,
  getControlValues,
} from '@component-controls/core';
import { Popover } from '@component-controls/components';
import { PropertyEditor, PropertyControlProps } from '../types';
import { useControl, useControlSelector } from '../state';
import { addPropertyEditor, getPropertyEditor } from '../prop-factory';

const ChildContainer: FC = props => (
  <Box
    css={{
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      boxSizing: 'content-box',
    }}
    {...props}
  />
);

export interface ObjectEditorProps extends PropertyControlProps {
  /**
   * label for the editor button.
   */
  editLabel?: string;
}
/**
 * Object control editor.
 */

export const ObjectEditor: PropertyEditor<ObjectEditorProps> = ({
  name,
  selector,
  editLabel = 'edit...',
}) => {
  const [control, onChange] = useControl<ComponentControlObject>(
    name,
    selector,
  );

  const { editLabel: controlEditLabel } = control;
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (childName: string, value: any) => {
    onChange(
      getControlValues(
        mergeControlValues(control.value as any, childName, value),
      ),
    );
  };
  let children: ({
    name: string;
    prop: ComponentControl;
    node: PropertyEditor;
  } | null)[];
  if (typeof control.value === 'object') {
    children = Object.keys(control.value)
      .map(key => {
        const childProp: ComponentControl = control.value
          ? (control.value[key] as any)
          : null;
        if (!childProp) {
          return null;
        }
        return {
          name: key,
          prop: childProp,
          node: getPropertyEditor(childProp.type),
        };
      })
      .filter(p => p && p.node);
  }
  const childSelector = useControlSelector(control.value || {}, handleChange);
  return (
    <Popover
      trigger="click"
      placement="bottom"
      tooltipShown={isOpen}
      onVisibilityChange={(isVisible: boolean) => {
        setIsOpen(isVisible);
      }}
      tooltip={() => (
        <ChildContainer>
          <table>
            <tbody>
              {children &&
                children.map(child =>
                  child ? (
                    <tr key={`editor_${child.name}`}>
                      <td>{child.prop.label || child.name}</td>
                      <td>
                        <child.node
                          name={child.name}
                          selector={childSelector}
                        />
                      </td>
                    </tr>
                  ) : null,
                )}
            </tbody>
          </table>
        </ChildContainer>
      )}
    >
      <Button aria-label="edit the properties of the object">
        {controlEditLabel || editLabel}
        <Box />
      </Button>
    </Popover>
  );
};

addPropertyEditor(ControlTypes.OBJECT, ObjectEditor);
