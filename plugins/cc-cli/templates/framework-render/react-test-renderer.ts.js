let rendered: ReturnType<typeof renderExample> = undefined as any;
act(() => {
  {{? it.bundle }}
  rendered = renderFn({ story, doc });
  {{?? true }}
  rendered = renderExample({
    example,
    doc,
    config,
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
