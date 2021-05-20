import * as path from 'path';
import { compile } from '../src/index';

expect.addSnapshotSerializer({
  test: val => typeof val === 'object' && val instanceof String,
  print: val => {
    return `"${val.toString().trim()}"`;
  },
});

describe('test draft', () => {
  it('compile', async () => {
    const { store } = await compile({
      logOptions: {
        logLevel: 'none',
      },
      presets: ['react', 'react-docgen-typescript'],
      //configPath: path.resolve(__dirname, 'fixtures', 'draft'),
      configPath: path.resolve(
        __dirname,
        '../../../examples',
        'starter',
        '.config',
      ),
    });
    const store1 = store.stores.find(
      store => store.doc.title === 'Library/Components/Button',
    );
    expect(store1).toMatchObject({
      stories: {
        overview: {
          loc: {
            start: {
              column: 46,
              line: 12,
            },
            end: {
              column: 1,
              line: 15,
            },
          },
          name: 'overview',
          id: 'overview',
          arguments: [
            {
              value: 'props',
              name: 'props',
              loc: {
                start: {
                  line: 0,
                  column: 0,
                },
                end: {
                  line: 0,
                  column: 5,
                },
              },
              usage: [
                {
                  loc: {
                    start: {
                      line: 2,
                      column: 21,
                    },
                    end: {
                      line: 2,
                      column: 26,
                    },
                  },
                },
              ],
            },
          ],
          source:
            'props => {\n  const store = useStore();\n  return <Button {...props}>{store.config.title}</Button>;\n}',
        },
      },
      doc: {
        title: 'Library/Components/Button',
        order: 1,
        component: 'Button',
        componentsLookup: {
          Button: '32c6d3f71db0fda6722d189b0f5ec521',
        },
        package: 'd72114b7ae981de6861b0078b15f453e',
      },
      hash: undefined,
    });

    const store2 = store.stores.find(store => store.doc.title === 'First blog');
    expect(store2).toMatchObject({
      stories: {},
      doc: {
        isMDXComponent: true,
        type: 'blog',
        title: 'First blog',
        componentsLookup: {},
      },
      hash: undefined,
    });
    const store3 = store.stores.find(store => store.doc.title === 'First Page');
    expect(store3).toMatchObject({
      stories: {},
      doc: {
        isMDXComponent: true,
        title: 'First Page',
      },
    });

    const store4 = store.stores.find(
      store => store.doc.title === 'Library/Components/MDX',
    );
    expect(store4).toMatchObject({
      stories: {
        overview: {
          name: 'overview',
          component: 'Spinner',
          id: 'overview',
          loc: {
            start: {
              column: 9,
              line: 13,
            },
            end: {
              column: 65,
              line: 13,
            },
          },
          arguments: [
            {
              value: [
                {
                  value: 'color',
                  name: 'color',
                  loc: {
                    start: {
                      line: 0,
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 8,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          column: 31,
                        },
                        end: {
                          line: 0,
                          column: 36,
                        },
                      },
                    },
                  ],
                },
              ],
              name: undefined,
              loc: {
                start: {
                  line: 0,
                  column: 1,
                },
                end: {
                  line: 0,
                  column: 10,
                },
              },
            },
          ],
          source: '({ color }) => <Spinner color={color}>click me</Spinner>',
        },
      },
      doc: {
        isMDXComponent: true,
        order: 0,
        title: 'Library/Components/MDX',
        componentsLookup: {
          Spinner: '65aa3f665b0cda214f97cbe81c526f01',
        },
        package: 'ce8a8a0a3e4b3ec426dcfbb2bd237ae3',
      },
    });

    expect(store.components).toMatchObject({
      '65aa3f665b0cda214f97cbe81c526f01': {
        name: 'Spinner',
        from: './Spinner',
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
          ],
          polished: [
            {
              name: 'lighten',
              importedName: 'lighten',
            },
          ],
          'prop-types': [
            {
              name: 'PropTypes',
              importedName: 'default',
            },
          ],
        },
        localDependencies: {},
        importedName: 'Spinner',
        jsx: [
          {
            children: [],
            name: 'button',
            attributes: ['type', 'disabled', 'onClick', 'style'],
          },
        ],
        fileName: 'Spinner.js',
        source:
          "import React from 'react';\nimport { lighten } from 'polished';\nimport PropTypes from 'prop-types';\n\n/**\n * Spinner with react PropTypes\n */\nexport const Spinner = ({\n  disabled,\n  children,\n  onClick,\n  style,\n  backgroundColor,\n  color,\n  type,\n  padding,\n}) => (\n  <button\n    type={type}\n    disabled={disabled}\n    onClick={onClick}\n    style={{\n      ...style,\n      backgroundColor,\n      color: lighten(disabled ? 0.4 : 0, color),\n      padding,\n    }}\n  >\n    {children}\n  </button>\n);\n\nSpinner.defaultProps = {\n  disabled: false,\n  children: 'default',\n  onClick: () => {},\n  style: {},\n  backgroundColor: '#fefefe',\n  color: 'black',\n  type: 'button',\n  padding: 5,\n};\n\nSpinner.propTypes = {\n  /**\n   * Boolean indicating whether the button should render as disabled\n   */\n  disabled: PropTypes.bool,\n\n  /**\n   * button label\n   */\n  children: PropTypes.string,\n\n  /**\n   * onClick handler\n   */\n  onClick: PropTypes.func,\n\n  /**\n   * Custom styles\n   */\n  style: PropTypes.shape({}),\n\n  /**\n   * Background color\n   */\n  backgroundColor: PropTypes.string,\n\n  /**\n   * Text color, default black\n   */\n  color: PropTypes.string,\n\n  /**\n   * Button type\n   */\n  type: PropTypes.oneOf(['button', 'reset', 'submit']),\n\n  /**\n   * Numeric  field type\n   */\n  padding: PropTypes.number,\n};\n",
        loc: {
          start: {
            line: 8,
            column: 23,
          },
          end: {
            line: 31,
            column: 1,
          },
        },
        package: '65aa3f665b0cda214f97cbe81c526f01',
        info: {
          description: 'Spinner with react PropTypes',
          displayName: 'Spinner',
          methods: [],
          props: {
            disabled: {
              description:
                'Boolean indicating whether the button should render as disabled',
              defaultValue: 'false',
              type: {
                name: 'boolean',
              },
            },
            children: {
              description: 'button label',
              defaultValue: 'default',
              type: {
                name: 'string',
                required: false,
              },
            },
            onClick: {
              description: 'onClick handler',
              defaultValue: '() => {}',
              type: {
                name: 'function',
                required: false,
              },
            },
            style: {
              description: 'Custom styles',
              defaultValue: '{}',
              type: {
                name: 'object',
                value: [],
              },
            },
            backgroundColor: {
              description: 'Background color',
              defaultValue: '#fefefe',
              type: {
                name: 'string',
                required: false,
              },
            },
            color: {
              description: 'Text color, default black',
              defaultValue: 'black',
              type: {
                name: 'string',
                required: false,
              },
            },
            type: {
              description: 'Button type',
              defaultValue: 'button',
              type: {
                name: 'enum',
                value: [
                  {
                    name: 'string',
                    value: 'button',
                  },
                  {
                    name: 'string',
                    value: 'reset',
                  },
                  {
                    name: 'string',
                    value: 'submit',
                  },
                ],
              },
            },
            padding: {
              description: 'Numeric  field type',
              defaultValue: '5',
              type: {
                name: 'number',
                required: false,
              },
            },
          },
        },
        fileInfo: {
          sloc: {
            total: 84,
            source: 47,
            comment: 27,
            single: 0,
            block: 27,
            mixed: 0,
            empty: 10,
            todo: 0,
            blockEmpty: 0,
          },
        },
      },
      '32c6d3f71db0fda6722d189b0f5ec521': {
        name: 'Button',
        from: './Button',
        externalDependencies: {
          react: [
            {
              name: 'React',
              importedName: 'default',
            },
            {
              name: 'FC',
              importedName: 'FC',
            },
          ],
        },
        localDependencies: {},
        importedName: 'Button',
        jsx: [
          {
            children: [],
            name: 'button',
            attributes: ['type', 'disabled', 'onClick', 'style'],
          },
        ],
        fileName: 'Button.tsx',
        source:
          "import React, { FC } from 'react';\n\nexport interface ButtonProps {\n  /**\n   *  Boolean indicating whether the button should render as disabled\n   */\n  disabled?: boolean;\n\n  /**\n   * Background color\n   */\n  backgroundColor?: string;\n\n  /**\n   * Text color, default black\n   */\n  color?: string;\n\n  /**\n   * Numeric  field type\n   */\n  padding?: number;\n\n  /**\n   * Button type\n   */\n  type?: 'button' | 'reset' | 'submit';\n\n  /**\n   * Custom styles\n   */\n  style?: object;\n  /**\n   * button label\n   */\n  children?: string;\n\n  /**\n   * onClick handler\n   */\n  onClick?: () => void;\n}\n\n/**\n * Button with react Typescript properties\n */\nexport const Button: FC<ButtonProps> = ({\n  disabled,\n  children,\n  onClick,\n  style,\n  backgroundColor,\n  color,\n  type,\n  padding,\n}) => (\n  <button\n    type={type}\n    disabled={disabled}\n    onClick={onClick}\n    style={{\n      ...style,\n      backgroundColor,\n      color,\n      padding,\n    }}\n  >\n    {children}\n  </button>\n);\n\nButton.defaultProps = {\n  disabled: false,\n  children: 'default',\n  onClick: () => {},\n  style: {},\n  backgroundColor: '#fefefe',\n  color: 'black',\n  type: 'button',\n  padding: 5,\n};\n",
        loc: {
          start: {
            line: 47,
            column: 39,
          },
          end: {
            line: 70,
            column: 1,
          },
        },
        package: '32c6d3f71db0fda6722d189b0f5ec521',
        info: {
          tags: {},
          description: 'Button with react Typescript properties',
          displayName: 'Button',
          methods: [],
          props: {
            disabled: {
              description:
                'Boolean indicating whether the button should render as disabled',
              parentName: 'ButtonProps',
              defaultValue: false,
              type: {
                name: 'boolean',
                raw: 'boolean',
              },
            },
            backgroundColor: {
              description: 'Background color',
              parentName: 'ButtonProps',
              defaultValue: '#fefefe',
              type: {
                name: 'string',
                raw: 'string',
              },
            },
            color: {
              description: 'Text color, default black',
              parentName: 'ButtonProps',
              defaultValue: 'black',
              type: {
                name: 'string',
                raw: 'string',
              },
            },
            padding: {
              description: 'Numeric  field type',
              parentName: 'ButtonProps',
              defaultValue: 5,
              type: {
                name: 'number',
                raw: 'number',
              },
            },
            type: {
              description: 'Button type',
              parentName: 'ButtonProps',
              defaultValue: 'button',
              type: {
                name: 'enum',
                value: [
                  {
                    name: 'string',
                    value: 'undefined',
                  },
                  {
                    name: 'string',
                    value: 'button',
                  },
                  {
                    name: 'string',
                    value: 'reset',
                  },
                  {
                    name: 'string',
                    value: 'submit',
                  },
                ],
                raw: '"button" | "reset" | "submit" | undefined',
              },
            },
            style: {
              description: 'Custom styles',
              parentName: 'ButtonProps',
              defaultValue: '{}',
              type: {
                name: 'object',
                raw: 'object',
              },
            },
            children: {
              description: 'button label',
              parentName: 'ButtonProps',
              defaultValue: 'default',
              type: {
                name: 'function',
                raw:
                  '(string & (boolean | ReactChild | ReactFragment | ReactPortal | null))',
              },
            },
            onClick: {
              description: 'onClick handler',
              parentName: 'ButtonProps',
              defaultValue: '() => {}',
              type: {
                name: 'function',
                raw: '(() => void)',
              },
            },
          },
        },
        fileInfo: {
          sloc: {
            total: 81,
            source: 45,
            comment: 27,
            single: 0,
            block: 27,
            mixed: 0,
            empty: 9,
            todo: 0,
            blockEmpty: 0,
          },
        },
      },
      '98b2111b08fbab8e38c938acaf3e129a': {
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
        source:
          "import * as React from 'react'\nimport { StyledComponent } from '@emotion/styled'\nimport { Interpolation } from '@emotion/react'\nimport { SpaceProps, ColorProps, MarginProps } from 'styled-system'\nimport { ResponsiveStyleValue, ThemeUIStyleObject } from '@theme-ui/css'\n\ntype Omit<T, K> = Pick<T, Exclude<keyof T, K>>\n\ntype Assign<T, U> = {\n  [P in keyof (T & U)]: P extends keyof T\n    ? T[P]\n    : P extends keyof U\n    ? U[P]\n    : never\n}\n\ntype ForwardRef<T, P> = React.ForwardRefExoticComponent<\n  React.PropsWithoutRef<P> & React.RefAttributes<T>\n>\n\nexport interface BoxOwnProps extends SpaceProps, ColorProps {\n  as?: React.ElementType\n  variant?: string\n  css?: Interpolation<any>\n  sx?: ThemeUIStyleObject\n}\nexport interface BoxProps\n  extends Assign<React.ComponentPropsWithRef<'div'>, BoxOwnProps> {}\n/**\n * Use the Box component as a layout primitive to add margin, padding, and colors to content.\n * @see https://theme-ui.com/components/box\n */\nexport const Box: StyledComponent<BoxOwnProps, BoxProps>\n\nexport type FlexOwnProps = BoxOwnProps\nexport type FlexProps = BoxProps\n/**\n * Use the Flex component to create flexbox layouts.\n * @see https://theme-ui.com/components/flex\n */\nexport const Flex: StyledComponent<FlexOwnProps, FlexProps>\n\nexport interface GridProps extends BoxProps {\n  /**\n   * Minimum width of child elements\n   */\n  width?: ResponsiveStyleValue<string | number>\n  /**\n   * \tNumber of columns to use for the layout (cannot be used in conjunction with the width prop)\n   */\n  columns?: ResponsiveStyleValue<string | number>\n  /**\n   * Space between child elements\n   */\n  gap?: ResponsiveStyleValue<string | number>\n}\n/**\n * CSS grid layout component to arrange direct child elements in a tiled grid layout.\n * @see https://theme-ui.com/components/grid\n */\nexport const Grid: ForwardRef<HTMLDivElement, GridProps>\n\nexport interface ButtonProps\n  extends Assign<React.ComponentPropsWithRef<'button'>, BoxOwnProps> {}\n/**\n * Primitive button component with variants\n * @see https://theme-ui.com/components/button\n */\nexport const Button: ForwardRef<HTMLButtonElement, ButtonProps>\n\nexport interface LinkProps\n  extends Assign<React.ComponentPropsWithRef<'a'>, BoxOwnProps> {}\n/**\n * Link variants can be defined in the `theme.links` object.\n * By default the Link component will use styles defined in `theme.styles.a`.\n * @see https://theme-ui.com/components/link\n */\nexport const Link: ForwardRef<HTMLAnchorElement, LinkProps>\n\nexport type TextProps = BoxProps\n/**\n * Primitive typographic component.\n *\n * Text style variants can be defined in the theme.text object.\n * @see https://theme-ui.com/components/text\n */\nexport const Text: ForwardRef<HTMLDivElement, BoxProps>\n\nexport interface ParagraphProps\n  extends Assign<React.ComponentPropsWithRef<'p'>, BoxOwnProps> {}\n/**\n * Primitive typographic component.\n *\n * Text style variants can be defined in the theme.text object.\n * The Paragraph component uses theme.text.default as its default variant style.\n * @see https://theme-ui.com/components/paragraph\n */\nexport const Paragraph: ForwardRef<HTMLParagraphElement, ParagraphProps>\n\nexport interface HeadingProps\n  extends Assign<React.ComponentPropsWithRef<'h2'>, BoxOwnProps> {}\n/**\n * Primitive heading component, defaults to <h2>.\n *\n * Text style variants can be defined in the theme.text object.\n * The Heading component uses theme.text.heading as its default variant style.\n * @see https://theme-ui.com/components/heading\n */\nexport const Heading: ForwardRef<HTMLHeadingElement, HeadingProps>\n\nexport interface ImageProps\n  extends Assign<React.ComponentPropsWithRef<'img'>, BoxOwnProps> {}\n/**\n * Image style variants can be defined in the theme.images object.\n * @see https://theme-ui.com/components/image/\n */\nexport const Image: ForwardRef<HTMLImageElement, ImageProps>\n\nexport type CardProps = BoxProps\n/**\n * Card style variants can be defined in the `theme.cards` object.\n * By default the Card component uses the `theme.cards.primary` variant.\n * @see https://theme-ui.com/components/card\n */\nexport const Card: ForwardRef<HTMLDivElement, CardProps>\n\nexport interface LabelProps\n  extends Assign<React.ComponentPropsWithRef<'label'>, BoxOwnProps> {}\n/**\n * Label variants can be defined in `theme.forms`\n * and the component uses the `theme.forms.label` variant by default.\n * @see https://theme-ui.com/components/label/\n */\nexport const Label: ForwardRef<HTMLLabelElement, LabelProps>\n\nexport interface InputProps\n  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}\n/**\n * Input variants can be defined in `theme.forms`\n * and the component uses the `theme.forms.input` variant by default.\n * @see https://theme-ui.com/components/input/\n */\nexport const Input: ForwardRef<HTMLInputElement, InputProps>\n\nexport interface SelectProps\n  extends Assign<React.ComponentPropsWithRef<'select'>, BoxOwnProps> {\n  arrow?: React.ReactElement\n}\n/**\n * Select variants can be defined in `theme.forms`\n * and the component uses the `theme.forms.select` variant by default.\n * @see https://theme-ui.com/components/select/\n */\nexport const Select: ForwardRef<HTMLSelectElement, SelectProps>\n\nexport interface TextareaProps\n  extends Assign<React.ComponentPropsWithRef<'textarea'>, BoxOwnProps> {}\n/**\n * Form textarea component\n *\n * Textarea variants can be defined in `theme.forms`\n * and the component uses the `theme.forms.textarea` variant by default.\n * @see https://theme-ui.com/components/textarea/\n */\nexport const Textarea: ForwardRef<HTMLTextAreaElement, TextareaProps>\n\nexport interface RadioProps\n  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}\n/**\n * Form radio input component\n *\n * Radio variants can be defined in `theme.forms` and the\n * component uses the `theme.forms.radio variant` by default.\n * @see https://theme-ui.com/components/radio/\n */\nexport const Radio: ForwardRef<HTMLInputElement, RadioProps>\n\nexport interface CheckboxProps\n  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}\n/**\n * Form checkbox input component\n *\n * Checkbox variants can be defined in `theme.forms` and the\n * component uses the `theme.forms.checkbox` variant by default.\n * @see https://theme-ui.com/components/checkbox/\n */\nexport const Checkbox: ForwardRef<HTMLInputElement, CheckboxProps>\n\nexport interface SliderProps\n  extends Assign<React.ComponentPropsWithRef<'input'>, BoxOwnProps> {}\n/**\n * Range input element\n *\n * Slider variants can be defined in the `theme.forms` object.\n * The Slider component uses `theme.forms.slider` as its default variant style.\n * @see https://theme-ui.com/components/slider/\n */\nexport const Slider: ForwardRef<HTMLInputElement, SliderProps>\n\nexport interface FieldOwnProps extends MarginProps {\n  /**\n   * Text for Label component\n   */\n  label: string\n  /**\n   * Used for the for, id, and name attributes\n   */\n  name: string\n}\nexport type FieldProps<T extends React.ElementType> = FieldOwnProps &\n  Omit<React.ComponentPropsWithRef<T>, 'as' | keyof FieldOwnProps> & {\n    /**\n     * form control to render, default Input\n     */\n    as?: T\n  }\n\n// `T` is far from unnecessary. We derive component props from it.\n// tslint:disable-next-line no-unnecessary-generics\nexport function Field<\n  T extends React.ElementType = React.ComponentType<InputProps>\n>(props: FieldProps<T>): JSX.Element\n\nexport interface ProgressProps\n  extends Assign<React.ComponentPropsWithRef<'progress'>, BoxOwnProps> {}\n/**\n * @see https://theme-ui.com/components/progress/\n */\nexport const Progress: ForwardRef<HTMLProgressElement, ProgressProps>\n\nexport interface DonutProps\n  extends Assign<\n    Omit<\n      React.ComponentPropsWithRef<'svg'>,\n      'opacity' | 'color' | 'css' | 'sx' | 'max' | 'min'\n    >,\n    BoxOwnProps\n  > {\n  value: number\n  min?: number\n  max?: number\n  title?: string\n  size?: string | number\n}\n/**\n * Single value SVG donut chart\n * @see https://theme-ui.com/components/donut/\n */\nexport const Donut: ForwardRef<SVGSVGElement, DonutProps>\n\nexport interface SpinnerProps\n  extends Assign<\n    Omit<\n      React.ComponentPropsWithRef<'svg'>,\n      'opacity' | 'color' | 'css' | 'sx'\n    >,\n    BoxOwnProps\n  > {\n  size?: number | string\n}\nexport const Spinner: ForwardRef<SVGSVGElement, SpinnerProps>\n\nexport interface AvatarProps extends ImageProps {\n  size?: number | string\n}\nexport const Avatar: ForwardRef<HTMLImageElement, AvatarProps>\n\nexport type BadgeProps = BoxProps\nexport const Badge: ForwardRef<HTMLDivElement, BadgeProps>\n\nexport interface CloseProps extends Omit<IconButtonProps, 'children'> {}\n/**\n * Button with close (×) icon.\n *\n * The Close component renders as a <button> element by default.\n * Pass any button attributes as props to the component.\n *\n * Close component variants can be defined in the theme.buttons object.\n * The Close component uses theme.buttons.close as its default variant style.\n */\nexport const Close: ForwardRef<HTMLButtonElement, CloseProps>\n\nexport type AlertProps = BoxProps\n/**\n * Component for displaying messages, notifications, or other application state.\n *\n * Alert variants can be defined in `theme.alerts`.\n * The Alert component uses `theme.alerts.primary` as its default variant.\n */\nexport const Alert: ForwardRef<HTMLDivElement, AlertProps>\n\nexport type DividerProps = BoxProps\n/**\n * The Divider component reuses styles from `theme.styles.hr` as its default variant.\n */\nexport const Divider: ForwardRef<HTMLDivElement, DividerProps>\n\nexport interface EmbedProps\n  extends Assign<React.ComponentPropsWithRef<'iframe'>, BoxOwnProps> {\n  variant?: string\n  ratio?: number\n  src?: React.IframeHTMLAttributes<any>['src']\n  frameBorder?: React.IframeHTMLAttributes<any>['frameBorder']\n  allowFullScreen?: React.IframeHTMLAttributes<any>['allowFullScreen']\n  allow?: React.IframeHTMLAttributes<any>['allow']\n}\n/**\n * Responsive iframe for video embeds.\n *\n * Embed variants can be defined anywhere in the theme object.\n *\n * @see https://theme-ui.com/components/embed\n */\nexport const Embed: ForwardRef<HTMLIFrameElement, EmbedProps>\n\nexport interface AspectRatioProps extends BoxProps {\n  ratio?: number\n}\n/**\n * Component for maintaining a fluid-width aspect ratio\n * @see https://theme-ui.com/components/aspect-ratio\n */\nexport const AspectRatio: ForwardRef<HTMLDivElement, AspectRatioProps>\n\nexport interface AspectImageProps extends ImageProps {\n  ratio?: number\n}\n/**\n * Image component constrained by as aspect ratio.\n * @see https://theme-ui.com/components/aspect-image\n */\nexport const AspectImage: ForwardRef<HTMLImageElement, AspectImageProps>\n\nexport type ContainerProps = BoxProps\n/**\n * Centered, max-width layout component\n *\n * Container variants can be defined in the `theme.layout` object.\n * The Container component uses `theme.layout.container` as its default variant style.\n * @see https://theme-ui.com/components/container\n */\nexport const Container: ForwardRef<HTMLDivElement, ContainerProps>\n\nexport type NavLinkProps = LinkProps\n/**\n * Link component for use in navigation\n *\n * NavLink variants can be defined in the `theme.links` object.\n * By default the NavLink component will use styles defined in `theme.links.nav`.\n * @see https://theme-ui.com/components/nav-link\n */\nexport const NavLink: ForwardRef<HTMLAnchorElement, NavLinkProps>\n\nexport type MessageProps = BoxProps\n/**\n * Styled Box component for callouts and inline messages\n *\n * Message variants can be defined in the theme.messages object.\n * @see https://theme-ui.com/components/message\n */\nexport const Message: ForwardRef<HTMLDivElement, MessageProps>\n\nexport interface IconButtonProps\n  extends Assign<React.ComponentPropsWithRef<'button'>, BoxOwnProps> {}\n/**\n * Transparent button for SVG icons\n *\n * IconButton variants can be defined in the `theme.buttons` object.\n * By default the IconButton component will use styles defined in `theme.buttons.icon`.\n *\n * @see https://theme-ui.com/components/icon-button\n */\nexport const IconButton: ForwardRef<HTMLButtonElement, IconButtonProps>\n\nexport type MenuButtonProps = IconButtonProps\n/**\n * MenuButton variants can be defined in the `theme.buttons` object.\n * By default the MenuButton component will use styles defined in `theme.buttons.menu`.\n *\n * @see https://theme-ui.com/components/menu-button\n */\nexport const MenuButton: ForwardRef<HTMLButtonElement, MenuButtonProps>\n\n/**\n * Form switch component\n *\n * Switch variants can be defined in `theme.forms`\n * and the component uses the `theme.forms.switch` variant by default.\n */\nexport const Switch: ForwardRef<HTMLInputElement, SwitchProps>\n\nexport interface SwitchProps\n  extends Assign<React.ComponentProps<'input'>, BoxOwnProps> {\n  label?: string\n}\n",
        package: '98b2111b08fbab8e38c938acaf3e129a',
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
          },
        },
        fileInfo: {
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
      },
    });
    expect(store.buildConfig).toMatchObject({
      siteRoot: '/root/',
      siteMap: {
        pages: {
          home: {
            priority: 1,
          },
          index: {
            priority: 0.8,
          },
          doc: {
            priority: 0.5,
          },
        },
      },
      categories: ['author', 'tags'],
      ignore: [
        'readme.md',
        'changelog.md',
        'code_of_conduct.md',
        'contributing.md',
        'license.md',
      ],
      pages: {
        story: {
          basePath: 'docs/',
          sideNav: {
            storyPaths: true,
            collapseSingle: true,
          },
          tabs: {
            page: '@component-controls/pages/ClassicPage',
            test: '@component-controls/pages/TestingPage',
            design: '@component-controls/pages/DesignPage',
          },
        },
        blog: {
          basePath: 'blogs/',
        },
        author: {
          basePath: 'authors/',
        },
        page: {
          basePath: 'pages/',
        },
        tags: {
          basePath: 'tags/',
        },
      },
      search: {
        searchingModule: '@component-controls/search-fusejs',
      },
      bundleName: 'component-controls.js',
      cssFileName: undefined,
      stories: ['../src/docs/*.mdx', '../src/**/*.docs.@(tsx|jsx)'],
      instrument: {
        components: {
          package: {
            browseLink: true,
          },
        },
      },
    });
  }, 50000);
});
