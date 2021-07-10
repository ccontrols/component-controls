import { CompilerOptions } from 'typescript';
export type OptionValueType = string | boolean | string[];

export interface OptionsData {
  help: string;
  value?: OptionValueType;
  defaultValue?: OptionValueType;
  options?: string[];
  link?: string;
  type?: 'textarea' | 'checkbox' | 'select';
}

type TSOptionsRow = {
  [P in keyof CompilerOptions]: OptionsData;
};

export type TSOptionsType = { [title: string]: TSOptionsRow };

type ParseOptionsRow = {
  [index: string]: OptionsData;
};

export const optionNames = ['parseOptions', 'tsOptions'] as const;
export type OptionsName = typeof optionNames[number];

export type OptionsType = TSOptionsType | ParseOptionsType;

export type ParseOptionsType = { [title: string]: ParseOptionsRow };
export type OptionsTypes = {
  parseOptions: ParseOptionsType;
  tsOptions: TSOptionsType;
};

export const defaultOptions: OptionsTypes = {
  parseOptions: {
    General: {
      internalTypes: {
        help: 'internal types to ignore during parsing.',
        defaultValue: [
          'Function',
          'CallableFunction',
          'NewableFunction',
          'String',
          'Boolean',
          'Booleanish',
          'Number',
          'Array',
          'ConcatArray',
          'ReadonlyArray',
          'TemplateStringsArray',
        ],
      },
      extractNames: {
        type: 'textarea',
        help:
          'List of export names to be extracted during parsing. By default all exports will be extracted.',
      },
      saveParentProps: {
        defaultValue: true,
        help: 'Whether to save the "parent" props',
      },
      collectDiagnostics: {
        defaultValue: false,
        help: 'whether to collect errors/diagnostics',
      },
    },
  },
  tsOptions: {
    General: {
      lang: {
        defaultValue: 'typescript',
        options: ['typescript', 'javascript'],
        help: 'Which language should be used in the editor.',
      },
      target: {
        defaultValue: 'Latest',
        options: [
          'ES3',
          'ES5',
          'ES2015',
          'ES2016',
          'ES2017',
          'ES2018',
          'ES2019',
          'ES2020',
          'ES2021',
          'ESNext',
          'JSON',
          'Latest',
        ],
        help:
          'Set the JavaScript language version for emitted JavaScript and include compatible library declarations.',
      },
      jsx: {
        defaultValue: 'ReactJSX',
        options: [
          'None',
          'Preserve',
          'React',
          'ReactNative',
          'ReactJSX',
          'ReactJSXDev',
        ],
        help: 'Specify what JSX code is generated.',
      },
      module: {
        defaultValue: 'CommonJS',
        options: [
          'None',
          'CommonJS',
          'AMD',
          'UMD',
          'System',
          'ES2015',
          'ES2020',
          'ESNext',
        ],
        help: 'Specify what module code is generated.',
      },
    },
    'Strict Checks': {
      strict: {
        defaultValue: false,
        help: 'Enable all strict type checking options.',
      },
      noImplicitAny: {
        help:
          'Enable error reporting for expressions and declarations with an implied `any` type.',
        defaultValue: true,
      },
      strictNullChecks: {
        defaultValue: true,
        help: 'When type checking, take into account `null` and `undefined`.',
      },
      strictFunctionTypes: {
        defaultValue: true,
        help:
          'When assigning functions, check to ensure parameters and the return values are subtype-compatible.',
      },
      strictBindCallApply: {
        defaultValue: true,
        help:
          'Check that the arguments for `bind`, `call`, and `apply` methods match the original function.',
      },
      strictPropertyInitialization: {
        defaultValue: true,
        help:
          'Check for class properties that are declared but not set in the constructor.',
      },
      noImplicitThis: {
        defaultValue: true,
        help: 'Enable error reporting when `this` is given the type `any`.',
      },
      alwaysStrict: {
        defaultValue: true,
        help: 'Ensure `use strict` is always emitted.',
      },
    },
    'Linter Checks': {
      noUnusedLocals: {
        defaultValue: false,
        help: "Enable error reporting when a local variables aren't read.",
      },
      noUnusedParameters: {
        defaultValue: false,
        help: "Raise an error when a function parameter isn't read.",
      },
      noImplicitReturns: {
        defaultValue: true,
        help:
          'Enable error reporting for codepaths that do not explicitly return in a function.',
      },
      noFallthroughCasesInSwitch: {
        defaultValue: false,
        help:
          'Enable error reporting for fallthrough cases in switch statements.',
      },
      noUncheckedIndexedAccess: {
        defaultValue: false,
        help: 'Add `undefined` to a type when accessed using an index.',
      },
      noImplicitOverride: {
        defaultValue: false,
        help:
          'Ensure overriding members in derived classes are marked with an override modifier.',
      },
      noPropertyAccessFromIndexSignature: {
        defaultValue: false,
        help:
          'Enforces using indexed accessors for keys declared using an indexed type.',
      },
    },
    'Project Options': {
      declaration: {
        defaultValue: true,
        help:
          'Generate .d.ts files from TypeScript and JavaScript files in your project.',
      },
      removeComments: {
        defaultValue: false,
        help: 'Disable emitting comments.',
      },
      importHelpers: {
        defaultValue: false,
        help:
          'Allow importing helper functions from tslib once per project, instead of including them per-file.',
      },
      downlevelIteration: {
        defaultValue: false,
        help:
          'Emit more compliant, but verbose and less performant JavaScript for iteration.',
      },
      isolatedModules: {
        defaultValue: false,
        help:
          'Ensure that each file can be safely transpiled without relying on other imports.',
      },
    },
    'Module Resolution': {
      allowSyntheticDefaultImports: {
        defaultValue: false,
        help:
          "Allow `import x from y` when a module doesn't have a default export.",
      },
      esModuleInterop: {
        defaultValue: true,
        help:
          'Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility.',
      },
      allowUmdGlobalAccess: {
        defaultValue: false,
        help: 'Allow accessing UMD globals from modules.',
      },
    },
    'Source Maps': {
      inlineSourceMap: {
        defaultValue: false,
        help: 'Include sourcemap files inside the emitted JavaScript.',
      },
      inlineSources: {
        defaultValue: false,
        help:
          'Include source code in the sourcemaps inside the emitted JavaScript.',
      },
    },
    Experimental: {
      experimentalDecorators: {
        defaultValue: true,
        help: 'Enable experimental support for TC39 stage 2 draft decorators.',
      },
      emitDecoratorMetadata: {
        defaultValue: true,
        help:
          'Emit design-type metadata for decorated declarations in source files.',
      },
    },
    Advanced: {
      noErrorTruncation: {
        defaultValue: false,
        help: 'Disable truncating types in error messages.',
      },
      noLib: {
        defaultValue: false,
        help:
          'Disable including any library files, including the default lib.d.ts.',
      },
      stripInternal: {
        defaultValue: false,
        help:
          'Disable emitting declarations that have `@internal` in their JSDoc comments.',
      },
      disableSourceOfProjectReferenceRedirect: {
        defaultValue: false,
        help:
          'Disable preferring source files instead of declaration files when referencing composite projects.',
      },
      noImplicitUseStrict: {
        defaultValue: false,
        help:
          'Disable adding `use strict` directives in emitted JavaScript files.',
      },
      noEmitHelpers: {
        defaultValue: false,
        help:
          'Disable generating custom helper functions like `__extends` in compiled output.',
      },
      preserveConstEnums: {
        defaultValue: false,
        help: 'Disable erasing `const enum` declarations in generated code.',
      },
      allowUnusedLabels: {
        defaultValue: false,
        help: 'Disable error reporting for unused labels.',
      },
      allowUnreachableCode: {
        defaultValue: false,
        help: 'Disable error reporting for unreachable code.',
      },
      suppressExcessPropertyErrors: {
        defaultValue: false,
        help:
          'Disable reporting of excess property errors during the creation of object literals.',
      },
      suppressImplicitAnyIndexErrors: {
        defaultValue: false,
        help:
          'Suppress `noImplicitAny` errors when indexing objects that lack index signatures.',
      },
      noStrictGenericChecks: {
        defaultValue: false,
        help:
          'Disable strict checking of generic signatures in function types.',
      },
      useDefineForClassFields: {
        defaultValue: false,
        help: 'Emit ECMAScript-standard-compliant class fields.',
      },
      keyofStringsOnly: {
        defaultValue: false,
        help:
          'Make keyof only return strings instead of string, numbers or symbols. Legacy option.',
      },
    },
  },
};
