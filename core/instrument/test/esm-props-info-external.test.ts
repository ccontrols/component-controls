import path from 'path';
import { fixtureToTest, TestCallback } from './loadTestFiles';
import { getComponentProps } from '../src/misc/props-info';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-info-external'], fileName, callback, {
    stories: { sourceFiles: false },
    propsLoaders: [
      { name: '@component-controls/react-docgen-info', test: /\.(js|jsx)$/ },
      {
        name: '@component-controls/react-docgen-typescript-info',
        test: /\.(ts|tsx)$/,
      },
      ,
    ],
    components: {
      resolveFile: (componentName, filePath) => {
        if (filePath.includes('theme-ui/dist')) {
          const resolved = path.resolve(
            path.dirname(filePath),
            `../../@theme-ui/components/index.d.ts`,
          );
          return resolved;
        }
        return filePath;
      },
    },
  });

describe('esm-props-info-external', () => {
  createTest('theme-ui.jsx', parsed => {
    const component = parsed.components[parsed.doc.componentsLookup['Button']];
    expect(component).toMatchObject({
      name: 'Button',
      from: 'theme-ui',
      externalDependencies: {
        react: [
          {
            name: 'React',
            importedName: 'namespace',
          },
        ],
        '@emotion/styled': [
          {
            name: 'StyledComponent',
            importedName: 'StyledComponent',
          },
        ],
        '@emotion/react': [
          {
            name: 'Interpolation',
            importedName: 'Interpolation',
          },
        ],
        'styled-system': [
          {
            name: 'SpaceProps',
            importedName: 'SpaceProps',
          },
          {
            name: 'ColorProps',
            importedName: 'ColorProps',
          },
          {
            name: 'MarginProps',
            importedName: 'MarginProps',
          },
        ],
        '@theme-ui/css': [
          {
            name: 'ResponsiveStyleValue',
            importedName: 'ResponsiveStyleValue',
          },
          {
            name: 'ThemeUIStyleObject',
            importedName: 'ThemeUIStyleObject',
          },
        ],
      },
      localDependencies: {},
      importedName: 'Button',
      jsx: [],
      fileName: 'index.d.ts',
      info: {
        tags: {
          see: 'https ://theme-ui.com/components/button',
        },
        description: 'Primitive button component with variants',
        displayName: 'Button',
        methods: [],
        props: {
          as: {
            parentName: 'BoxOwnProps',
            type: {
              name: 'ElementType<any>',
              raw: 'ElementType<any>',
            },
          },
          m: {
            description: 'Margin on top, left, bottom and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          margin: {
            description: 'Margin on top, left, bottom and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          mt: {
            description: 'Margin on top',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          marginTop: {
            description: 'Margin on top',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          mb: {
            description: 'Margin on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          marginBottom: {
            description: 'Margin on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          ml: {
            description: 'Margin on left',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          marginLeft: {
            description: 'Margin on left',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          mr: {
            description: 'Margin on right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          marginRight: {
            description: 'Margin on right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          my: {
            description: 'Margin on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          marginY: {
            description: 'Margin on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          mx: {
            description: 'Margin on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          marginX: {
            description: 'Margin on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          name: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          form: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          p: {
            description: 'Padding on top, left, bottom and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          slot: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          style: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'CSSProperties',
              raw: 'CSSProperties',
            },
          },
          title: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          className: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          color: {
            description:
              "The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)",
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          id: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          lang: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          type: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'button',
                },
                {
                  name: 'string',
                  value: 'submit',
                },
                {
                  name: 'string',
                  value: 'reset',
                },
              ],
              raw: '"button" | "submit" | "reset"',
            },
          },
          role: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          tabIndex: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          opacity: {
            description:
              'The opacity CSS property sets the transparency of an element or the degree to which content\nbehind an element is visible.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)',
            parentName: 'OpacityProps',
            type: {
              name:
                'ResponsiveValue<Opacity, Required<Theme<TLengthStyledSystem>>>',
              raw:
                'ResponsiveValue<Opacity, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          'aria-activedescendant': {
            description:
              'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-atomic': {
            description:
              'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-autocomplete': {
            description:
              "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
            parentName: 'AriaAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'list',
                },
                {
                  name: 'string',
                  value: 'inline',
                },
                {
                  name: 'string',
                  value: 'both',
                },
              ],
              raw: '"none" | "list" | "inline" | "both"',
            },
          },
          'aria-busy': {
            description:
              'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-checked': {
            description:
              'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'mixed',
                },
              ],
              raw: 'boolean | "true" | "false" | "mixed"',
            },
          },
          'aria-colcount': {
            description:
              'Defines the total number of columns in a table, grid, or treegrid.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-colindex': {
            description:
              "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-colspan': {
            description:
              'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-controls': {
            description:
              'Identifies the element (or elements) whose contents or presence are controlled by the current element.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-current': {
            description:
              'Indicates the element that represents the current item within a container or set of related elements.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'time',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'step',
                },
                {
                  name: 'page',
                },
                {
                  name: 'location',
                },
                {
                  name: 'date',
                },
              ],
              raw:
                'boolean | "time" | "true" | "false" | "step" | "page" | "location" | "date"',
            },
          },
          'aria-describedby': {
            description:
              'Identifies the element (or elements) that describes the object.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-details': {
            description:
              'Identifies the element that provides a detailed, extended description for the object.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-disabled': {
            description:
              'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-dropeffect': {
            description:
              'Indicates what functions can be performed when a dragged object is released on the drop target.',
            deprecated: 'in ARIA 1.1',
            parentName: 'AriaAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'link',
                },
                {
                  name: 'string',
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'copy',
                },
                {
                  name: 'string',
                  value: 'execute',
                },
                {
                  name: 'string',
                  value: 'move',
                },
                {
                  name: 'string',
                  value: 'popup',
                },
              ],
              raw: '"link" | "none" | "copy" | "execute" | "move" | "popup"',
            },
          },
          'aria-errormessage': {
            description:
              'Identifies the element that provides an error message for the object.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-expanded': {
            description:
              'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-flowto': {
            description:
              "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-grabbed': {
            description:
              'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
            deprecated: 'in ARIA 1.1',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-haspopup': {
            description:
              'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'dialog',
                },
                {
                  name: 'menu',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'listbox',
                },
                {
                  name: 'tree',
                },
                {
                  name: 'grid',
                },
              ],
              raw:
                'boolean | "dialog" | "menu" | "true" | "false" | "listbox" | "tree" | "grid"',
            },
          },
          'aria-hidden': {
            description:
              'Indicates whether the element is exposed to an accessibility API.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-invalid': {
            description:
              'Indicates the entered value does not conform to the format expected by the application.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'grammar',
                },
                {
                  name: 'spelling',
                },
              ],
              raw: 'boolean | "true" | "false" | "grammar" | "spelling"',
            },
          },
          'aria-keyshortcuts': {
            description:
              'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-label': {
            description:
              'Defines a string value that labels the current element.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-labelledby': {
            description:
              'Identifies the element (or elements) that labels the current element.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-level': {
            description:
              'Defines the hierarchical level of an element within a structure.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-live': {
            description:
              'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
            parentName: 'AriaAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'off',
                },
                {
                  name: 'string',
                  value: 'assertive',
                },
                {
                  name: 'string',
                  value: 'polite',
                },
              ],
              raw: '"off" | "assertive" | "polite"',
            },
          },
          'aria-modal': {
            description:
              'Indicates whether an element is modal when displayed.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-multiline': {
            description:
              'Indicates whether a text box accepts multiple lines of input or only a single line.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-multiselectable': {
            description:
              'Indicates that the user may select more than one item from the current selectable descendants.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-orientation': {
            description:
              "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
            parentName: 'AriaAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'horizontal',
                },
                {
                  name: 'string',
                  value: 'vertical',
                },
              ],
              raw: '"horizontal" | "vertical"',
            },
          },
          'aria-owns': {
            description:
              'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-placeholder': {
            description:
              'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-posinset': {
            description:
              "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-pressed': {
            description:
              'Indicates the current "pressed" state of toggle buttons.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'mixed',
                },
              ],
              raw: 'boolean | "true" | "false" | "mixed"',
            },
          },
          'aria-readonly': {
            description:
              'Indicates that the element is not editable, but is otherwise operable.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-relevant': {
            description:
              'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
            parentName: 'AriaAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'text',
                },
                {
                  name: 'string',
                  value: 'additions',
                },
                {
                  name: 'string',
                  value: 'additions removals',
                },
                {
                  name: 'string',
                  value: 'additions text',
                },
                {
                  name: 'string',
                  value: 'all',
                },
                {
                  name: 'string',
                  value: 'removals',
                },
                {
                  name: 'string',
                  value: 'removals additions',
                },
                {
                  name: 'string',
                  value: 'removals text',
                },
                {
                  name: 'string',
                  value: 'text additions',
                },
                {
                  name: 'string',
                  value: 'text removals',
                },
              ],
              raw:
                '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"',
            },
          },
          'aria-required': {
            description:
              'Indicates that user input is required on the element before a form may be submitted.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-roledescription': {
            description:
              'Defines a human-readable, author-localized description for the role of an element.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          'aria-rowcount': {
            description:
              'Defines the total number of rows in a table, grid, or treegrid.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-rowindex': {
            description:
              "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-rowspan': {
            description:
              'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-selected': {
            description:
              'Indicates the current "selected" state of various widgets.',
            parentName: 'AriaAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
              ],
              raw: 'boolean | "true" | "false"',
            },
          },
          'aria-setsize': {
            description:
              'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-sort': {
            description:
              'Indicates if items in a table or grid are sorted in ascending or descending order.',
            parentName: 'AriaAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'ascending',
                },
                {
                  name: 'string',
                  value: 'descending',
                },
                {
                  name: 'string',
                  value: 'other',
                },
              ],
              raw: '"none" | "ascending" | "descending" | "other"',
            },
          },
          'aria-valuemax': {
            description:
              'Defines the maximum allowed value for a range widget.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-valuemin': {
            description:
              'Defines the minimum allowed value for a range widget.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-valuenow': {
            description: 'Defines the current value for a range widget.',
            parentName: 'AriaAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          'aria-valuetext': {
            description:
              'Defines the human readable text alternative of aria-valuenow for a range widget.',
            parentName: 'AriaAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          dangerouslySetInnerHTML: {
            parentName: 'DOMAttributes',
            type: {
              name: 'object',
              raw: '{ __html: string; }',
            },
          },
          onCopy: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLButtonElement>',
              raw: 'ClipboardEventHandler<HTMLButtonElement>',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLButtonElement>',
              raw: 'ClipboardEventHandler<HTMLButtonElement>',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLButtonElement>',
              raw: 'ClipboardEventHandler<HTMLButtonElement>',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLButtonElement>',
              raw: 'ClipboardEventHandler<HTMLButtonElement>',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLButtonElement>',
              raw: 'ClipboardEventHandler<HTMLButtonElement>',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLButtonElement>',
              raw: 'ClipboardEventHandler<HTMLButtonElement>',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLButtonElement>',
              raw: 'CompositionEventHandler<HTMLButtonElement>',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLButtonElement>',
              raw: 'CompositionEventHandler<HTMLButtonElement>',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLButtonElement>',
              raw: 'CompositionEventHandler<HTMLButtonElement>',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLButtonElement>',
              raw: 'CompositionEventHandler<HTMLButtonElement>',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLButtonElement>',
              raw: 'CompositionEventHandler<HTMLButtonElement>',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLButtonElement>',
              raw: 'CompositionEventHandler<HTMLButtonElement>',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLButtonElement>',
              raw: 'FocusEventHandler<HTMLButtonElement>',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLButtonElement>',
              raw: 'FocusEventHandler<HTMLButtonElement>',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLButtonElement>',
              raw: 'FocusEventHandler<HTMLButtonElement>',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLButtonElement>',
              raw: 'FocusEventHandler<HTMLButtonElement>',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLButtonElement>',
              raw: 'FormEventHandler<HTMLButtonElement>',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLButtonElement>',
              raw: 'KeyboardEventHandler<HTMLButtonElement>',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLButtonElement>',
              raw: 'KeyboardEventHandler<HTMLButtonElement>',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLButtonElement>',
              raw: 'KeyboardEventHandler<HTMLButtonElement>',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLButtonElement>',
              raw: 'KeyboardEventHandler<HTMLButtonElement>',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLButtonElement>',
              raw: 'KeyboardEventHandler<HTMLButtonElement>',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLButtonElement>',
              raw: 'KeyboardEventHandler<HTMLButtonElement>',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLButtonElement>',
              raw: 'DragEventHandler<HTMLButtonElement>',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLButtonElement>',
              raw: 'MouseEventHandler<HTMLButtonElement>',
            },
          },
          onSelect: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLButtonElement>',
              raw: 'ReactEventHandler<HTMLButtonElement>',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLButtonElement>',
              raw: 'TouchEventHandler<HTMLButtonElement>',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLButtonElement>',
              raw: 'PointerEventHandler<HTMLButtonElement>',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLButtonElement>',
              raw: 'UIEventHandler<HTMLButtonElement>',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLButtonElement>',
              raw: 'UIEventHandler<HTMLButtonElement>',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLButtonElement>',
              raw: 'WheelEventHandler<HTMLButtonElement>',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLButtonElement>',
              raw: 'WheelEventHandler<HTMLButtonElement>',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLButtonElement>',
              raw: 'AnimationEventHandler<HTMLButtonElement>',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLButtonElement>',
              raw: 'AnimationEventHandler<HTMLButtonElement>',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLButtonElement>',
              raw: 'AnimationEventHandler<HTMLButtonElement>',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLButtonElement>',
              raw: 'AnimationEventHandler<HTMLButtonElement>',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLButtonElement>',
              raw: 'AnimationEventHandler<HTMLButtonElement>',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLButtonElement>',
              raw: 'AnimationEventHandler<HTMLButtonElement>',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLButtonElement>',
              raw: 'TransitionEventHandler<HTMLButtonElement>',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLButtonElement>',
              raw: 'TransitionEventHandler<HTMLButtonElement>',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'Key',
              raw: 'Key',
            },
          },
          defaultChecked: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          defaultValue: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'array',
              value: [
                {
                  name: 'string | number | readonly string',
                },
              ],
              raw: 'string | number | readonly string[]',
            },
          },
          suppressContentEditableWarning: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          suppressHydrationWarning: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          accessKey: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          contentEditable: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'inherit',
                },
                {
                  name: 'Booleanish',
                },
              ],
              raw: '"inherit" | Booleanish',
            },
          },
          contextMenu: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          dir: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          draggable: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'Booleanish',
              raw: 'Booleanish',
            },
          },
          hidden: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          placeholder: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          spellCheck: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'Booleanish',
              raw: 'Booleanish',
            },
          },
          translate: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'no',
                },
                {
                  name: 'string',
                  value: 'yes',
                },
              ],
              raw: '"no" | "yes"',
            },
          },
          radioGroup: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          about: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          datatype: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          inlist: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          prefix: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          property: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          resource: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          typeof: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          vocab: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoCapitalize: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoCorrect: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoSave: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          itemProp: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          itemScope: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          itemType: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          itemID: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          itemRef: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          results: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          security: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          unselectable: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'on',
                },
                {
                  name: 'string',
                  value: 'off',
                },
              ],
              raw: '"on" | "off"',
            },
          },
          inputMode: {
            description:
              'Hints at the type of data that might be entered by the user while editing the element or its contents',
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'text',
                },
                {
                  name: 'string',
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'tel',
                },
                {
                  name: 'string',
                  value: 'url',
                },
                {
                  name: 'string',
                  value: 'email',
                },
                {
                  name: 'string',
                  value: 'numeric',
                },
                {
                  name: 'string',
                  value: 'decimal',
                },
                {
                  name: 'string',
                  value: 'search',
                },
              ],
              raw:
                '"text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"',
            },
          },
          is: {
            description:
              'Specify that a standard HTML element should behave like a defined custom built-in element',
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoFocus: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          disabled: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          formAction: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formEncType: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formMethod: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formNoValidate: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          formTarget: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          value: {
            parentName: 'ButtonHTMLAttributes',
            type: {
              name: 'array',
              value: [
                {
                  name: 'string | number | readonly string',
                },
              ],
              raw: 'string | number | readonly string[]',
            },
          },
          variant: {
            parentName: 'BoxOwnProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          css: {
            parentName: 'BoxOwnProps',
            type: {
              name: 'Interpolation<any>',
              raw: 'Interpolation<any>',
            },
          },
          sx: {
            parentName: 'BoxOwnProps',
            type: {
              name: 'ThemeUIStyleObject',
              raw: 'ThemeUIStyleObject',
            },
          },
          padding: {
            description: 'Padding on top, left, bottom and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          pt: {
            description: 'Padding on top',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          paddingTop: {
            description: 'Padding on top',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          pr: {
            description: 'Padding on right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          paddingRight: {
            description: 'Padding on right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          pb: {
            description: 'Padding on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          paddingBottom: {
            description: 'Padding on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          pl: {
            description: 'Padding on left',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          paddingLeft: {
            description: 'Padding on left',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          px: {
            description: 'Padding on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          paddingX: {
            description: 'Padding on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          py: {
            description: 'Padding on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          paddingY: {
            description: 'Padding on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          bg: {
            description:
              "The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)",
            parentName: 'BackgroundColorProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          backgroundColor: {
            parentName: 'BackgroundColorProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ResponsiveValue<string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
                },
              ],
              raw:
                'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
            },
          },
          ref: {
            parentName: 'RefAttributes',
            type: {
              name: 'Ref<HTMLButtonElement>',
              raw: 'Ref<HTMLButtonElement>',
            },
          },
        },
      },
      fileInfo: {
        dateCreated: '2021-02-18T04:44:00.719Z',
        dateModified: '2021-02-18T04:44:00.719Z',
        sloc: {
          total: 395,
          source: 162,
          comment: 193,
          single: 2,
          block: 191,
          mixed: 0,
          empty: 40,
          todo: 0,
          blockEmpty: 0,
        },
      },
    });
  });

  it('component', async () => {
    const props = await getComponentProps(
      [
        {
          name: '@component-controls/react-docgen-info',
          test: /\.(js|jsx)$/,
        },
        {
          name: '@component-controls/react-docgen-typescript-info',
          test: /\.(ts|tsx)$/,
        },
      ],
      path.resolve(
        __dirname,
        '../../../node_modules/@theme-ui/components/index.d.ts',
      ),
      'Button',
    );

    expect(props).toMatchObject({
      tags: {
        see: 'https ://theme-ui.com/components/button',
      },
      description: 'Primitive button component with variants',
      displayName: 'Button',
      methods: [],
      props: {
        as: {
          parentName: 'BoxOwnProps',
          type: {
            name: 'ElementType<any>',
            raw: 'ElementType<any>',
          },
        },
        m: {
          description: 'Margin on top, left, bottom and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        margin: {
          description: 'Margin on top, left, bottom and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        mt: {
          description: 'Margin on top',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        marginTop: {
          description: 'Margin on top',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        mb: {
          description: 'Margin on bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        marginBottom: {
          description: 'Margin on bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        ml: {
          description: 'Margin on left',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        marginLeft: {
          description: 'Margin on left',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        mr: {
          description: 'Margin on right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        marginRight: {
          description: 'Margin on right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        my: {
          description: 'Margin on top and bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        marginY: {
          description: 'Margin on top and bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        mx: {
          description: 'Margin on left and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        marginX: {
          description: 'Margin on left and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        name: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        form: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        p: {
          description: 'Padding on top, left, bottom and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        slot: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        style: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'CSSProperties',
            raw: 'CSSProperties',
          },
        },
        title: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        className: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        color: {
          description:
            "The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)",
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        id: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        lang: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        type: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'button',
              },
              {
                name: 'string',
                value: 'submit',
              },
              {
                name: 'string',
                value: 'reset',
              },
            ],
            raw: '"button" | "submit" | "reset"',
          },
        },
        role: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        tabIndex: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        opacity: {
          description:
            'The opacity CSS property sets the transparency of an element or the degree to which content\nbehind an element is visible.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)',
          parentName: 'OpacityProps',
          type: {
            name:
              'ResponsiveValue<Opacity, Required<Theme<TLengthStyledSystem>>>',
            raw:
              'ResponsiveValue<Opacity, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        'aria-activedescendant': {
          description:
            'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-atomic': {
          description:
            'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-autocomplete': {
          description:
            "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
          parentName: 'AriaAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'none',
              },
              {
                name: 'string',
                value: 'list',
              },
              {
                name: 'string',
                value: 'inline',
              },
              {
                name: 'string',
                value: 'both',
              },
            ],
            raw: '"none" | "list" | "inline" | "both"',
          },
        },
        'aria-busy': {
          description:
            'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-checked': {
          description:
            'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
              {
                name: 'mixed',
              },
            ],
            raw: 'boolean | "true" | "false" | "mixed"',
          },
        },
        'aria-colcount': {
          description:
            'Defines the total number of columns in a table, grid, or treegrid.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-colindex': {
          description:
            "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-colspan': {
          description:
            'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-controls': {
          description:
            'Identifies the element (or elements) whose contents or presence are controlled by the current element.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-current': {
          description:
            'Indicates the element that represents the current item within a container or set of related elements.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'time',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
              {
                name: 'step',
              },
              {
                name: 'page',
              },
              {
                name: 'location',
              },
              {
                name: 'date',
              },
            ],
            raw:
              'boolean | "time" | "true" | "false" | "step" | "page" | "location" | "date"',
          },
        },
        'aria-describedby': {
          description:
            'Identifies the element (or elements) that describes the object.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-details': {
          description:
            'Identifies the element that provides a detailed, extended description for the object.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-disabled': {
          description:
            'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-dropeffect': {
          description:
            'Indicates what functions can be performed when a dragged object is released on the drop target.',
          deprecated: 'in ARIA 1.1',
          parentName: 'AriaAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'link',
              },
              {
                name: 'string',
                value: 'none',
              },
              {
                name: 'string',
                value: 'copy',
              },
              {
                name: 'string',
                value: 'execute',
              },
              {
                name: 'string',
                value: 'move',
              },
              {
                name: 'string',
                value: 'popup',
              },
            ],
            raw: '"link" | "none" | "copy" | "execute" | "move" | "popup"',
          },
        },
        'aria-errormessage': {
          description:
            'Identifies the element that provides an error message for the object.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-expanded': {
          description:
            'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-flowto': {
          description:
            "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-grabbed': {
          description:
            'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
          deprecated: 'in ARIA 1.1',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-haspopup': {
          description:
            'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'dialog',
              },
              {
                name: 'menu',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
              {
                name: 'listbox',
              },
              {
                name: 'tree',
              },
              {
                name: 'grid',
              },
            ],
            raw:
              'boolean | "dialog" | "menu" | "true" | "false" | "listbox" | "tree" | "grid"',
          },
        },
        'aria-hidden': {
          description:
            'Indicates whether the element is exposed to an accessibility API.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-invalid': {
          description:
            'Indicates the entered value does not conform to the format expected by the application.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
              {
                name: 'grammar',
              },
              {
                name: 'spelling',
              },
            ],
            raw: 'boolean | "true" | "false" | "grammar" | "spelling"',
          },
        },
        'aria-keyshortcuts': {
          description:
            'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-label': {
          description:
            'Defines a string value that labels the current element.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-labelledby': {
          description:
            'Identifies the element (or elements) that labels the current element.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-level': {
          description:
            'Defines the hierarchical level of an element within a structure.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-live': {
          description:
            'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
          parentName: 'AriaAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'off',
              },
              {
                name: 'string',
                value: 'assertive',
              },
              {
                name: 'string',
                value: 'polite',
              },
            ],
            raw: '"off" | "assertive" | "polite"',
          },
        },
        'aria-modal': {
          description: 'Indicates whether an element is modal when displayed.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-multiline': {
          description:
            'Indicates whether a text box accepts multiple lines of input or only a single line.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-multiselectable': {
          description:
            'Indicates that the user may select more than one item from the current selectable descendants.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-orientation': {
          description:
            "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
          parentName: 'AriaAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'horizontal',
              },
              {
                name: 'string',
                value: 'vertical',
              },
            ],
            raw: '"horizontal" | "vertical"',
          },
        },
        'aria-owns': {
          description:
            'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-placeholder': {
          description:
            'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-posinset': {
          description:
            "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-pressed': {
          description:
            'Indicates the current "pressed" state of toggle buttons.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
              {
                name: 'mixed',
              },
            ],
            raw: 'boolean | "true" | "false" | "mixed"',
          },
        },
        'aria-readonly': {
          description:
            'Indicates that the element is not editable, but is otherwise operable.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-relevant': {
          description:
            'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
          parentName: 'AriaAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'text',
              },
              {
                name: 'string',
                value: 'additions',
              },
              {
                name: 'string',
                value: 'additions removals',
              },
              {
                name: 'string',
                value: 'additions text',
              },
              {
                name: 'string',
                value: 'all',
              },
              {
                name: 'string',
                value: 'removals',
              },
              {
                name: 'string',
                value: 'removals additions',
              },
              {
                name: 'string',
                value: 'removals text',
              },
              {
                name: 'string',
                value: 'text additions',
              },
              {
                name: 'string',
                value: 'text removals',
              },
            ],
            raw:
              '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"',
          },
        },
        'aria-required': {
          description:
            'Indicates that user input is required on the element before a form may be submitted.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-roledescription': {
          description:
            'Defines a human-readable, author-localized description for the role of an element.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-rowcount': {
          description:
            'Defines the total number of rows in a table, grid, or treegrid.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-rowindex': {
          description:
            "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-rowspan': {
          description:
            'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-selected': {
          description:
            'Indicates the current "selected" state of various widgets.',
          parentName: 'AriaAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'boolean',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "true" | "false"',
          },
        },
        'aria-setsize': {
          description:
            'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-sort': {
          description:
            'Indicates if items in a table or grid are sorted in ascending or descending order.',
          parentName: 'AriaAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'none',
              },
              {
                name: 'string',
                value: 'ascending',
              },
              {
                name: 'string',
                value: 'descending',
              },
              {
                name: 'string',
                value: 'other',
              },
            ],
            raw: '"none" | "ascending" | "descending" | "other"',
          },
        },
        'aria-valuemax': {
          description: 'Defines the maximum allowed value for a range widget.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-valuemin': {
          description: 'Defines the minimum allowed value for a range widget.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-valuenow': {
          description: 'Defines the current value for a range widget.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-valuetext': {
          description:
            'Defines the human readable text alternative of aria-valuenow for a range widget.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        dangerouslySetInnerHTML: {
          parentName: 'DOMAttributes',
          type: {
            name: 'object',
            raw: '{ __html: string; }',
          },
        },
        onCopy: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ClipboardEventHandler<HTMLButtonElement>',
            raw: 'ClipboardEventHandler<HTMLButtonElement>',
          },
        },
        onCopyCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ClipboardEventHandler<HTMLButtonElement>',
            raw: 'ClipboardEventHandler<HTMLButtonElement>',
          },
        },
        onCut: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ClipboardEventHandler<HTMLButtonElement>',
            raw: 'ClipboardEventHandler<HTMLButtonElement>',
          },
        },
        onCutCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ClipboardEventHandler<HTMLButtonElement>',
            raw: 'ClipboardEventHandler<HTMLButtonElement>',
          },
        },
        onPaste: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ClipboardEventHandler<HTMLButtonElement>',
            raw: 'ClipboardEventHandler<HTMLButtonElement>',
          },
        },
        onPasteCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ClipboardEventHandler<HTMLButtonElement>',
            raw: 'ClipboardEventHandler<HTMLButtonElement>',
          },
        },
        onCompositionEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'CompositionEventHandler<HTMLButtonElement>',
            raw: 'CompositionEventHandler<HTMLButtonElement>',
          },
        },
        onCompositionEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'CompositionEventHandler<HTMLButtonElement>',
            raw: 'CompositionEventHandler<HTMLButtonElement>',
          },
        },
        onCompositionStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'CompositionEventHandler<HTMLButtonElement>',
            raw: 'CompositionEventHandler<HTMLButtonElement>',
          },
        },
        onCompositionStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'CompositionEventHandler<HTMLButtonElement>',
            raw: 'CompositionEventHandler<HTMLButtonElement>',
          },
        },
        onCompositionUpdate: {
          parentName: 'DOMAttributes',
          type: {
            name: 'CompositionEventHandler<HTMLButtonElement>',
            raw: 'CompositionEventHandler<HTMLButtonElement>',
          },
        },
        onCompositionUpdateCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'CompositionEventHandler<HTMLButtonElement>',
            raw: 'CompositionEventHandler<HTMLButtonElement>',
          },
        },
        onFocus: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FocusEventHandler<HTMLButtonElement>',
            raw: 'FocusEventHandler<HTMLButtonElement>',
          },
        },
        onFocusCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FocusEventHandler<HTMLButtonElement>',
            raw: 'FocusEventHandler<HTMLButtonElement>',
          },
        },
        onBlur: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FocusEventHandler<HTMLButtonElement>',
            raw: 'FocusEventHandler<HTMLButtonElement>',
          },
        },
        onBlurCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FocusEventHandler<HTMLButtonElement>',
            raw: 'FocusEventHandler<HTMLButtonElement>',
          },
        },
        onChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onBeforeInput: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onBeforeInputCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onInput: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onInputCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onReset: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onResetCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onSubmit: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onSubmitCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onInvalid: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onInvalidCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'FormEventHandler<HTMLButtonElement>',
            raw: 'FormEventHandler<HTMLButtonElement>',
          },
        },
        onLoad: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onLoadCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onError: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onErrorCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onKeyDown: {
          parentName: 'DOMAttributes',
          type: {
            name: 'KeyboardEventHandler<HTMLButtonElement>',
            raw: 'KeyboardEventHandler<HTMLButtonElement>',
          },
        },
        onKeyDownCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'KeyboardEventHandler<HTMLButtonElement>',
            raw: 'KeyboardEventHandler<HTMLButtonElement>',
          },
        },
        onKeyPress: {
          parentName: 'DOMAttributes',
          type: {
            name: 'KeyboardEventHandler<HTMLButtonElement>',
            raw: 'KeyboardEventHandler<HTMLButtonElement>',
          },
        },
        onKeyPressCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'KeyboardEventHandler<HTMLButtonElement>',
            raw: 'KeyboardEventHandler<HTMLButtonElement>',
          },
        },
        onKeyUp: {
          parentName: 'DOMAttributes',
          type: {
            name: 'KeyboardEventHandler<HTMLButtonElement>',
            raw: 'KeyboardEventHandler<HTMLButtonElement>',
          },
        },
        onKeyUpCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'KeyboardEventHandler<HTMLButtonElement>',
            raw: 'KeyboardEventHandler<HTMLButtonElement>',
          },
        },
        onAbort: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onAbortCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onCanPlay: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onCanPlayCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onCanPlayThrough: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onCanPlayThroughCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onDurationChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onDurationChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onEmptied: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onEmptiedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onEncrypted: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onEncryptedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onEnded: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onEndedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onLoadedData: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onLoadedDataCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onLoadedMetadata: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onLoadedMetadataCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onLoadStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onLoadStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onPause: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onPauseCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onPlay: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onPlayCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onPlaying: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onPlayingCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onProgress: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onProgressCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onRateChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onRateChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onSeeked: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onSeekedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onSeeking: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onSeekingCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onStalled: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onStalledCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onSuspend: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onSuspendCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onTimeUpdate: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onTimeUpdateCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onVolumeChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onVolumeChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onWaiting: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onWaitingCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onAuxClick: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onAuxClickCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onClick: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onClickCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onContextMenu: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onContextMenuCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onDoubleClick: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onDoubleClickCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onDrag: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragEnter: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragEnterCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragExit: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragExitCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragLeave: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragLeaveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragOver: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragOverCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDragStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDrop: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onDropCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'DragEventHandler<HTMLButtonElement>',
            raw: 'DragEventHandler<HTMLButtonElement>',
          },
        },
        onMouseDown: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseDownCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseEnter: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseLeave: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseMove: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseMoveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseOut: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseOutCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseOver: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseOverCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseUp: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onMouseUpCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'MouseEventHandler<HTMLButtonElement>',
            raw: 'MouseEventHandler<HTMLButtonElement>',
          },
        },
        onSelect: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onSelectCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'ReactEventHandler<HTMLButtonElement>',
            raw: 'ReactEventHandler<HTMLButtonElement>',
          },
        },
        onTouchCancel: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onTouchCancelCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onTouchEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onTouchEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onTouchMove: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onTouchMoveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onTouchStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onTouchStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TouchEventHandler<HTMLButtonElement>',
            raw: 'TouchEventHandler<HTMLButtonElement>',
          },
        },
        onPointerDown: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerDownCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerMove: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerMoveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerUp: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerUpCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerCancel: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerCancelCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerEnter: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerEnterCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerLeave: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerLeaveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerOver: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerOverCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerOut: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onPointerOutCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onGotPointerCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onGotPointerCaptureCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onLostPointerCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onLostPointerCaptureCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'PointerEventHandler<HTMLButtonElement>',
            raw: 'PointerEventHandler<HTMLButtonElement>',
          },
        },
        onScroll: {
          parentName: 'DOMAttributes',
          type: {
            name: 'UIEventHandler<HTMLButtonElement>',
            raw: 'UIEventHandler<HTMLButtonElement>',
          },
        },
        onScrollCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'UIEventHandler<HTMLButtonElement>',
            raw: 'UIEventHandler<HTMLButtonElement>',
          },
        },
        onWheel: {
          parentName: 'DOMAttributes',
          type: {
            name: 'WheelEventHandler<HTMLButtonElement>',
            raw: 'WheelEventHandler<HTMLButtonElement>',
          },
        },
        onWheelCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'WheelEventHandler<HTMLButtonElement>',
            raw: 'WheelEventHandler<HTMLButtonElement>',
          },
        },
        onAnimationStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'AnimationEventHandler<HTMLButtonElement>',
            raw: 'AnimationEventHandler<HTMLButtonElement>',
          },
        },
        onAnimationStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'AnimationEventHandler<HTMLButtonElement>',
            raw: 'AnimationEventHandler<HTMLButtonElement>',
          },
        },
        onAnimationEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'AnimationEventHandler<HTMLButtonElement>',
            raw: 'AnimationEventHandler<HTMLButtonElement>',
          },
        },
        onAnimationEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'AnimationEventHandler<HTMLButtonElement>',
            raw: 'AnimationEventHandler<HTMLButtonElement>',
          },
        },
        onAnimationIteration: {
          parentName: 'DOMAttributes',
          type: {
            name: 'AnimationEventHandler<HTMLButtonElement>',
            raw: 'AnimationEventHandler<HTMLButtonElement>',
          },
        },
        onAnimationIterationCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'AnimationEventHandler<HTMLButtonElement>',
            raw: 'AnimationEventHandler<HTMLButtonElement>',
          },
        },
        onTransitionEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TransitionEventHandler<HTMLButtonElement>',
            raw: 'TransitionEventHandler<HTMLButtonElement>',
          },
        },
        onTransitionEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'TransitionEventHandler<HTMLButtonElement>',
            raw: 'TransitionEventHandler<HTMLButtonElement>',
          },
        },
        key: {
          parentName: 'Attributes',
          type: {
            name: 'Key',
            raw: 'Key',
          },
        },
        defaultChecked: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        defaultValue: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'array',
            value: [
              {
                name: 'string | number | readonly string',
              },
            ],
            raw: 'string | number | readonly string[]',
          },
        },
        suppressContentEditableWarning: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        suppressHydrationWarning: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        accessKey: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        contentEditable: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'union',
            value: [
              {
                name: 'inherit',
              },
              {
                name: 'Booleanish',
              },
            ],
            raw: '"inherit" | Booleanish',
          },
        },
        contextMenu: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        dir: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        draggable: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        hidden: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        placeholder: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        spellCheck: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        translate: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'no',
              },
              {
                name: 'string',
                value: 'yes',
              },
            ],
            raw: '"no" | "yes"',
          },
        },
        radioGroup: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        about: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        datatype: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        inlist: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'any',
            raw: 'any',
          },
        },
        prefix: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        property: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        resource: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        typeof: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        vocab: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        autoCapitalize: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        autoCorrect: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        autoSave: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        itemProp: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        itemScope: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        itemType: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        itemID: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        itemRef: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        results: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        security: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        unselectable: {
          parentName: 'HTMLAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'on',
              },
              {
                name: 'string',
                value: 'off',
              },
            ],
            raw: '"on" | "off"',
          },
        },
        inputMode: {
          description:
            'Hints at the type of data that might be entered by the user while editing the element or its contents',
          parentName: 'HTMLAttributes',
          type: {
            name: 'enum',
            value: [
              {
                name: 'string',
                value: 'text',
              },
              {
                name: 'string',
                value: 'none',
              },
              {
                name: 'string',
                value: 'tel',
              },
              {
                name: 'string',
                value: 'url',
              },
              {
                name: 'string',
                value: 'email',
              },
              {
                name: 'string',
                value: 'numeric',
              },
              {
                name: 'string',
                value: 'decimal',
              },
              {
                name: 'string',
                value: 'search',
              },
            ],
            raw:
              '"text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"',
          },
        },
        is: {
          description:
            'Specify that a standard HTML element should behave like a defined custom built-in element',
          parentName: 'HTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        autoFocus: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        disabled: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        formAction: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        formEncType: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        formMethod: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        formNoValidate: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'boolean',
            raw: 'boolean',
          },
        },
        formTarget: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        value: {
          parentName: 'ButtonHTMLAttributes',
          type: {
            name: 'array',
            value: [
              {
                name: 'string | number | readonly string',
              },
            ],
            raw: 'string | number | readonly string[]',
          },
        },
        variant: {
          parentName: 'BoxOwnProps',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        css: {
          parentName: 'BoxOwnProps',
          type: {
            name: 'Interpolation<any>',
            raw: 'Interpolation<any>',
          },
        },
        sx: {
          parentName: 'BoxOwnProps',
          type: {
            name: 'ThemeUIStyleObject',
            raw: 'ThemeUIStyleObject',
          },
        },
        padding: {
          description: 'Padding on top, left, bottom and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        pt: {
          description: 'Padding on top',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        paddingTop: {
          description: 'Padding on top',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        pr: {
          description: 'Padding on right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        paddingRight: {
          description: 'Padding on right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        pb: {
          description: 'Padding on bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        paddingBottom: {
          description: 'Padding on bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        pl: {
          description: 'Padding on left',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        paddingLeft: {
          description: 'Padding on left',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        px: {
          description: 'Padding on left and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        paddingX: {
          description: 'Padding on left and right',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        py: {
          description: 'Padding on top and bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        paddingY: {
          description: 'Padding on top and bottom',
          parentName: 'SpaceProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        bg: {
          description:
            "The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)",
          parentName: 'BackgroundColorProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        backgroundColor: {
          parentName: 'BackgroundColorProps',
          type: {
            name: 'union',
            value: [
              {
                name: 'ResponsiveValue<string',
              },
              {
                name: 'number',
              },
              {
                name: 'symbol, Required<Theme<TLengthStyledSystem>>>',
              },
            ],
            raw:
              'ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>',
          },
        },
        ref: {
          parentName: 'RefAttributes',
          type: {
            name: 'Ref<HTMLButtonElement>',
            raw: 'Ref<HTMLButtonElement>',
          },
        },
      },
    });
  });
});
