import * as path from 'path';
import { getComponentProps } from '../src/misc/props-info';
import { ComponentInfo } from '@component-controls/core';

export type ComponentCallback = (component: ComponentInfo) => void;
export const componentFixture = (
  componentName: string,
  filePathName: string,
  callback: ComponentCallback,
): void => {
  it(componentName, async () => {
    const component = await getComponentProps(
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

      filePathName,
      componentName,
    );
    await callback(component);
  });
};
describe('extract-props-info', () => {
  componentFixture(
    'Tab',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      expect(component).toMatchObject({
        tags: {},
        description:
          'Tab heading - you should specify the title/label string as the children property. To be created inside the `<TabList />` component through the children prop.',
        displayName: 'Tab',
        methods: [],
        props: {
          className: {
            parentName: 'TabProps',
            type: {
              name: 'object',
              raw: 'string | string[] | { [name: string]: boolean; }',
            },
          },
          disabled: {
            parentName: 'TabProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          disabledClassName: {
            parentName: 'TabProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          selectedClassName: {
            parentName: 'TabProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          tabIndex: {
            parentName: 'TabProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          accept: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          acceptCharset: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          action: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          allowFullScreen: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          allowTransparency: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          alt: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          as: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          async: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoComplete: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoFocus: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoPlay: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          capture: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'boolean',
                },
              ],
              raw: 'string | boolean',
            },
          },
          cellPadding: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          cellSpacing: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          charSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          challenge: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          checked: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          cite: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          classID: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          cols: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          colSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          content: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          controls: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          coords: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          crossOrigin: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          data: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          dateTime: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          default: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          defer: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          download: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          encType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          form: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formAction: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formEncType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formMethod: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formNoValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          formTarget: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          frameBorder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          headers: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          height: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          high: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          href: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          hrefLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          htmlFor: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          httpEquiv: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          integrity: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyParams: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          kind: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          label: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          list: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          loop: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          low: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          manifest: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          marginHeight: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          marginWidth: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          max: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          maxLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          media: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          mediaGroup: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          method: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          min: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          minLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          multiple: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          muted: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          name: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          nonce: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          noValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          open: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          optimum: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          pattern: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          placeholder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          playsInline: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          poster: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          preload: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          readOnly: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rel: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          required: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          reversed: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rows: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          rowSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sandbox: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scope: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scoped: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          scrolling: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          seamless: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          selected: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          shape: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          size: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sizes: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          span: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          src: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcDoc: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          start: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          step: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          summary: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          target: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          type: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          useMap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          value: {
            parentName: 'AllHTMLAttributes',
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
          width: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          wmode: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          wrap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
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
                  name: 'Booleanish',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'Booleanish | "inherit"',
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
          slot: {
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
          translate: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no"',
            },
          },
          radioGroup: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          role: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'AriaRole',
              raw: 'AriaRole',
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
          color: {
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
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'search',
                },
                {
                  name: 'string',
                  value: 'text',
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
              ],
              raw:
                '"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"',
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
                  value: 'list',
                },
                {
                  name: 'string',
                  value: 'none',
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
              raw: '"list" | "none" | "inline" | "both"',
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
                  name: 'step',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
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
                {
                  name: 'time',
                },
              ],
              raw:
                'boolean | "step" | "true" | "false" | "page" | "location" | "date" | "time"',
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
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'dialog',
                },
                {
                  name: 'grid',
                },
                {
                  name: 'listbox',
                },
                {
                  name: 'menu',
                },
                {
                  name: 'tree',
                },
              ],
              raw:
                'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
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
              name: 'ClipboardEventHandler<HTMLLIElement>',
              raw: 'ClipboardEventHandler<HTMLLIElement>',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLLIElement>',
              raw: 'ClipboardEventHandler<HTMLLIElement>',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLLIElement>',
              raw: 'ClipboardEventHandler<HTMLLIElement>',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLLIElement>',
              raw: 'ClipboardEventHandler<HTMLLIElement>',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLLIElement>',
              raw: 'ClipboardEventHandler<HTMLLIElement>',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLLIElement>',
              raw: 'ClipboardEventHandler<HTMLLIElement>',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLLIElement>',
              raw: 'CompositionEventHandler<HTMLLIElement>',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLLIElement>',
              raw: 'CompositionEventHandler<HTMLLIElement>',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLLIElement>',
              raw: 'CompositionEventHandler<HTMLLIElement>',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLLIElement>',
              raw: 'CompositionEventHandler<HTMLLIElement>',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLLIElement>',
              raw: 'CompositionEventHandler<HTMLLIElement>',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLLIElement>',
              raw: 'CompositionEventHandler<HTMLLIElement>',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLLIElement>',
              raw: 'FocusEventHandler<HTMLLIElement>',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLLIElement>',
              raw: 'FocusEventHandler<HTMLLIElement>',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLLIElement>',
              raw: 'FocusEventHandler<HTMLLIElement>',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLLIElement>',
              raw: 'FocusEventHandler<HTMLLIElement>',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLLIElement>',
              raw: 'FormEventHandler<HTMLLIElement>',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLLIElement>',
              raw: 'KeyboardEventHandler<HTMLLIElement>',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLLIElement>',
              raw: 'KeyboardEventHandler<HTMLLIElement>',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLLIElement>',
              raw: 'KeyboardEventHandler<HTMLLIElement>',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLLIElement>',
              raw: 'KeyboardEventHandler<HTMLLIElement>',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLLIElement>',
              raw: 'KeyboardEventHandler<HTMLLIElement>',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLLIElement>',
              raw: 'KeyboardEventHandler<HTMLLIElement>',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLLIElement>',
              raw: 'DragEventHandler<HTMLLIElement>',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLLIElement>',
              raw: 'MouseEventHandler<HTMLLIElement>',
            },
          },
          onSelect: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLLIElement>',
              raw: 'ReactEventHandler<HTMLLIElement>',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLLIElement>',
              raw: 'TouchEventHandler<HTMLLIElement>',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLLIElement>',
              raw: 'PointerEventHandler<HTMLLIElement>',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLLIElement>',
              raw: 'UIEventHandler<HTMLLIElement>',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLLIElement>',
              raw: 'UIEventHandler<HTMLLIElement>',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLLIElement>',
              raw: 'WheelEventHandler<HTMLLIElement>',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLLIElement>',
              raw: 'WheelEventHandler<HTMLLIElement>',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLLIElement>',
              raw: 'AnimationEventHandler<HTMLLIElement>',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLLIElement>',
              raw: 'AnimationEventHandler<HTMLLIElement>',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLLIElement>',
              raw: 'AnimationEventHandler<HTMLLIElement>',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLLIElement>',
              raw: 'AnimationEventHandler<HTMLLIElement>',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLLIElement>',
              raw: 'AnimationEventHandler<HTMLLIElement>',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLLIElement>',
              raw: 'AnimationEventHandler<HTMLLIElement>',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLLIElement>',
              raw: 'TransitionEventHandler<HTMLLIElement>',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLLIElement>',
              raw: 'TransitionEventHandler<HTMLLIElement>',
            },
          },
          ref: {
            parentName: 'ClassAttributes',
            type: {
              name: 'LegacyRef<HTMLLIElement>',
              raw: 'LegacyRef<HTMLLIElement>',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'Key',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'Key | null',
            },
          },
        },
      });
    },
  );
  componentFixture(
    'Tabs',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      expect(component).toMatchObject({
        tags: {},
        description:
          'Tabs component with [react-tabs](https://reactcommunity.org/react-tabs/) and theme-ui styling.',
        displayName: 'Tabs',
        methods: [],
        props: {
          fontSize: {
            parentName: 'TabsOwnProps',
            defaultValue: 1,
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          className: {
            parentName: 'TabsProps',
            type: {
              name: 'object',
              raw: 'string | string[] | { [name: string]: boolean; }',
            },
          },
          tabIndex: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          accept: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          acceptCharset: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          action: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          allowFullScreen: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          allowTransparency: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          alt: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          as: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          async: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoComplete: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoFocus: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoPlay: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          capture: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'boolean',
                },
              ],
              raw: 'string | boolean',
            },
          },
          cellPadding: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          cellSpacing: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          charSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          challenge: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          checked: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          cite: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          classID: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          cols: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          colSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          content: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          controls: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          coords: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          crossOrigin: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          data: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          dateTime: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          default: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          defer: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          disabled: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          download: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          encType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          form: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formAction: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formEncType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formMethod: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formNoValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          formTarget: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          frameBorder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          headers: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          height: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          high: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          href: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          hrefLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          htmlFor: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          httpEquiv: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          integrity: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyParams: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          kind: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          label: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          list: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          loop: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          low: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          manifest: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          marginHeight: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          marginWidth: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          max: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          maxLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          media: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          mediaGroup: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          method: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          min: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          minLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          multiple: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          muted: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          name: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          nonce: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          noValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          open: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          optimum: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          pattern: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          placeholder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          playsInline: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          poster: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          preload: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          readOnly: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rel: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          required: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          reversed: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rows: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          rowSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sandbox: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scope: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scoped: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          scrolling: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          seamless: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          selected: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          shape: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          size: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sizes: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          span: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          src: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcDoc: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          start: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          step: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          summary: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          target: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          type: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          useMap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          value: {
            parentName: 'AllHTMLAttributes',
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
          width: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          wmode: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          wrap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
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
                  name: 'Booleanish',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'Booleanish | "inherit"',
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
          slot: {
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
          translate: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no"',
            },
          },
          radioGroup: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          role: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'AriaRole',
              raw: 'AriaRole',
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
          color: {
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
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'search',
                },
                {
                  name: 'string',
                  value: 'text',
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
              ],
              raw:
                '"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"',
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
                  value: 'list',
                },
                {
                  name: 'string',
                  value: 'none',
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
              raw: '"list" | "none" | "inline" | "both"',
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
                  name: 'step',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
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
                {
                  name: 'time',
                },
              ],
              raw:
                'boolean | "step" | "true" | "false" | "page" | "location" | "date" | "time"',
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
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'dialog',
                },
                {
                  name: 'grid',
                },
                {
                  name: 'listbox',
                },
                {
                  name: 'menu',
                },
                {
                  name: 'tree',
                },
              ],
              raw:
                'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
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
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onSelect: {
            parentName: 'TabsProps',
            type: {
              name: 'function',
              raw:
                '((index: number, last: number, event: Event) => boolean | void)',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLDivElement>',
              raw: 'UIEventHandler<HTMLDivElement>',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLDivElement>',
              raw: 'UIEventHandler<HTMLDivElement>',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLDivElement>',
              raw: 'WheelEventHandler<HTMLDivElement>',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLDivElement>',
              raw: 'WheelEventHandler<HTMLDivElement>',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLDivElement>',
              raw: 'TransitionEventHandler<HTMLDivElement>',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLDivElement>',
              raw: 'TransitionEventHandler<HTMLDivElement>',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'Key',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'Key | null',
            },
          },
          defaultFocus: {
            parentName: 'TabsProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          defaultIndex: {
            parentName: 'TabsProps',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          disabledTabClassName: {
            parentName: 'TabsProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          domRef: {
            parentName: 'TabsProps',
            type: {
              name: 'function',
              raw: '((node?: HTMLElement) => void)',
            },
          },
          forceRenderTabPanel: {
            parentName: 'TabsProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          selectedIndex: {
            parentName: 'TabsProps',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          selectedTabClassName: {
            parentName: 'TabsProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          selectedTabPanelClassName: {
            parentName: 'TabsProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
        },
      });
    },
  );

  componentFixture(
    'TabList',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      expect(component).toMatchObject({
        tags: {},
        description:
          'Container for `<Tab />` headings, to be created inside the `<Tabs />` component. The list of `<Tab />` components should be passed as the children prop.',
        displayName: 'TabList',
        methods: [],
        props: {
          className: {
            parentName: 'TabListProps',
            type: {
              name: 'object',
              raw: 'string | string[] | { [name: string]: boolean; }',
            },
          },
          tabIndex: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          accept: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          acceptCharset: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          action: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          allowFullScreen: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          allowTransparency: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          alt: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          as: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          async: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoComplete: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoFocus: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoPlay: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          capture: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'boolean',
                },
              ],
              raw: 'string | boolean',
            },
          },
          cellPadding: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          cellSpacing: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          charSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          challenge: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          checked: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          cite: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          classID: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          cols: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          colSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          content: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          controls: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          coords: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          crossOrigin: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          data: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          dateTime: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          default: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          defer: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          disabled: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          download: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          encType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          form: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formAction: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formEncType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formMethod: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formNoValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          formTarget: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          frameBorder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          headers: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          height: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          high: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          href: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          hrefLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          htmlFor: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          httpEquiv: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          integrity: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyParams: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          kind: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          label: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          list: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          loop: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          low: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          manifest: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          marginHeight: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          marginWidth: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          max: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          maxLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          media: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          mediaGroup: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          method: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          min: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          minLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          multiple: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          muted: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          name: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          nonce: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          noValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          open: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          optimum: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          pattern: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          placeholder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          playsInline: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          poster: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          preload: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          readOnly: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rel: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          required: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          reversed: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rows: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          rowSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sandbox: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scope: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scoped: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          scrolling: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          seamless: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          selected: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          shape: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          size: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sizes: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          span: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          src: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcDoc: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          start: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          step: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          summary: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          target: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          type: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          useMap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          value: {
            parentName: 'AllHTMLAttributes',
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
          width: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          wmode: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          wrap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
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
                  name: 'Booleanish',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'Booleanish | "inherit"',
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
          slot: {
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
          translate: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no"',
            },
          },
          radioGroup: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          role: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'AriaRole',
              raw: 'AriaRole',
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
          color: {
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
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'search',
                },
                {
                  name: 'string',
                  value: 'text',
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
              ],
              raw:
                '"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"',
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
                  value: 'list',
                },
                {
                  name: 'string',
                  value: 'none',
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
              raw: '"list" | "none" | "inline" | "both"',
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
                  name: 'step',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
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
                {
                  name: 'time',
                },
              ],
              raw:
                'boolean | "step" | "true" | "false" | "page" | "location" | "date" | "time"',
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
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'dialog',
                },
                {
                  name: 'grid',
                },
                {
                  name: 'listbox',
                },
                {
                  name: 'menu',
                },
                {
                  name: 'tree',
                },
              ],
              raw:
                'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
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
              name: 'ClipboardEventHandler<HTMLUListElement>',
              raw: 'ClipboardEventHandler<HTMLUListElement>',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLUListElement>',
              raw: 'ClipboardEventHandler<HTMLUListElement>',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLUListElement>',
              raw: 'ClipboardEventHandler<HTMLUListElement>',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLUListElement>',
              raw: 'ClipboardEventHandler<HTMLUListElement>',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLUListElement>',
              raw: 'ClipboardEventHandler<HTMLUListElement>',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLUListElement>',
              raw: 'ClipboardEventHandler<HTMLUListElement>',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLUListElement>',
              raw: 'CompositionEventHandler<HTMLUListElement>',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLUListElement>',
              raw: 'CompositionEventHandler<HTMLUListElement>',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLUListElement>',
              raw: 'CompositionEventHandler<HTMLUListElement>',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLUListElement>',
              raw: 'CompositionEventHandler<HTMLUListElement>',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLUListElement>',
              raw: 'CompositionEventHandler<HTMLUListElement>',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLUListElement>',
              raw: 'CompositionEventHandler<HTMLUListElement>',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLUListElement>',
              raw: 'FocusEventHandler<HTMLUListElement>',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLUListElement>',
              raw: 'FocusEventHandler<HTMLUListElement>',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLUListElement>',
              raw: 'FocusEventHandler<HTMLUListElement>',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLUListElement>',
              raw: 'FocusEventHandler<HTMLUListElement>',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLUListElement>',
              raw: 'FormEventHandler<HTMLUListElement>',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLUListElement>',
              raw: 'KeyboardEventHandler<HTMLUListElement>',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLUListElement>',
              raw: 'KeyboardEventHandler<HTMLUListElement>',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLUListElement>',
              raw: 'KeyboardEventHandler<HTMLUListElement>',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLUListElement>',
              raw: 'KeyboardEventHandler<HTMLUListElement>',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLUListElement>',
              raw: 'KeyboardEventHandler<HTMLUListElement>',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLUListElement>',
              raw: 'KeyboardEventHandler<HTMLUListElement>',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLUListElement>',
              raw: 'DragEventHandler<HTMLUListElement>',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLUListElement>',
              raw: 'MouseEventHandler<HTMLUListElement>',
            },
          },
          onSelect: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLUListElement>',
              raw: 'ReactEventHandler<HTMLUListElement>',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLUListElement>',
              raw: 'TouchEventHandler<HTMLUListElement>',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLUListElement>',
              raw: 'PointerEventHandler<HTMLUListElement>',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLUListElement>',
              raw: 'UIEventHandler<HTMLUListElement>',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLUListElement>',
              raw: 'UIEventHandler<HTMLUListElement>',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLUListElement>',
              raw: 'WheelEventHandler<HTMLUListElement>',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLUListElement>',
              raw: 'WheelEventHandler<HTMLUListElement>',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLUListElement>',
              raw: 'AnimationEventHandler<HTMLUListElement>',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLUListElement>',
              raw: 'AnimationEventHandler<HTMLUListElement>',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLUListElement>',
              raw: 'AnimationEventHandler<HTMLUListElement>',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLUListElement>',
              raw: 'AnimationEventHandler<HTMLUListElement>',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLUListElement>',
              raw: 'AnimationEventHandler<HTMLUListElement>',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLUListElement>',
              raw: 'AnimationEventHandler<HTMLUListElement>',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLUListElement>',
              raw: 'TransitionEventHandler<HTMLUListElement>',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLUListElement>',
              raw: 'TransitionEventHandler<HTMLUListElement>',
            },
          },
          ref: {
            parentName: 'ClassAttributes',
            type: {
              name: 'LegacyRef<HTMLUListElement>',
              raw: 'LegacyRef<HTMLUListElement>',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'Key',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'Key | null',
            },
          },
        },
      });
    },
  );

  componentFixture(
    'TabPanel',
    path.resolve(__dirname, '../../../ui/components/src/Tabs/Tabs.tsx'),
    component => {
      expect(component).toMatchObject({
        tags: {},
        description:
          'Panel body container, to be created inside the `<Tabs />` component through the children prop.',
        displayName: 'TabPanel',
        methods: [],
        props: {
          className: {
            parentName: 'TabPanelProps',
            type: {
              name: 'object',
              raw: 'string | string[] | { [name: string]: boolean; }',
            },
          },
          forceRender: {
            parentName: 'TabPanelProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          selectedClassName: {
            parentName: 'TabPanelProps',
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
          accept: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          acceptCharset: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          action: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          allowFullScreen: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          allowTransparency: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          alt: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          as: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          async: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoComplete: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          autoFocus: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          autoPlay: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          capture: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'boolean',
                },
              ],
              raw: 'string | boolean',
            },
          },
          cellPadding: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          cellSpacing: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          charSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          challenge: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          checked: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          cite: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          classID: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          cols: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          colSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          content: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          controls: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          coords: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          crossOrigin: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          data: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          dateTime: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          default: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          defer: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          disabled: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          download: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          encType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          form: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formAction: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formEncType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formMethod: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          formNoValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          formTarget: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          frameBorder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          headers: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          height: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          high: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          href: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          hrefLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          htmlFor: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          httpEquiv: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          integrity: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyParams: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          keyType: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          kind: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          label: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          list: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          loop: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          low: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          manifest: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          marginHeight: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          marginWidth: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          max: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          maxLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          media: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          mediaGroup: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          method: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          min: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          minLength: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          multiple: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          muted: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          name: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          nonce: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          noValidate: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          open: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          optimum: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          pattern: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          placeholder: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          playsInline: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          poster: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          preload: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          readOnly: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rel: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          required: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          reversed: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          rows: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          rowSpan: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sandbox: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scope: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          scoped: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          scrolling: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          seamless: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          selected: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          shape: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          size: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          sizes: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          span: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          src: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcDoc: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcLang: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          srcSet: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          start: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          step: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          summary: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          target: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          type: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          useMap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          value: {
            parentName: 'AllHTMLAttributes',
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
          width: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
              ],
              raw: 'string | number',
            },
          },
          wmode: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          wrap: {
            parentName: 'AllHTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
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
                  name: 'Booleanish',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'Booleanish | "inherit"',
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
          slot: {
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
          translate: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no"',
            },
          },
          radioGroup: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          role: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'AriaRole',
              raw: 'AriaRole',
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
          color: {
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
                  value: 'none',
                },
                {
                  name: 'string',
                  value: 'search',
                },
                {
                  name: 'string',
                  value: 'text',
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
              ],
              raw:
                '"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"',
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
                  value: 'list',
                },
                {
                  name: 'string',
                  value: 'none',
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
              raw: '"list" | "none" | "inline" | "both"',
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
                  name: 'step',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
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
                {
                  name: 'time',
                },
              ],
              raw:
                'boolean | "step" | "true" | "false" | "page" | "location" | "date" | "time"',
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
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'dialog',
                },
                {
                  name: 'grid',
                },
                {
                  name: 'listbox',
                },
                {
                  name: 'menu',
                },
                {
                  name: 'tree',
                },
              ],
              raw:
                'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"',
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
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onSelect: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLDivElement>',
              raw: 'UIEventHandler<HTMLDivElement>',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLDivElement>',
              raw: 'UIEventHandler<HTMLDivElement>',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLDivElement>',
              raw: 'WheelEventHandler<HTMLDivElement>',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLDivElement>',
              raw: 'WheelEventHandler<HTMLDivElement>',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLDivElement>',
              raw: 'TransitionEventHandler<HTMLDivElement>',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLDivElement>',
              raw: 'TransitionEventHandler<HTMLDivElement>',
            },
          },
          ref: {
            parentName: 'ClassAttributes',
            type: {
              name: 'LegacyRef<HTMLDivElement>',
              raw: 'LegacyRef<HTMLDivElement>',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'Key',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'Key | null',
            },
          },
        },
      });
    },
  );
  componentFixture(
    'PropsTable',
    path.resolve(__dirname, '../../../ui/blocks/src/PropsTable/PropsTable.tsx'),
    component => {
      expect(component).toMatchObject({
        tags: {},
        description:
          "Displays the component's properties as well as configurable controls to interact with the component.",
        displayName: 'PropsTable',
        methods: [],
        props: {
          extraColumns: {
            description: 'extra custom columns passed to the PropsTable.',
            parentName: 'PropsTableOwnProps',
            type: {
              name: 'array',
              value: [
                {
                  name: 'Column<{}>',
                },
              ],
              raw: 'Column<{}>[]',
            },
          },
          flat: {
            description: 'if true, will flatten the group by',
            parentName: 'PropsTableOwnProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          onSelect: {
            description:
              'callback to be called when the tab changes\nif the function returns false, it can stop chabging to the new tab',
            type: {
              name: 'function',
              raw:
                '(((name: string, component: Component) => boolean | void) & ReactEventHandler<HTMLDivElement>)',
            },
          },
          ref: {
            type: {
              name: 'function',
              raw:
                '((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
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
            description: 'optional section title for the block.',
            parentName: 'BlockContainerOwnProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'Key',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'Key | null',
            },
          },
          sx: {
            parentName: 'Attributes',
            type: {
              name: 'ThemeUIStyleObject',
              raw: 'ThemeUIStyleObject',
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
          className: {
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
                  name: 'Booleanish',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'Booleanish | "inherit"',
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
          id: {
            description:
              'optional id to be used for the block\nif no id is provided, one will be calculated automatically\nfrom the title.',
            parentName: 'BlockContainerOwnProps',
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
          tabIndex: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          translate: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no"',
            },
          },
          radioGroup: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          role: {
            parentName: 'HTMLAttributes',
            type: {
              name: 'AriaRole',
              raw: 'AriaRole',
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
          color: {
            description:
              "The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)",
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
                  value: 'search',
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
              ],
              raw:
                '"text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal"',
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
                  value: 'list',
                },
                {
                  name: 'string',
                  value: 'none',
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
              raw: '"list" | "none" | "inline" | "both"',
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
                  name: 'page',
                },
                {
                  name: 'step',
                },
                {
                  name: 'location',
                },
                {
                  name: 'date',
                },
              ],
              raw:
                'boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date"',
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
                  name: 'grid',
                },
                {
                  name: 'listbox',
                },
                {
                  name: 'tree',
                },
              ],
              raw:
                'boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree"',
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
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ClipboardEventHandler<HTMLDivElement>',
              raw: 'ClipboardEventHandler<HTMLDivElement>',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'CompositionEventHandler<HTMLDivElement>',
              raw: 'CompositionEventHandler<HTMLDivElement>',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FocusEventHandler<HTMLDivElement>',
              raw: 'FocusEventHandler<HTMLDivElement>',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'FormEventHandler<HTMLDivElement>',
              raw: 'FormEventHandler<HTMLDivElement>',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'KeyboardEventHandler<HTMLDivElement>',
              raw: 'KeyboardEventHandler<HTMLDivElement>',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'DragEventHandler<HTMLDivElement>',
              raw: 'DragEventHandler<HTMLDivElement>',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'MouseEventHandler<HTMLDivElement>',
              raw: 'MouseEventHandler<HTMLDivElement>',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'ReactEventHandler<HTMLDivElement>',
              raw: 'ReactEventHandler<HTMLDivElement>',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TouchEventHandler<HTMLDivElement>',
              raw: 'TouchEventHandler<HTMLDivElement>',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'PointerEventHandler<HTMLDivElement>',
              raw: 'PointerEventHandler<HTMLDivElement>',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLDivElement>',
              raw: 'UIEventHandler<HTMLDivElement>',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'UIEventHandler<HTMLDivElement>',
              raw: 'UIEventHandler<HTMLDivElement>',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLDivElement>',
              raw: 'WheelEventHandler<HTMLDivElement>',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'WheelEventHandler<HTMLDivElement>',
              raw: 'WheelEventHandler<HTMLDivElement>',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'AnimationEventHandler<HTMLDivElement>',
              raw: 'AnimationEventHandler<HTMLDivElement>',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLDivElement>',
              raw: 'TransitionEventHandler<HTMLDivElement>',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'TransitionEventHandler<HTMLDivElement>',
              raw: 'TransitionEventHandler<HTMLDivElement>',
            },
          },
          as: {
            parentName: 'BoxOwnProps',
            type: {
              name: 'ElementType<any>',
              raw: 'ElementType<any>',
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
          visibility: {
            description:
              'by default will show both controls and props tables\nuser setting can display only props table or only controls',
            type: {
              name: 'enum',
              value: [
                {
                  name: 'string',
                  value: 'all',
                },
                {
                  name: 'string',
                  value: 'controls',
                },
                {
                  name: 'string',
                  value: 'info',
                },
              ],
              raw: 'ComponentVisibility',
            },
          },
          of: {
            description:
              'Specify the component(s), for which to have information displayed.\nThe default, a value of `"."` will indicate to display information for the current component (associated with the current Story).\nIf an array of components is specified, each component will be displayed in a separate tab.',
            parentName: 'ComponentInputProps',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          name: {
            description:
              'some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls',
            parentName: 'ComponentInputProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          description: {
            description: 'optional markdown description.',
            parentName: 'BlockContainerOwnProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          collapsible: {
            description: 'if false, will nothave a collapsible frame.',
            parentName: 'BlockContainerOwnProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          'data-testid': {
            description: 'testing id',
            parentName: 'BlockContainerOwnProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          plain: {
            description: 'inner container variant or plain',
            parentName: 'BlockContainerOwnProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
        },
      });
    },
  );
});
