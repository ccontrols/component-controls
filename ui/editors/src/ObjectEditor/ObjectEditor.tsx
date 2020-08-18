import React, { FC } from 'react';
import { Button, Box } from 'theme-ui';
import {
  ControlTypes,
  ComponentControl,
  ComponentControlObject,
  mergeControlValues,
  ComponentControls,
} from '@component-controls/core';
import { Popover } from '@component-controls/components';
import { useControl, ControlsStateProvider } from '@component-controls/store';
import { PropertyEditor, PropertyControlProps } from '../types';
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
  editLabel = 'edit...',
}) => {
  const [control, onChange] = useControl<ComponentControlObject>(name);

  const { editLabel: controlEditLabel } = control;
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (childName: string | undefined, value: any) => {
    onChange(mergeControlValues(control.value as any, childName, value));
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
  const childControls: ComponentControls = control.value || {};
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
                        <ControlsStateProvider
                          onChange={handleChange}
                          controls={childControls}
                        >
                          <child.node name={child.name} />
                        </ControlsStateProvider>
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
