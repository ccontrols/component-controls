              let rendered;
              act(() => {
                rendered = renderExample({
                  example,
                  doc,
                  config,
                });
              });
              const component = rendered ? renderer.create(rendered) : undefined;
              const serialize = component ? component.toJSON : () => undefined;
