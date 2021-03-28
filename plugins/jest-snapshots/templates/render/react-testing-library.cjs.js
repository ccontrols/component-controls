              let rendered;
              act(() => {
{{=it.storeRender}}
              });
              const { asFragment: serialize } = render(rendered);
