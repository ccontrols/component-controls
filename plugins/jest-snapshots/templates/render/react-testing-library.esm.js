              let rendered;
              act(() => {
{{=it.storeRender}}
              });
              let serialize;
              if (rendered) {
                ({ asFragment: serialize } = render(rendered));
              } else {
                serialize = () => 'error';
              }
