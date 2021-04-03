let rendered;
act(() => {
  {{? it.bundle }}
  rendered = renderFn(story, doc);
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
const component = renderer.create(rendered);
if (!component) {
  componentErr();
  return;
}
expect(component.toJSON()).toMatchSnapshot();
