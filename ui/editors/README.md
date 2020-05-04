# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [<ins>ControlsContext</ins>](#inscontrolscontextins)
    -   [<ins>useControlContext</ins>](#insusecontrolcontextins)
    -   [<ins>ConrolsContextProvider</ins>](#insconrolscontextproviderins)
    -   [<ins>getPropertyEditor</ins>](#insgetpropertyeditorins)
    -   [<ins>addPropertyEditor</ins>](#insaddpropertyeditorins)
    -   [<ins>ArrayEditor</ins>](#insarrayeditorins)
    -   [<ins>BooleanEditor</ins>](#insbooleaneditorins)
    -   [<ins>ButtonEditor</ins>](#insbuttoneditorins)
    -   [<ins>ColorEditor</ins>](#inscoloreditorins)
    -   [<ins>DateEditor</ins>](#insdateeditorins)
    -   [<ins>FilesEditor</ins>](#insfileseditorins)
    -   [<ins>NumberEditor</ins>](#insnumbereditorins)
    -   [<ins>ObjectEditor</ins>](#insobjecteditorins)
    -   [<ins>OptionsEditor</ins>](#insoptionseditorins)
    -   [<ins>TextEditor</ins>](#instexteditorins)

# Overview

Some of the guiding design goals for this library:

-   Extensible using `addPropertyEditor`, so you can replace or add new editors.
-   All editors offer a consistent interface through the `getPropertyEditor` factory.

# List of components

<react-docgen-typescript path="./src" exclude="index.ts,.stories.tsx$,CheckboxEditor.tsx,RadiosEditor.tsx" />

<!-- START-REACT-DOCGEN-TYPESCRIPT -->

## <ins>ControlsContext</ins>

Controls context, provides access to the values and property setters

_ControlsContext [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/context.tsx)_

## <ins>useControlContext</ins>

controls context hook for a control editor

_useControlContext [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/context.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>ConrolsContextProvider</ins>

controls context provider

_ConrolsContextProvider [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/context.tsx)_

### properties

| Name        | Type                                | Description                                             |
| ----------- | ----------------------------------- | ------------------------------------------------------- |
| `controls*` | _ComponentControls_                 | controls for to current context.                        |
| `onChange*` | _(name: string, prop: any) => void_ | onChange event called when the propery is changing      |
| `onClick`   | _PropertyOnClick_                   | onClick event handler for Button type property editors. |

## <ins>getPropertyEditor</ins>

Property editors factory. Given a propey type, will return a editor compnent class.
@param type : specify the type ie 'text'
@returns a Property Editor class.

_getPropertyEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/prop-factory.ts)_

## <ins>addPropertyEditor</ins>

@param type : specify the type ie 'text'
@param editor : a Property Editor class.

_addPropertyEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/prop-factory.ts)_

## <ins>ArrayEditor</ins>

Array control editor.

_ArrayEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/ArrayEditor/ArrayEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>BooleanEditor</ins>

Boolean control editor. Uses the Toggle component.

_BooleanEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/BooleanEditor/BooleanEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>ButtonEditor</ins>

Button control editor.

_ButtonEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/ButtonEditor/ButtonEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>ColorEditor</ins>

Color control editor.

_ColorEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/ColorEditor/ColorEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>DateEditor</ins>

Date control editor.

_DateEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/DateEditor/DateEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>FilesEditor</ins>

Files control editor.

_FilesEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/FilesEditor/FilesEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>NumberEditor</ins>

Number control editor.

_NumberEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/NumberEditor/NumberEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>ObjectEditor</ins>

Object control editor.

_ObjectEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/ObjectEditor/ObjectEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>OptionsEditor</ins>

Options control editor.

_OptionsEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/OptionsEditor/OptionsEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

## <ins>TextEditor</ins>

Text control editor.

_TextEditor [source code](https:/github.com/ccontrols/component-controls/tree/master/core/specification/src/TextEditor/TextEditor.tsx)_

### properties

| Name    | Type     | Description                   |
| ------- | -------- | ----------------------------- |
| `name*` | _string_ | name of the property control. |

<!-- END-REACT-DOCGEN-TYPESCRIPT -->
