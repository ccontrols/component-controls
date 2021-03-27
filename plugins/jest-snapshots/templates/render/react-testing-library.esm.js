              let rendered;
              act(() => {
                rendered = renderExample({
                  example,
                  doc,
                  config,
                });
              });
              let serialize;
              if (rendered) {
                ({ asFragment: serialize } = render(rendered));
              } else {
                serialize = () => 'error';
              }
