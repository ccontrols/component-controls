              let rendered;
              act(() => {
{{=it.storeRender}}                
              });
              const component = rendered ? renderer.create(rendered) : undefined;
              const serialize = component ? component.toJSON : () => undefined;
