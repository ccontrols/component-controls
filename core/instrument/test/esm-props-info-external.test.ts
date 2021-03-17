import path from 'path';
import { fixtureToTest, TestCallback } from './loadTestFiles';
import { getComponentProps } from '../src/index';

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
      importedName: 'Button',
      fileName: 'index.d.ts',
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
            name: 'Booleanish',
            raw: 'Booleanish',
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
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        'aria-checked': {
          description:
            'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
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
            'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-colindex': {
          description:
            "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-colspan': {
          description:
            'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-controls': {
          description:
            'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
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
            'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-details': {
          description:
            'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-disabled': {
          description:
            'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
          parentName: 'AriaAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        'aria-dropeffect': {
          description:
            'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
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
            'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
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
            name: 'Booleanish',
            raw: 'Booleanish',
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
            'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
          parentName: 'AriaAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
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
            'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
          parentName: 'AriaAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        'aria-invalid': {
          description:
            'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
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
            'Defines a string value that labels the current element.\n@see aria-labelledby.',
          parentName: 'AriaAttributes',
          type: {
            name: 'string',
            raw: 'string',
          },
        },
        'aria-labelledby': {
          description:
            'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
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
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        'aria-multiline': {
          description:
            'Indicates whether a text box accepts multiple lines of input or only a single line.',
          parentName: 'AriaAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        'aria-multiselectable': {
          description:
            'Indicates that the user may select more than one item from the current selectable descendants.',
          parentName: 'AriaAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
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
            'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
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
            "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-pressed': {
          description:
            'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
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
            'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
          parentName: 'AriaAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        'aria-relevant': {
          description:
            'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
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
            name: 'Booleanish',
            raw: 'Booleanish',
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
            'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-rowindex': {
          description:
            "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-rowspan': {
          description:
            'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
          parentName: 'AriaAttributes',
          type: {
            name: 'number',
            raw: 'number',
          },
        },
        'aria-selected': {
          description:
            'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
          parentName: 'AriaAttributes',
          type: {
            name: 'Booleanish',
            raw: 'Booleanish',
          },
        },
        'aria-setsize': {
          description:
            'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
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
          description:
            'Defines the current value for a range widget.\n@see aria-valuetext.',
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
            name: 'function',
            raw: '(event: ClipboardEvent<HTMLButtonElement>) => void',
          },
        },
        onCopyCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: ClipboardEvent<HTMLButtonElement>) => void',
          },
        },
        onCut: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: ClipboardEvent<HTMLButtonElement>) => void',
          },
        },
        onCutCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: ClipboardEvent<HTMLButtonElement>) => void',
          },
        },
        onPaste: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: ClipboardEvent<HTMLButtonElement>) => void',
          },
        },
        onPasteCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: ClipboardEvent<HTMLButtonElement>) => void',
          },
        },
        onCompositionEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: CompositionEvent<HTMLButtonElement>) => void',
          },
        },
        onCompositionEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: CompositionEvent<HTMLButtonElement>) => void',
          },
        },
        onCompositionStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: CompositionEvent<HTMLButtonElement>) => void',
          },
        },
        onCompositionStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: CompositionEvent<HTMLButtonElement>) => void',
          },
        },
        onCompositionUpdate: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: CompositionEvent<HTMLButtonElement>) => void',
          },
        },
        onCompositionUpdateCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: CompositionEvent<HTMLButtonElement>) => void',
          },
        },
        onFocus: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FocusEvent<HTMLButtonElement>) => void',
          },
        },
        onFocusCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FocusEvent<HTMLButtonElement>) => void',
          },
        },
        onBlur: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FocusEvent<HTMLButtonElement>) => void',
          },
        },
        onBlurCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FocusEvent<HTMLButtonElement>) => void',
          },
        },
        onChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onBeforeInput: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onBeforeInputCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onInput: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onInputCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onReset: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onResetCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onSubmit: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onSubmitCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onInvalid: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onInvalidCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: FormEvent<HTMLButtonElement>) => void',
          },
        },
        onLoad: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onLoadCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onError: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onErrorCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onKeyDown: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: KeyboardEvent<HTMLButtonElement>) => void',
          },
        },
        onKeyDownCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: KeyboardEvent<HTMLButtonElement>) => void',
          },
        },
        onKeyPress: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: KeyboardEvent<HTMLButtonElement>) => void',
          },
        },
        onKeyPressCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: KeyboardEvent<HTMLButtonElement>) => void',
          },
        },
        onKeyUp: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: KeyboardEvent<HTMLButtonElement>) => void',
          },
        },
        onKeyUpCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: KeyboardEvent<HTMLButtonElement>) => void',
          },
        },
        onAbort: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onAbortCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onCanPlay: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onCanPlayCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onCanPlayThrough: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onCanPlayThroughCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onDurationChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onDurationChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onEmptied: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onEmptiedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onEncrypted: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onEncryptedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onEnded: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onEndedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onLoadedData: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onLoadedDataCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onLoadedMetadata: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onLoadedMetadataCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onLoadStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onLoadStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onPause: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onPauseCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onPlay: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onPlayCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onPlaying: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onPlayingCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onProgress: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onProgressCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onRateChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onRateChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onSeeked: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onSeekedCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onSeeking: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onSeekingCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onStalled: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onStalledCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onSuspend: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onSuspendCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onTimeUpdate: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onTimeUpdateCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onVolumeChange: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onVolumeChangeCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onWaiting: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onWaitingCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onAuxClick: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onAuxClickCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onClick: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onClickCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onContextMenu: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onContextMenuCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onDoubleClick: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onDoubleClickCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onDrag: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragEnter: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragEnterCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragExit: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragExitCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragLeave: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragLeaveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragOver: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragOverCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDragStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDrop: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onDropCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: DragEvent<HTMLButtonElement>) => void',
          },
        },
        onMouseDown: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseDownCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseEnter: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseLeave: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseMove: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseMoveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseOut: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseOutCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseOver: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseOverCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseUp: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onMouseUpCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
          },
        },
        onSelect: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onSelectCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
          },
        },
        onTouchCancel: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onTouchCancelCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onTouchEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onTouchEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onTouchMove: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onTouchMoveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onTouchStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onTouchStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TouchEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerDown: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerDownCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerMove: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerMoveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerUp: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerUpCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerCancel: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerCancelCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerEnter: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerEnterCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerLeave: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerLeaveCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerOver: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerOverCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerOut: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onPointerOutCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onGotPointerCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onGotPointerCaptureCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onLostPointerCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onLostPointerCaptureCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: PointerEvent<HTMLButtonElement>) => void',
          },
        },
        onScroll: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: UIEvent<HTMLButtonElement, UIEvent>) => void',
          },
        },
        onScrollCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: UIEvent<HTMLButtonElement, UIEvent>) => void',
          },
        },
        onWheel: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: WheelEvent<HTMLButtonElement>) => void',
          },
        },
        onWheelCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: WheelEvent<HTMLButtonElement>) => void',
          },
        },
        onAnimationStart: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: AnimationEvent<HTMLButtonElement>) => void',
          },
        },
        onAnimationStartCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: AnimationEvent<HTMLButtonElement>) => void',
          },
        },
        onAnimationEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: AnimationEvent<HTMLButtonElement>) => void',
          },
        },
        onAnimationEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: AnimationEvent<HTMLButtonElement>) => void',
          },
        },
        onAnimationIteration: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: AnimationEvent<HTMLButtonElement>) => void',
          },
        },
        onAnimationIterationCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: AnimationEvent<HTMLButtonElement>) => void',
          },
        },
        onTransitionEnd: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TransitionEvent<HTMLButtonElement>) => void',
          },
        },
        onTransitionEndCapture: {
          parentName: 'DOMAttributes',
          type: {
            name: 'function',
            raw: '(event: TransitionEvent<HTMLButtonElement>) => void',
          },
        },
        key: {
          parentName: 'Attributes',
          type: {
            name: 'TLengthStyledSystem',
            raw: 'TLengthStyledSystem',
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
                name: 'boolean',
              },
              {
                name: 'inherit',
              },
              {
                name: 'true',
              },
              {
                name: 'false',
              },
            ],
            raw: 'boolean | "inherit" | "true" | "false"',
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
            'Hints at the type of data that might be entered by the user while editing the element or its contents\n@see https ://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute',
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
            'Specify that a standard HTML element should behave like a defined custom built-in element\n@see https ://html.spec.whatwg.org/multipage/custom-elements.html#attr-is',
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
