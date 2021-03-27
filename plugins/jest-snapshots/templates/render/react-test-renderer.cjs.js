              let rendered;
              renderer.act(() => {
                rendered = renderExample({
                  example,
                  doc,
                  config,
                });
              });
              const component = renderer.create(rendered);
              const serialize = component ? component.toJSON : () => undefined;
