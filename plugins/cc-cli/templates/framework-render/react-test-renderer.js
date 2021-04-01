let rendered;
act(() => {
  {{=it.storeRender}}
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
