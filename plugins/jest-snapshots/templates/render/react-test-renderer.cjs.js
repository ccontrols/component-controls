              let rendered;
              renderer.act(() => {
{{=it.storeRender}}
              })
              const component = renderer.create(rendered);
              const serialize = component ? component.toJSON : () => undefined;
