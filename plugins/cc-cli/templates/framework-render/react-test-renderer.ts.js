let rendered: ReturnType<typeof renderExample> = undefined as any;
act(() => {
  {{? it.bundle }}
  rendered = doc.renderFn({ story, doc{{? it.data && it.data[story.id] }}, values{{?}} });
  {{?? true }}
  rendered = renderExample({
    example,
    doc,
    config,
    {{? it.data && it.data[story.id] }}values,{{?}}
  });
  {{?}}
})
if (!rendered) {
  renderErr();
  return;
}
it('snapshot', () => {
  const component = renderer.create(rendered);
  if (!component) {
    componentErr();
    return;
  }
  expect(component.toJSON()).toMatchSnapshot();
});
{{=it.allytest}}
