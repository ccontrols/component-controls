let rendered;
act(() => {
  {{=it.storeRender}}
});
if (!rendered) {
  renderErr();
  return;
}
const { asFragment } = render(rendered);
expect(asFragment()).toMatchSnapshot();
