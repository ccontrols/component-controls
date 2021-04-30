{{? it.bundle }}
const rendered = renderFn(story, doc);
{{?? true }}
const rendered = renderExample({
  example,
  doc,
  config,
});
{{?}}
it('snapshot', () => {
  const component = mount(rendered);
  expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
});  
{{=it.allytest}}