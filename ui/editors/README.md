# Table of contents

-   [Overview](#overview)
-   [List of components](#list-of-components)
    -   [addPropertyEditor](#addpropertyeditor)

# Overview

Some of the guiding design goals for this library:

-   Extensible using `addPropertyEditor`, so you can replace or add new editors.
-   All editors offer a consistent interface through the `getPropertyEditor` factory.

# List of components

<api-readme extensions="react" />

<!-- START-API-README -->

## addPropertyEditor

**`react function`**

_defined in [@component-controls/editors/core/specification/src/prop-factory.ts](https://github.com/ccontrols/component-controls/tree/master/core/specification/src/prop-factory.ts#L22)_

**parameters**

| Name      | Type                                                                                                                                                                                                                                                                                                | Description                                                        |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `type*`   | `ControlTypes`.`TEXT`, `ControlTypes`.`NUMBER`, `ControlTypes`.`BOOLEAN`, `ControlTypes`.`OPTIONS`, `ControlTypes`.`DATE`, `ControlTypes`.`COLOR`, `ControlTypes`.`BUTTON`, `ControlTypes`.`OBJECT`, `ControlTypes`.`ARRAY`, `ControlTypes`.`FILES`                                                 | Control field types examples are provided for the different types: |
| `editor*` | <details><summary>`PropertyEditor`&lt;></summary><blockquote>`propTypes`: `WeakValidationMap`&lt;> \| `undefined`<br />`contextTypes`: `ValidationMap`&lt;> \| `undefined`<br />`defaultProps`: `Partial`&lt;`P`> \| `undefined`<br />`displayName`: `string` \| `undefined`</blockquote></details> | : a Property Editor class.                                         |

<!-- END-API-README -->
