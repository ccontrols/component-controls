import path from 'path';
import { parseFiles } from '../../src/index';
import { typeResolver } from '../../src/frameworks/react';
it('load from file', () => {
  const result = parseFiles(
    [path.resolve(__dirname, 'fixtures', 'react-component-props.tsx')],
    { typeResolver },
    ['default'],
  );
  expect(result).toEqual({
    default: {
      kind: 15,
      properties: [
        {
          description: 'stringProp description',
          optional: true,
          displayName: 'stringProp',
          kind: 1,
          parent: 'OwnProps',
        },
        {
          description: 'numberProp description',
          kind: 2,
          displayName: 'numberProp',
          parent: 'OwnProps',
        },
        {
          description: 'function props description',
          displayName: 'fnProp',
          kind: 11,
          returns: {
            kind: 12,
          },
          parent: 'OwnProps',
        },
        {
          deprecated: 'since version 1.0',
          description: 'unionProp description',
          displayName: 'unionProp',
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'option1',
            },
            {
              kind: 1,
              value: 'option2',
            },
            {
              kind: 1,
              value: 'option3',
            },
          ],
          parent: 'OwnProps',
        },
        {
          optional: true,
          displayName: 'href',
          kind: 1,
          parent: 'BaseHTMLAttributes',
        },
        {
          optional: true,
          displayName: 'target',
          kind: 1,
          parent: 'BaseHTMLAttributes',
        },
        {
          optional: true,
          displayName: 'defaultChecked',
          kind: 3,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'defaultValue',
          kind: 4,
          properties: [
            {
              kind: 1,
            },
            {
              kind: 2,
            },
            {
              displayName: 'ReadonlyArray<string>',
              kind: 15,
            },
          ],
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'suppressContentEditableWarning',
          kind: 3,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'suppressHydrationWarning',
          kind: 3,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'accessKey',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'className',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'contentEditable',
          kind: 4,
          properties: [
            {
              displayName: 'Booleanish',
              kind: 15,
            },
            {
              kind: 1,
              value: 'inherit',
            },
          ],
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'contextMenu',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'dir',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'draggable',
          kind: 15,
          type: 'Booleanish',
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'hidden',
          kind: 3,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'id',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'lang',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'placeholder',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'slot',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'spellCheck',
          kind: 15,
          type: 'Booleanish',
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'style',
          kind: 15,
          type: 'CSSProperties',
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'tabIndex',
          kind: 2,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'title',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'translate',
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'yes',
            },
            {
              kind: 1,
              value: 'no',
            },
          ],
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'radioGroup',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'role',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'about',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'datatype',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'inlist',
          kind: 17,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'prefix',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'property',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'resource',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'typeof',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'vocab',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'autoCapitalize',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'autoCorrect',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'autoSave',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'color',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'itemProp',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'itemScope',
          kind: 3,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'itemType',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'itemID',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'itemRef',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'results',
          kind: 2,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'security',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          optional: true,
          displayName: 'unselectable',
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'on',
            },
            {
              kind: 1,
              value: 'off',
            },
          ],
          parent: 'HTMLAttributes',
        },
        {
          see: [
            'https ://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute',
          ],
          description:
            'Hints at the type of data that might be entered by the user while editing the element or its contents',
          optional: true,
          displayName: 'inputMode',
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'none',
            },
            {
              kind: 1,
              value: 'text',
            },
            {
              kind: 1,
              value: 'tel',
            },
            {
              kind: 1,
              value: 'url',
            },
            {
              kind: 1,
              value: 'email',
            },
            {
              kind: 1,
              value: 'numeric',
            },
            {
              kind: 1,
              value: 'decimal',
            },
            {
              kind: 1,
              value: 'search',
            },
          ],
          parent: 'HTMLAttributes',
        },
        {
          see: [
            'https ://html.spec.whatwg.org/multipage/custom-elements.html#attr-is',
          ],
          description:
            'Specify that a standard HTML element should behave like a defined custom built-in element',
          optional: true,
          displayName: 'is',
          kind: 1,
          parent: 'HTMLAttributes',
        },
        {
          description:
            'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
          optional: true,
          displayName: "'aria-activedescendant'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
          optional: true,
          displayName: "'aria-atomic'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
          optional: true,
          displayName: "'aria-autocomplete'",
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'none',
            },
            {
              kind: 1,
              value: 'inline',
            },
            {
              kind: 1,
              value: 'list',
            },
            {
              kind: 1,
              value: 'both',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
          optional: true,
          displayName: "'aria-busy'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-pressed', 'aria-selected.'],
          description:
            'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
          optional: true,
          displayName: "'aria-checked'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'mixed',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-colindex.'],
          description:
            'Defines the total number of columns in a table, grid, or treegrid.',
          optional: true,
          displayName: "'aria-colcount'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-colcount', 'aria-colspan.'],
          description:
            "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
          optional: true,
          displayName: "'aria-colindex'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-colindex', 'aria-rowspan.'],
          description:
            'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.',
          optional: true,
          displayName: "'aria-colspan'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-owns.'],
          description:
            'Identifies the element (or elements) whose contents or presence are controlled by the current element.',
          optional: true,
          displayName: "'aria-controls'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates the element that represents the current item within a container or set of related elements.',
          optional: true,
          displayName: "'aria-current'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
            {
              kind: 1,
              value: 'page',
            },
            {
              kind: 1,
              value: 'step',
            },
            {
              kind: 1,
              value: 'location',
            },
            {
              kind: 1,
              value: 'date',
            },
            {
              kind: 1,
              value: 'time',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-labelledby'],
          description:
            'Identifies the element (or elements) that describes the object.',
          optional: true,
          displayName: "'aria-describedby'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-describedby.'],
          description:
            'Identifies the element that provides a detailed, extended description for the object.',
          optional: true,
          displayName: "'aria-details'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-hidden', 'aria-readonly.'],
          description:
            'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
          optional: true,
          displayName: "'aria-disabled'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          deprecated: 'in ARIA 1.1',
          description:
            'Indicates what functions can be performed when a dragged object is released on the drop target.',
          optional: true,
          displayName: "'aria-dropeffect'",
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'none',
            },
            {
              kind: 1,
              value: 'copy',
            },
            {
              kind: 1,
              value: 'execute',
            },
            {
              kind: 1,
              value: 'link',
            },
            {
              kind: 1,
              value: 'move',
            },
            {
              kind: 1,
              value: 'popup',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-invalid', 'aria-describedby.'],
          description:
            'Identifies the element that provides an error message for the object.',
          optional: true,
          displayName: "'aria-errormessage'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
          optional: true,
          displayName: "'aria-expanded'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
          optional: true,
          displayName: "'aria-flowto'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          deprecated: 'in ARIA 1.1',
          description:
            'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
          optional: true,
          displayName: "'aria-grabbed'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
          optional: true,
          displayName: "'aria-haspopup'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
            {
              kind: 1,
              value: 'menu',
            },
            {
              kind: 1,
              value: 'listbox',
            },
            {
              kind: 1,
              value: 'tree',
            },
            {
              kind: 1,
              value: 'grid',
            },
            {
              kind: 1,
              value: 'dialog',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-disabled.'],
          description:
            'Indicates whether the element is exposed to an accessibility API.',
          optional: true,
          displayName: "'aria-hidden'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-errormessage.'],
          description:
            'Indicates the entered value does not conform to the format expected by the application.',
          optional: true,
          displayName: "'aria-invalid'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
            {
              kind: 1,
              value: 'grammar',
            },
            {
              kind: 1,
              value: 'spelling',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
          optional: true,
          displayName: "'aria-keyshortcuts'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-labelledby.'],
          description:
            'Defines a string value that labels the current element.',
          optional: true,
          displayName: "'aria-label'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-describedby.'],
          description:
            'Identifies the element (or elements) that labels the current element.',
          optional: true,
          displayName: "'aria-labelledby'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Defines the hierarchical level of an element within a structure.',
          optional: true,
          displayName: "'aria-level'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
          optional: true,
          displayName: "'aria-live'",
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'off',
            },
            {
              kind: 1,
              value: 'assertive',
            },
            {
              kind: 1,
              value: 'polite',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description: 'Indicates whether an element is modal when displayed.',
          optional: true,
          displayName: "'aria-modal'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates whether a text box accepts multiple lines of input or only a single line.',
          optional: true,
          displayName: "'aria-multiline'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates that the user may select more than one item from the current selectable descendants.',
          optional: true,
          displayName: "'aria-multiselectable'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
          optional: true,
          displayName: "'aria-orientation'",
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'horizontal',
            },
            {
              kind: 1,
              value: 'vertical',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-controls.'],
          description:
            'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.',
          optional: true,
          displayName: "'aria-owns'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
          optional: true,
          displayName: "'aria-placeholder'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-setsize.'],
          description:
            "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
          optional: true,
          displayName: "'aria-posinset'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-checked', 'aria-selected.'],
          description:
            'Indicates the current "pressed" state of toggle buttons.',
          optional: true,
          displayName: "'aria-pressed'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'mixed',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-disabled.'],
          description:
            'Indicates that the element is not editable, but is otherwise operable.',
          optional: true,
          displayName: "'aria-readonly'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-atomic.'],
          description:
            'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
          optional: true,
          displayName: "'aria-relevant'",
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'additions',
            },
            {
              kind: 1,
              value: 'additions removals',
            },
            {
              kind: 1,
              value: 'additions text',
            },
            {
              kind: 1,
              value: 'all',
            },
            {
              kind: 1,
              value: 'removals',
            },
            {
              kind: 1,
              value: 'removals additions',
            },
            {
              kind: 1,
              value: 'removals text',
            },
            {
              kind: 1,
              value: 'text',
            },
            {
              kind: 1,
              value: 'text additions',
            },
            {
              kind: 1,
              value: 'text removals',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates that user input is required on the element before a form may be submitted.',
          optional: true,
          displayName: "'aria-required'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description:
            'Defines a human-readable, author-localized description for the role of an element.',
          optional: true,
          displayName: "'aria-roledescription'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-rowindex.'],
          description:
            'Defines the total number of rows in a table, grid, or treegrid.',
          optional: true,
          displayName: "'aria-rowcount'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-rowcount', 'aria-rowspan.'],
          description:
            "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
          optional: true,
          displayName: "'aria-rowindex'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-rowindex', 'aria-colspan.'],
          description:
            'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.',
          optional: true,
          displayName: "'aria-rowspan'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-checked', 'aria-pressed.'],
          description:
            'Indicates the current "selected" state of various widgets.',
          optional: true,
          displayName: "'aria-selected'",
          kind: 4,
          properties: [
            {
              kind: 3,
            },
            {
              kind: 1,
              value: 'false',
            },
            {
              kind: 1,
              value: 'true',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-posinset.'],
          description:
            'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.',
          optional: true,
          displayName: "'aria-setsize'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Indicates if items in a table or grid are sorted in ascending or descending order.',
          optional: true,
          displayName: "'aria-sort'",
          kind: 4,
          properties: [
            {
              kind: 1,
              value: 'none',
            },
            {
              kind: 1,
              value: 'ascending',
            },
            {
              kind: 1,
              value: 'descending',
            },
            {
              kind: 1,
              value: 'other',
            },
          ],
          parent: 'AriaAttributes',
        },
        {
          description: 'Defines the maximum allowed value for a range widget.',
          optional: true,
          displayName: "'aria-valuemax'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          description: 'Defines the minimum allowed value for a range widget.',
          optional: true,
          displayName: "'aria-valuemin'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          see: ['aria-valuetext.'],
          description: 'Defines the current value for a range widget.',
          optional: true,
          displayName: "'aria-valuenow'",
          kind: 2,
          parent: 'AriaAttributes',
        },
        {
          description:
            'Defines the human readable text alternative of aria-valuenow for a range widget.',
          optional: true,
          displayName: "'aria-valuetext'",
          kind: 1,
          parent: 'AriaAttributes',
        },
        {
          optional: true,
          displayName: 'children',
          kind: 15,
          type: 'ReactNode',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'dangerouslySetInnerHTML',
          kind: 15,
          properties: [
            {
              kind: 1,
              displayName: '__html',
            },
          ],
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCopy',
          kind: 15,
          type: 'ClipboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCopyCapture',
          kind: 15,
          type: 'ClipboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCut',
          kind: 15,
          type: 'ClipboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCutCapture',
          kind: 15,
          type: 'ClipboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPaste',
          kind: 15,
          type: 'ClipboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPasteCapture',
          kind: 15,
          type: 'ClipboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCompositionEnd',
          kind: 15,
          type: 'CompositionEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCompositionEndCapture',
          kind: 15,
          type: 'CompositionEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCompositionStart',
          kind: 15,
          type: 'CompositionEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCompositionStartCapture',
          kind: 15,
          type: 'CompositionEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCompositionUpdate',
          kind: 15,
          type: 'CompositionEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCompositionUpdateCapture',
          kind: 15,
          type: 'CompositionEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onFocus',
          kind: 15,
          type: 'FocusEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onFocusCapture',
          kind: 15,
          type: 'FocusEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onBlur',
          kind: 15,
          type: 'FocusEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onBlurCapture',
          kind: 15,
          type: 'FocusEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onChange',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onChangeCapture',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onBeforeInput',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onBeforeInputCapture',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onInput',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onInputCapture',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onReset',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onResetCapture',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSubmit',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSubmitCapture',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onInvalid',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onInvalidCapture',
          kind: 15,
          type: 'FormEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoad',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoadCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onError',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onErrorCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onKeyDown',
          kind: 15,
          type: 'KeyboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onKeyDownCapture',
          kind: 15,
          type: 'KeyboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onKeyPress',
          kind: 15,
          type: 'KeyboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onKeyPressCapture',
          kind: 15,
          type: 'KeyboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onKeyUp',
          kind: 15,
          type: 'KeyboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onKeyUpCapture',
          kind: 15,
          type: 'KeyboardEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAbort',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAbortCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCanPlay',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCanPlayCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCanPlayThrough',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onCanPlayThroughCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDurationChange',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDurationChangeCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onEmptied',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onEmptiedCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onEncrypted',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onEncryptedCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onEnded',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onEndedCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoadedData',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoadedDataCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoadedMetadata',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoadedMetadataCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoadStart',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLoadStartCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPause',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPauseCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPlay',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPlayCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPlaying',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPlayingCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onProgress',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onProgressCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onRateChange',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onRateChangeCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSeeked',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSeekedCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSeeking',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSeekingCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onStalled',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onStalledCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSuspend',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSuspendCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTimeUpdate',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTimeUpdateCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onVolumeChange',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onVolumeChangeCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onWaiting',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onWaitingCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAuxClick',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAuxClickCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onClick',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onClickCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onContextMenu',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onContextMenuCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDoubleClick',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDoubleClickCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDrag',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragEnd',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragEndCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragEnter',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragEnterCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragExit',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragExitCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragLeave',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragLeaveCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragOver',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragOverCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragStart',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDragStartCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDrop',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onDropCapture',
          kind: 15,
          type: 'DragEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseDown',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseDownCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseEnter',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseLeave',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseMove',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseMoveCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseOut',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseOutCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseOver',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseOverCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseUp',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onMouseUpCapture',
          kind: 15,
          type: 'MouseEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSelect',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onSelectCapture',
          kind: 15,
          type: 'ReactEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchCancel',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchCancelCapture',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchEnd',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchEndCapture',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchMove',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchMoveCapture',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchStart',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTouchStartCapture',
          kind: 15,
          type: 'TouchEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerDown',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerDownCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerMove',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerMoveCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerUp',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerUpCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerCancel',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerCancelCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerEnter',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerEnterCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerLeave',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerLeaveCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerOver',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerOverCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerOut',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onPointerOutCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onGotPointerCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onGotPointerCaptureCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLostPointerCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onLostPointerCaptureCapture',
          kind: 15,
          type: 'PointerEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onScroll',
          kind: 15,
          type: 'UIEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onScrollCapture',
          kind: 15,
          type: 'UIEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onWheel',
          kind: 15,
          type: 'WheelEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onWheelCapture',
          kind: 15,
          type: 'WheelEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAnimationStart',
          kind: 15,
          type: 'AnimationEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAnimationStartCapture',
          kind: 15,
          type: 'AnimationEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAnimationEnd',
          kind: 15,
          type: 'AnimationEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAnimationEndCapture',
          kind: 15,
          type: 'AnimationEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAnimationIteration',
          kind: 15,
          type: 'AnimationEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onAnimationIterationCapture',
          kind: 15,
          type: 'AnimationEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTransitionEnd',
          kind: 15,
          type: 'TransitionEventHandler<T>',
          parent: 'DOMAttributes',
        },
        {
          optional: true,
          displayName: 'onTransitionEndCapture',
          kind: 15,
          type: 'TransitionEventHandler<T>',
          parent: 'DOMAttributes',
        },
      ],
      displayName: 'Column',
      propParents: {
        OwnProps: {
          description: 'own properties.',
          displayName: 'OwnProps',
          kind: 15,
          properties: [
            {
              description: 'stringProp description',
              optional: true,
              displayName: 'stringProp',
              kind: 1,
            },
            {
              description: 'numberProp description',
              kind: 2,
              displayName: 'numberProp',
            },
            {
              description: 'function props description',
              displayName: 'fnProp',
              kind: 11,
              returns: {
                kind: 12,
              },
            },
            {
              deprecated: 'since version 1.0',
              description: 'unionProp description',
              displayName: 'unionProp',
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'option1',
                },
                {
                  kind: 1,
                  value: 'option2',
                },
                {
                  kind: 1,
                  value: 'option3',
                },
              ],
            },
          ],
        },
        BaseHTMLAttributes: {
          displayName: 'BaseHTMLAttributes',
          kind: 14,
          generics: [
            {
              displayName: 'T',
            },
          ],
          extends: ['HTMLAttributes'],
          properties: [
            {
              optional: true,
              displayName: 'href',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'target',
              kind: 1,
            },
          ],
        },
        HTMLAttributes: {
          displayName: 'HTMLAttributes',
          kind: 14,
          generics: [
            {
              displayName: 'T',
            },
          ],
          extends: ['AriaAttributes', 'DOMAttributes'],
          properties: [
            {
              optional: true,
              displayName: 'defaultChecked',
              kind: 3,
            },
            {
              optional: true,
              displayName: 'defaultValue',
              kind: 4,
              properties: [
                {
                  kind: 1,
                },
                {
                  kind: 2,
                },
                {
                  displayName: 'ReadonlyArray<string>',
                  kind: 15,
                },
              ],
            },
            {
              optional: true,
              displayName: 'suppressContentEditableWarning',
              kind: 3,
            },
            {
              optional: true,
              displayName: 'suppressHydrationWarning',
              kind: 3,
            },
            {
              optional: true,
              displayName: 'accessKey',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'className',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'contentEditable',
              kind: 4,
              properties: [
                {
                  displayName: 'Booleanish',
                  kind: 15,
                },
                {
                  kind: 1,
                  value: 'inherit',
                },
              ],
            },
            {
              optional: true,
              displayName: 'contextMenu',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'dir',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'draggable',
              kind: 15,
              type: 'Booleanish',
            },
            {
              optional: true,
              displayName: 'hidden',
              kind: 3,
            },
            {
              optional: true,
              displayName: 'id',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'lang',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'placeholder',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'slot',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'spellCheck',
              kind: 15,
              type: 'Booleanish',
            },
            {
              optional: true,
              displayName: 'style',
              kind: 15,
              type: 'CSSProperties',
            },
            {
              optional: true,
              displayName: 'tabIndex',
              kind: 2,
            },
            {
              optional: true,
              displayName: 'title',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'translate',
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'yes',
                },
                {
                  kind: 1,
                  value: 'no',
                },
              ],
            },
            {
              optional: true,
              displayName: 'radioGroup',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'role',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'about',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'datatype',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'inlist',
              kind: 17,
            },
            {
              optional: true,
              displayName: 'prefix',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'property',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'resource',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'typeof',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'vocab',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'autoCapitalize',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'autoCorrect',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'autoSave',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'color',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'itemProp',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'itemScope',
              kind: 3,
            },
            {
              optional: true,
              displayName: 'itemType',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'itemID',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'itemRef',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'results',
              kind: 2,
            },
            {
              optional: true,
              displayName: 'security',
              kind: 1,
            },
            {
              optional: true,
              displayName: 'unselectable',
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'on',
                },
                {
                  kind: 1,
                  value: 'off',
                },
              ],
            },
            {
              see: [
                'https ://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute',
              ],
              description:
                'Hints at the type of data that might be entered by the user while editing the element or its contents',
              optional: true,
              displayName: 'inputMode',
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'none',
                },
                {
                  kind: 1,
                  value: 'text',
                },
                {
                  kind: 1,
                  value: 'tel',
                },
                {
                  kind: 1,
                  value: 'url',
                },
                {
                  kind: 1,
                  value: 'email',
                },
                {
                  kind: 1,
                  value: 'numeric',
                },
                {
                  kind: 1,
                  value: 'decimal',
                },
                {
                  kind: 1,
                  value: 'search',
                },
              ],
            },
            {
              see: [
                'https ://html.spec.whatwg.org/multipage/custom-elements.html#attr-is',
              ],
              description:
                'Specify that a standard HTML element should behave like a defined custom built-in element',
              optional: true,
              displayName: 'is',
              kind: 1,
            },
          ],
        },
        AriaAttributes: {
          displayName: 'AriaAttributes',
          kind: 14,
          properties: [
            {
              description:
                'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
              optional: true,
              displayName: "'aria-activedescendant'",
              kind: 1,
            },
            {
              description:
                'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
              optional: true,
              displayName: "'aria-atomic'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              description:
                "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
              optional: true,
              displayName: "'aria-autocomplete'",
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'none',
                },
                {
                  kind: 1,
                  value: 'inline',
                },
                {
                  kind: 1,
                  value: 'list',
                },
                {
                  kind: 1,
                  value: 'both',
                },
              ],
            },
            {
              description:
                'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
              optional: true,
              displayName: "'aria-busy'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              see: ['aria-pressed', 'aria-selected.'],
              description:
                'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
              optional: true,
              displayName: "'aria-checked'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'mixed',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              see: ['aria-colindex.'],
              description:
                'Defines the total number of columns in a table, grid, or treegrid.',
              optional: true,
              displayName: "'aria-colcount'",
              kind: 2,
            },
            {
              see: ['aria-colcount', 'aria-colspan.'],
              description:
                "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
              optional: true,
              displayName: "'aria-colindex'",
              kind: 2,
            },
            {
              see: ['aria-colindex', 'aria-rowspan.'],
              description:
                'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.',
              optional: true,
              displayName: "'aria-colspan'",
              kind: 2,
            },
            {
              see: ['aria-owns.'],
              description:
                'Identifies the element (or elements) whose contents or presence are controlled by the current element.',
              optional: true,
              displayName: "'aria-controls'",
              kind: 1,
            },
            {
              description:
                'Indicates the element that represents the current item within a container or set of related elements.',
              optional: true,
              displayName: "'aria-current'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
                {
                  kind: 1,
                  value: 'page',
                },
                {
                  kind: 1,
                  value: 'step',
                },
                {
                  kind: 1,
                  value: 'location',
                },
                {
                  kind: 1,
                  value: 'date',
                },
                {
                  kind: 1,
                  value: 'time',
                },
              ],
            },
            {
              see: ['aria-labelledby'],
              description:
                'Identifies the element (or elements) that describes the object.',
              optional: true,
              displayName: "'aria-describedby'",
              kind: 1,
            },
            {
              see: ['aria-describedby.'],
              description:
                'Identifies the element that provides a detailed, extended description for the object.',
              optional: true,
              displayName: "'aria-details'",
              kind: 1,
            },
            {
              see: ['aria-hidden', 'aria-readonly.'],
              description:
                'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
              optional: true,
              displayName: "'aria-disabled'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              deprecated: 'in ARIA 1.1',
              description:
                'Indicates what functions can be performed when a dragged object is released on the drop target.',
              optional: true,
              displayName: "'aria-dropeffect'",
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'none',
                },
                {
                  kind: 1,
                  value: 'copy',
                },
                {
                  kind: 1,
                  value: 'execute',
                },
                {
                  kind: 1,
                  value: 'link',
                },
                {
                  kind: 1,
                  value: 'move',
                },
                {
                  kind: 1,
                  value: 'popup',
                },
              ],
            },
            {
              see: ['aria-invalid', 'aria-describedby.'],
              description:
                'Identifies the element that provides an error message for the object.',
              optional: true,
              displayName: "'aria-errormessage'",
              kind: 1,
            },
            {
              description:
                'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
              optional: true,
              displayName: "'aria-expanded'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              description:
                "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
              optional: true,
              displayName: "'aria-flowto'",
              kind: 1,
            },
            {
              deprecated: 'in ARIA 1.1',
              description:
                'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
              optional: true,
              displayName: "'aria-grabbed'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              description:
                'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
              optional: true,
              displayName: "'aria-haspopup'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
                {
                  kind: 1,
                  value: 'menu',
                },
                {
                  kind: 1,
                  value: 'listbox',
                },
                {
                  kind: 1,
                  value: 'tree',
                },
                {
                  kind: 1,
                  value: 'grid',
                },
                {
                  kind: 1,
                  value: 'dialog',
                },
              ],
            },
            {
              see: ['aria-disabled.'],
              description:
                'Indicates whether the element is exposed to an accessibility API.',
              optional: true,
              displayName: "'aria-hidden'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              see: ['aria-errormessage.'],
              description:
                'Indicates the entered value does not conform to the format expected by the application.',
              optional: true,
              displayName: "'aria-invalid'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
                {
                  kind: 1,
                  value: 'grammar',
                },
                {
                  kind: 1,
                  value: 'spelling',
                },
              ],
            },
            {
              description:
                'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
              optional: true,
              displayName: "'aria-keyshortcuts'",
              kind: 1,
            },
            {
              see: ['aria-labelledby.'],
              description:
                'Defines a string value that labels the current element.',
              optional: true,
              displayName: "'aria-label'",
              kind: 1,
            },
            {
              see: ['aria-describedby.'],
              description:
                'Identifies the element (or elements) that labels the current element.',
              optional: true,
              displayName: "'aria-labelledby'",
              kind: 1,
            },
            {
              description:
                'Defines the hierarchical level of an element within a structure.',
              optional: true,
              displayName: "'aria-level'",
              kind: 2,
            },
            {
              description:
                'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
              optional: true,
              displayName: "'aria-live'",
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'off',
                },
                {
                  kind: 1,
                  value: 'assertive',
                },
                {
                  kind: 1,
                  value: 'polite',
                },
              ],
            },
            {
              description:
                'Indicates whether an element is modal when displayed.',
              optional: true,
              displayName: "'aria-modal'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              description:
                'Indicates whether a text box accepts multiple lines of input or only a single line.',
              optional: true,
              displayName: "'aria-multiline'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              description:
                'Indicates that the user may select more than one item from the current selectable descendants.',
              optional: true,
              displayName: "'aria-multiselectable'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              description:
                "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
              optional: true,
              displayName: "'aria-orientation'",
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'horizontal',
                },
                {
                  kind: 1,
                  value: 'vertical',
                },
              ],
            },
            {
              see: ['aria-controls.'],
              description:
                'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.',
              optional: true,
              displayName: "'aria-owns'",
              kind: 1,
            },
            {
              description:
                'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
              optional: true,
              displayName: "'aria-placeholder'",
              kind: 1,
            },
            {
              see: ['aria-setsize.'],
              description:
                "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
              optional: true,
              displayName: "'aria-posinset'",
              kind: 2,
            },
            {
              see: ['aria-checked', 'aria-selected.'],
              description:
                'Indicates the current "pressed" state of toggle buttons.',
              optional: true,
              displayName: "'aria-pressed'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'mixed',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              see: ['aria-disabled.'],
              description:
                'Indicates that the element is not editable, but is otherwise operable.',
              optional: true,
              displayName: "'aria-readonly'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              see: ['aria-atomic.'],
              description:
                'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
              optional: true,
              displayName: "'aria-relevant'",
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'additions',
                },
                {
                  kind: 1,
                  value: 'additions removals',
                },
                {
                  kind: 1,
                  value: 'additions text',
                },
                {
                  kind: 1,
                  value: 'all',
                },
                {
                  kind: 1,
                  value: 'removals',
                },
                {
                  kind: 1,
                  value: 'removals additions',
                },
                {
                  kind: 1,
                  value: 'removals text',
                },
                {
                  kind: 1,
                  value: 'text',
                },
                {
                  kind: 1,
                  value: 'text additions',
                },
                {
                  kind: 1,
                  value: 'text removals',
                },
              ],
            },
            {
              description:
                'Indicates that user input is required on the element before a form may be submitted.',
              optional: true,
              displayName: "'aria-required'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              description:
                'Defines a human-readable, author-localized description for the role of an element.',
              optional: true,
              displayName: "'aria-roledescription'",
              kind: 1,
            },
            {
              see: ['aria-rowindex.'],
              description:
                'Defines the total number of rows in a table, grid, or treegrid.',
              optional: true,
              displayName: "'aria-rowcount'",
              kind: 2,
            },
            {
              see: ['aria-rowcount', 'aria-rowspan.'],
              description:
                "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
              optional: true,
              displayName: "'aria-rowindex'",
              kind: 2,
            },
            {
              see: ['aria-rowindex', 'aria-colspan.'],
              description:
                'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.',
              optional: true,
              displayName: "'aria-rowspan'",
              kind: 2,
            },
            {
              see: ['aria-checked', 'aria-pressed.'],
              description:
                'Indicates the current "selected" state of various widgets.',
              optional: true,
              displayName: "'aria-selected'",
              kind: 4,
              properties: [
                {
                  kind: 3,
                },
                {
                  kind: 1,
                  value: 'false',
                },
                {
                  kind: 1,
                  value: 'true',
                },
              ],
            },
            {
              see: ['aria-posinset.'],
              description:
                'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.',
              optional: true,
              displayName: "'aria-setsize'",
              kind: 2,
            },
            {
              description:
                'Indicates if items in a table or grid are sorted in ascending or descending order.',
              optional: true,
              displayName: "'aria-sort'",
              kind: 4,
              properties: [
                {
                  kind: 1,
                  value: 'none',
                },
                {
                  kind: 1,
                  value: 'ascending',
                },
                {
                  kind: 1,
                  value: 'descending',
                },
                {
                  kind: 1,
                  value: 'other',
                },
              ],
            },
            {
              description:
                'Defines the maximum allowed value for a range widget.',
              optional: true,
              displayName: "'aria-valuemax'",
              kind: 2,
            },
            {
              description:
                'Defines the minimum allowed value for a range widget.',
              optional: true,
              displayName: "'aria-valuemin'",
              kind: 2,
            },
            {
              see: ['aria-valuetext.'],
              description: 'Defines the current value for a range widget.',
              optional: true,
              displayName: "'aria-valuenow'",
              kind: 2,
            },
            {
              description:
                'Defines the human readable text alternative of aria-valuenow for a range widget.',
              optional: true,
              displayName: "'aria-valuetext'",
              kind: 1,
            },
          ],
        },
        DOMAttributes: {
          displayName: 'DOMAttributes',
          kind: 14,
          generics: [
            {
              displayName: 'T',
            },
          ],
          properties: [
            {
              optional: true,
              displayName: 'children',
              kind: 15,
              type: 'ReactNode',
            },
            {
              optional: true,
              displayName: 'dangerouslySetInnerHTML',
              kind: 15,
              properties: [
                {
                  kind: 1,
                  displayName: '__html',
                },
              ],
            },
            {
              optional: true,
              displayName: 'onCopy',
              kind: 15,
              type: 'ClipboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCopyCapture',
              kind: 15,
              type: 'ClipboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCut',
              kind: 15,
              type: 'ClipboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCutCapture',
              kind: 15,
              type: 'ClipboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPaste',
              kind: 15,
              type: 'ClipboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPasteCapture',
              kind: 15,
              type: 'ClipboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCompositionEnd',
              kind: 15,
              type: 'CompositionEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCompositionEndCapture',
              kind: 15,
              type: 'CompositionEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCompositionStart',
              kind: 15,
              type: 'CompositionEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCompositionStartCapture',
              kind: 15,
              type: 'CompositionEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCompositionUpdate',
              kind: 15,
              type: 'CompositionEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCompositionUpdateCapture',
              kind: 15,
              type: 'CompositionEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onFocus',
              kind: 15,
              type: 'FocusEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onFocusCapture',
              kind: 15,
              type: 'FocusEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onBlur',
              kind: 15,
              type: 'FocusEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onBlurCapture',
              kind: 15,
              type: 'FocusEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onChange',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onChangeCapture',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onBeforeInput',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onBeforeInputCapture',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onInput',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onInputCapture',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onReset',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onResetCapture',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSubmit',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSubmitCapture',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onInvalid',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onInvalidCapture',
              kind: 15,
              type: 'FormEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoad',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoadCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onError',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onErrorCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onKeyDown',
              kind: 15,
              type: 'KeyboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onKeyDownCapture',
              kind: 15,
              type: 'KeyboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onKeyPress',
              kind: 15,
              type: 'KeyboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onKeyPressCapture',
              kind: 15,
              type: 'KeyboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onKeyUp',
              kind: 15,
              type: 'KeyboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onKeyUpCapture',
              kind: 15,
              type: 'KeyboardEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAbort',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAbortCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCanPlay',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCanPlayCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCanPlayThrough',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onCanPlayThroughCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDurationChange',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDurationChangeCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onEmptied',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onEmptiedCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onEncrypted',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onEncryptedCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onEnded',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onEndedCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoadedData',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoadedDataCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoadedMetadata',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoadedMetadataCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoadStart',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLoadStartCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPause',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPauseCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPlay',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPlayCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPlaying',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPlayingCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onProgress',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onProgressCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onRateChange',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onRateChangeCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSeeked',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSeekedCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSeeking',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSeekingCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onStalled',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onStalledCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSuspend',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSuspendCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTimeUpdate',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTimeUpdateCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onVolumeChange',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onVolumeChangeCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onWaiting',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onWaitingCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAuxClick',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAuxClickCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onClick',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onClickCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onContextMenu',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onContextMenuCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDoubleClick',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDoubleClickCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDrag',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragEnd',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragEndCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragEnter',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragEnterCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragExit',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragExitCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragLeave',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragLeaveCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragOver',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragOverCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragStart',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDragStartCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDrop',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onDropCapture',
              kind: 15,
              type: 'DragEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseDown',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseDownCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseEnter',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseLeave',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseMove',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseMoveCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseOut',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseOutCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseOver',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseOverCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseUp',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onMouseUpCapture',
              kind: 15,
              type: 'MouseEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSelect',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onSelectCapture',
              kind: 15,
              type: 'ReactEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchCancel',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchCancelCapture',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchEnd',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchEndCapture',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchMove',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchMoveCapture',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchStart',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTouchStartCapture',
              kind: 15,
              type: 'TouchEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerDown',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerDownCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerMove',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerMoveCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerUp',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerUpCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerCancel',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerCancelCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerEnter',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerEnterCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerLeave',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerLeaveCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerOver',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerOverCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerOut',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onPointerOutCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onGotPointerCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onGotPointerCaptureCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLostPointerCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onLostPointerCaptureCapture',
              kind: 15,
              type: 'PointerEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onScroll',
              kind: 15,
              type: 'UIEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onScrollCapture',
              kind: 15,
              type: 'UIEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onWheel',
              kind: 15,
              type: 'WheelEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onWheelCapture',
              kind: 15,
              type: 'WheelEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAnimationStart',
              kind: 15,
              type: 'AnimationEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAnimationStartCapture',
              kind: 15,
              type: 'AnimationEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAnimationEnd',
              kind: 15,
              type: 'AnimationEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAnimationEndCapture',
              kind: 15,
              type: 'AnimationEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAnimationIteration',
              kind: 15,
              type: 'AnimationEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onAnimationIterationCapture',
              kind: 15,
              type: 'AnimationEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTransitionEnd',
              kind: 15,
              type: 'TransitionEventHandler<T>',
            },
            {
              optional: true,
              displayName: 'onTransitionEndCapture',
              kind: 15,
              type: 'TransitionEventHandler<T>',
            },
          ],
        },
      },
    },
  });
});
