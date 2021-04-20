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
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'boolean | "true" | "false" | "inherit"',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'on',
                },
                {
                  name: 'string',
                  value: 'off',
                },
              ],
              raw: '"on" | "off" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'none',
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
                {
                  name: 'string',
                  value: 'search',
                },
              ],
              raw:
                '"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"list" | "none" | "inline" | "both" | undefined',
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
                  value: 'undefined',
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
                  value: 'link',
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
              raw:
                '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined',
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
                  name: 'menu',
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
                {
                  name: 'dialog',
                },
              ],
              raw:
                'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
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
                  value: 'undefined',
                },
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
              raw: '"off" | "assertive" | "polite" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'horizontal',
                },
                {
                  name: 'string',
                  value: 'vertical',
                },
              ],
              raw: '"horizontal" | "vertical" | undefined',
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
                  value: 'undefined',
                },
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
                '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"none" | "ascending" | "descending" | "other" | undefined',
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
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLLIElement>) => void)',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLLIElement>) => void)',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLLIElement>) => void)',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLLIElement>) => void)',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLLIElement>) => void)',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLLIElement>) => void)',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLLIElement>) => void)',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLLIElement>) => void)',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLLIElement>) => void)',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLLIElement>) => void)',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLLIElement>) => void)',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLLIElement>) => void)',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLLIElement>) => void)',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLLIElement>) => void)',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLLIElement>) => void)',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLLIElement>) => void)',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLLIElement>) => void)',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLLIElement>) => void)',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLLIElement>) => void)',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLLIElement>) => void)',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLLIElement>) => void)',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLLIElement>) => void)',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLLIElement>) => void)',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLLIElement>) => void)',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void)',
            },
          },
          onSelect: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLLIElement, Event>) => void)',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLLIElement>) => void)',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLLIElement, UIEvent>) => void)',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLLIElement, UIEvent>) => void)',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLLIElement>) => void)',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLLIElement>) => void)',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLLIElement>) => void)',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLLIElement>) => void)',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLLIElement>) => void)',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLLIElement>) => void)',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLLIElement>) => void)',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLLIElement>) => void)',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLLIElement>) => void)',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLLIElement>) => void)',
            },
          },
          ref: {
            parentName: 'ClassAttributes',
            type: {
              name: 'function',
              raw:
                'string | ((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'string | number | null',
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
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'boolean | "true" | "false" | "inherit"',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'on',
                },
                {
                  name: 'string',
                  value: 'off',
                },
              ],
              raw: '"on" | "off" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'none',
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
                {
                  name: 'string',
                  value: 'search',
                },
              ],
              raw:
                '"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"list" | "none" | "inline" | "both" | undefined',
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
                  value: 'undefined',
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
                  value: 'link',
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
              raw:
                '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined',
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
                  name: 'menu',
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
                {
                  name: 'dialog',
                },
              ],
              raw:
                'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
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
                  value: 'undefined',
                },
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
              raw: '"off" | "assertive" | "polite" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'horizontal',
                },
                {
                  name: 'string',
                  value: 'vertical',
                },
              ],
              raw: '"horizontal" | "vertical" | undefined',
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
                  value: 'undefined',
                },
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
                '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"none" | "ascending" | "descending" | "other" | undefined',
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
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
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
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLDivElement, UIEvent>) => void)',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLDivElement, UIEvent>) => void)',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLDivElement>) => void)',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLDivElement>) => void)',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLDivElement>) => void)',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'string | number | null',
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
              raw: '((node?: HTMLElement) => void) | undefined',
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
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'boolean | "true" | "false" | "inherit"',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'on',
                },
                {
                  name: 'string',
                  value: 'off',
                },
              ],
              raw: '"on" | "off" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'none',
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
                {
                  name: 'string',
                  value: 'search',
                },
              ],
              raw:
                '"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"list" | "none" | "inline" | "both" | undefined',
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
                  value: 'undefined',
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
                  value: 'link',
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
              raw:
                '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined',
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
                  name: 'menu',
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
                {
                  name: 'dialog',
                },
              ],
              raw:
                'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
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
                  value: 'undefined',
                },
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
              raw: '"off" | "assertive" | "polite" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'horizontal',
                },
                {
                  name: 'string',
                  value: 'vertical',
                },
              ],
              raw: '"horizontal" | "vertical" | undefined',
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
                  value: 'undefined',
                },
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
                '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"none" | "ascending" | "descending" | "other" | undefined',
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
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLUListElement>) => void)',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLUListElement>) => void)',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLUListElement>) => void)',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLUListElement>) => void)',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLUListElement>) => void)',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLUListElement>) => void)',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLUListElement>) => void)',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLUListElement>) => void)',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLUListElement>) => void)',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLUListElement>) => void)',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLUListElement>) => void)',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLUListElement>) => void)',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLUListElement>) => void)',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLUListElement>) => void)',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLUListElement>) => void)',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLUListElement>) => void)',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLUListElement>) => void)',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLUListElement>) => void)',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLUListElement>) => void)',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLUListElement>) => void)',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLUListElement>) => void)',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLUListElement>) => void)',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLUListElement>) => void)',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLUListElement>) => void)',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw:
                '((event: MouseEvent<HTMLUListElement, MouseEvent>) => void)',
            },
          },
          onSelect: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLUListElement, Event>) => void)',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLUListElement>) => void)',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLUListElement, UIEvent>) => void)',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLUListElement, UIEvent>) => void)',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLUListElement>) => void)',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLUListElement>) => void)',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLUListElement>) => void)',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLUListElement>) => void)',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLUListElement>) => void)',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLUListElement>) => void)',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLUListElement>) => void)',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLUListElement>) => void)',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLUListElement>) => void)',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLUListElement>) => void)',
            },
          },
          ref: {
            parentName: 'ClassAttributes',
            type: {
              name: 'function',
              raw:
                'string | ((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'string | number | null',
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
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'boolean | "true" | "false" | "inherit"',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'on',
                },
                {
                  name: 'string',
                  value: 'off',
                },
              ],
              raw: '"on" | "off" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'none',
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
                {
                  name: 'string',
                  value: 'search',
                },
              ],
              raw:
                '"none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"list" | "none" | "inline" | "both" | undefined',
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
                  value: 'undefined',
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
                  value: 'link',
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
              raw:
                '"none" | "copy" | "execute" | "link" | "move" | "popup" | undefined',
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
                  name: 'menu',
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
                {
                  name: 'dialog',
                },
              ],
              raw:
                'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
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
                  value: 'undefined',
                },
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
              raw: '"off" | "assertive" | "polite" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'horizontal',
                },
                {
                  name: 'string',
                  value: 'vertical',
                },
              ],
              raw: '"horizontal" | "vertical" | undefined',
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
                  value: 'undefined',
                },
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
                '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"none" | "ascending" | "descending" | "other" | undefined',
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
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onSelect: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLDivElement, UIEvent>) => void)',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLDivElement, UIEvent>) => void)',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLDivElement>) => void)',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLDivElement>) => void)',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLDivElement>) => void)',
            },
          },
          ref: {
            parentName: 'ClassAttributes',
            type: {
              name: 'function',
              raw:
                'string | ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null',
            },
          },
          key: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'string | number | null',
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
                '(((name: string, component: Component) => boolean | void) & ((event: SyntheticEvent<HTMLDivElement, Event>) => void))',
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
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
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
                  name: 'string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'null',
                },
              ],
              raw: 'string | number | null',
            },
          },
          sx: {
            parentName: 'Attributes',
            type: {
              name: 'union',
              value: [
                {
                  name: 'ThemeUICSSObject',
                },
                {
                  name: 'ThemeDerivedStyles',
                },
              ],
              raw: 'ThemeUICSSObject | ThemeDerivedStyles',
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
                  name: 'boolean',
                },
                {
                  name: 'true',
                },
                {
                  name: 'false',
                },
                {
                  name: 'inherit',
                },
              ],
              raw: 'boolean | "true" | "false" | "inherit"',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'yes',
                },
                {
                  name: 'string',
                  value: 'no',
                },
              ],
              raw: '"yes" | "no" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'on',
                },
                {
                  name: 'string',
                  value: 'off',
                },
              ],
              raw: '"on" | "off" | undefined',
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
                  value: 'undefined',
                },
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
                '"text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined',
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
                  value: 'undefined',
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
                  value: 'list',
                },
                {
                  name: 'string',
                  value: 'both',
                },
              ],
              raw: '"none" | "inline" | "list" | "both" | undefined',
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
                  value: 'undefined',
                },
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
              raw:
                '"link" | "none" | "copy" | "execute" | "move" | "popup" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"off" | "assertive" | "polite" | undefined',
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
                  value: 'undefined',
                },
                {
                  name: 'string',
                  value: 'horizontal',
                },
                {
                  name: 'string',
                  value: 'vertical',
                },
              ],
              raw: '"horizontal" | "vertical" | undefined',
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
                  value: 'undefined',
                },
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
                '"text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined',
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
                  value: 'undefined',
                },
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
              raw: '"none" | "ascending" | "descending" | "other" | undefined',
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
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCopyCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onPaste: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onPasteCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: ClipboardEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onCompositionUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: CompositionEvent<HTMLDivElement>) => void)',
            },
          },
          onFocus: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onFocusCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onBlur: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onBlurCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FocusEvent<HTMLDivElement>) => void)',
            },
          },
          onChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onBeforeInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onBeforeInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInput: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInputCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onReset: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onResetCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onSubmit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onSubmitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInvalid: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onInvalidCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: FormEvent<HTMLDivElement>) => void)',
            },
          },
          onLoad: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onError: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onErrorCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onKeyDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyPress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyPressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onKeyUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: KeyboardEvent<HTMLDivElement>) => void)',
            },
          },
          onAbort: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onAbortCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayThrough: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onCanPlayThroughCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onDurationChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onDurationChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEmptied: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEmptiedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEncrypted: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEncryptedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEnded: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onEndedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedData: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedDataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedMetadata: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadedMetadataCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onLoadStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPause: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPauseCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlay: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlayCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlaying: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onPlayingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onProgress: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onProgressCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onRateChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onRateChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeeked: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeekedCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeeking: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSeekingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onStalled: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onStalledCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSuspend: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onSuspendCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTimeUpdate: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTimeUpdateCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onVolumeChange: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onVolumeChangeCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onWaiting: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onWaitingCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onAuxClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onAuxClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onContextMenu: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onContextMenuCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDoubleClick: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDoubleClickCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onDrag: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragExit: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragExitCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDragStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDrop: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onDropCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: DragEvent<HTMLDivElement>) => void)',
            },
          },
          onMouseDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onMouseUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)',
            },
          },
          onSelectCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: SyntheticEvent<HTMLDivElement, Event>) => void)',
            },
          },
          onTouchCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onTouchStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TouchEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerDown: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerDownCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerMove: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerMoveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerUp: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerUpCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerCancel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerCancelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerEnter: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerEnterCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerLeave: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerLeaveCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOver: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOverCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOut: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onPointerOutCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onGotPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onGotPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onLostPointerCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onLostPointerCaptureCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: PointerEvent<HTMLDivElement>) => void)',
            },
          },
          onScroll: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLDivElement, UIEvent>) => void)',
            },
          },
          onScrollCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: UIEvent<HTMLDivElement, UIEvent>) => void)',
            },
          },
          onWheel: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLDivElement>) => void)',
            },
          },
          onWheelCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: WheelEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationStart: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationStartCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationIteration: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onAnimationIterationCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: AnimationEvent<HTMLDivElement>) => void)',
            },
          },
          onTransitionEnd: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLDivElement>) => void)',
            },
          },
          onTransitionEndCapture: {
            parentName: 'DOMAttributes',
            type: {
              name: 'function',
              raw: '((event: TransitionEvent<HTMLDivElement>) => void)',
            },
          },
          as: {
            parentName: 'BoxOwnProps',
            type: {
              name: 'union',
              value: [
                {
                  name: 'symbol',
                },
                {
                  name: 'object',
                },
                {
                  name: 'div',
                },
                {
                  name: 'a',
                },
                {
                  name: 'abbr',
                },
                {
                  name: 'address',
                },
                {
                  name: 'area',
                },
                {
                  name: 'article',
                },
                {
                  name: 'aside',
                },
                {
                  name: 'audio',
                },
                {
                  name: 'b',
                },
                {
                  name: 'base',
                },
                {
                  name: 'bdi',
                },
                {
                  name: 'bdo',
                },
                {
                  name: 'big',
                },
                {
                  name: 'blockquote',
                },
                {
                  name: 'body',
                },
                {
                  name: 'br',
                },
                {
                  name: 'button',
                },
                {
                  name: 'canvas',
                },
                {
                  name: '... 157 more ...',
                },
              ],
              raw:
                '"symbol" | "object" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 157 more ...',
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
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          margin: {
            description: 'Margin on top, left, bottom and right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          mt: {
            description: 'Margin on top',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          marginTop: {
            description: 'Margin on top',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          mr: {
            description: 'Margin on right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          marginRight: {
            description: 'Margin on right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          mb: {
            description: 'Margin on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          marginBottom: {
            description: 'Margin on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          ml: {
            description: 'Margin on left',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          marginLeft: {
            description: 'Margin on left',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          mx: {
            description: 'Margin on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          marginX: {
            description: 'Margin on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          my: {
            description: 'Margin on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          marginY: {
            description: 'Margin on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          padding: {
            description: 'Padding on top, left, bottom and right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          pt: {
            description: 'Padding on top',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          paddingTop: {
            description: 'Padding on top',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          pr: {
            description: 'Padding on right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          paddingRight: {
            description: 'Padding on right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          pb: {
            description: 'Padding on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          paddingBottom: {
            description: 'Padding on bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          pl: {
            description: 'Padding on left',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          paddingLeft: {
            description: 'Padding on left',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          px: {
            description: 'Padding on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          paddingX: {
            description: 'Padding on left and right',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          py: {
            description: 'Padding on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          paddingY: {
            description: 'Padding on top and bottom',
            parentName: 'SpaceProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          bg: {
            description:
              "The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.\nBy default the raw value of the prop is returned.\n\nColor palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.\nArray values are converted into responsive values.\n\n[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)",
            parentName: 'BackgroundColorProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          backgroundColor: {
            parentName: 'BackgroundColorProps',
            type: {
              name: 'function',
              raw:
                'string | number | symbol | (string | number | symbol | null)[] | { [x: string]: string | number | symbol; [x: number]: string | number | symbol | undefined; } | null | undefined',
            },
          },
          opacity: {
            description:
              'The opacity CSS property sets the transparency of an element or the degree to which content\nbehind an element is visible.\n\n[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)',
            parentName: 'OpacityProps',
            type: {
              name: 'function',
              raw:
                '"inherit" | "-moz-initial" | "initial" | "revert" | "unset" | (string & {}) | (number & {}) | ("inherit" | "-moz-initial" | "initial" | "revert" | "unset" | (string & {}) | (number & {}) | null)[] | { ...; } | null',
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
                  value: 'undefined',
                },
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
              raw: '"all" | "controls" | "info" | undefined',
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
