{{? it.bundle }}
const rendered = renderFn({ story, doc{{? it.data && it.data[story.id] }}, values{{?}} });
{{?? true }}
const rendered = renderExample({
  example,
  doc,
  config,
  {{? it.data && it.data[story.id] }}values,{{?}}
});
{{?}}
it('snapshot', () => {
  const component = mount(rendered);
  expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
});  
{{=it.allytest}}