let rendered;
{{=it.storeRender}}
const component = mount(rendered);
expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
