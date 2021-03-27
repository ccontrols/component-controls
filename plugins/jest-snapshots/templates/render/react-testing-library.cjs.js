              let rendered;
              act(() => {
                rendered = renderExample({
                  example,
                  doc,
                  config,
                });
              });
              const { asFragment: serialize } = render(rendered);
