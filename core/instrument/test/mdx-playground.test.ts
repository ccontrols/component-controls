import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['mdx', 'playground'], fileName, callback, {
    mdx: { transformMDX: true },
  });

describe('mdx-playground', () => {
  createTest('format-source.mdx', parsed => {
    expect(parsed).toMatchObject({
      transformed:
        '\nimport React from \'react\';\nimport { mdx } from \'@mdx-js/react\';\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nimport { Playground } from \'@component-controls/blocks\';\nimport Button from \'../components/BaseButton\';\nconst layoutProps = {};\nconst MDXLayout = "wrapper";\n\nfunction MDXContent({\n  components,\n  ...props\n}) {\n  return <MDXLayout {...layoutProps} {...props} components={components}>\n\n    <Playground source={`{() => {\n  const [counter, setCounter] = React.useState(0);\n  return <>\n  <Button onClick={() => setCounter(counter => counter + 1)} >\n    Increase\n  </Button>\n  <span style={{\n      marginLeft: 20\n    }}>{counter}</span>\n</>;\n}}`}>\n  {() => {\n        const [counter, setCounter] = React.useState(0);\n        return <>\n        <Button onClick={() => setCounter(counter => counter + 1)}>\n          Increase\n        </Button>\n        <span style={{\n            marginLeft: 20\n          }}>{counter}</span>\n      </>;\n      }}\n    </Playground>\n    </MDXLayout>;\n}\n\n;\nMDXContent.isMDXComponent = true;\n\n        const mdxDefaultExport = MDXContent;\n        Object.assign(mdxDefaultExport, \n        {\n        "MDXPage": MDXContent,"title": "MDX","componentsLookup": \n        {\n        \n        }\n        ,"package": "ffa687b0ead14de43ba6e584412d9415","dateModified": \n        {\n        \n        }\n        ,"date": \n        {\n        \n        }\n        \n        }\n        );\n        export default mdxDefaultExport;\n',
      doc: {
        title: 'MDX',
      },
      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
      },
    });
  });

  createTest('source-prop.mdx', parsed => {
    expect(parsed).toMatchObject({
      transformed:
        '\nimport React from \'react\';\nimport { mdx } from \'@mdx-js/react\';\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nimport { Playground } from \'@component-controls/blocks\';\nimport Button from \'../components/BaseButton\';\nconst layoutProps = {};\nconst MDXLayout = "wrapper";\n\nfunction MDXContent({\n  components,\n  ...props\n}) {\n  return <MDXLayout {...layoutProps} {...props} components={components}>\n\n    <Playground source={`<Button />`}>\n  <Button />\n    </Playground>\n    </MDXLayout>;\n}\n\n;\nMDXContent.isMDXComponent = true;\n\n        const mdxDefaultExport = MDXContent;\n        Object.assign(mdxDefaultExport, \n        {\n        "MDXPage": MDXContent,"title": "MDX","componentsLookup": \n        {\n        \n        }\n        ,"package": "e30e55c1bece516a8279bc5ed610d341","dateModified": \n        {\n        \n        }\n        ,"date": \n        {\n        \n        }\n        \n        }\n        );\n        export default mdxDefaultExport;\n',
      doc: {
        title: 'MDX',
      },
      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
      },
    });
  });
});
