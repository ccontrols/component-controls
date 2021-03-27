              const rendered = renderExample({
                example,
                doc,
                config,
              });
              const component = mount(rendered);
              const serialize = () => toJson(component, { mode: 'deep' });
