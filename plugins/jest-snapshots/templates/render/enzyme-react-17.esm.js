              let rendered;
{{=it.storeRender}}
              const component = mount(rendered);
              const serialize = () => toJson(component, { mode: 'deep' });
