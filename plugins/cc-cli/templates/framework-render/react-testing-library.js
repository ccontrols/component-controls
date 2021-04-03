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
});
if (!rendered) {
  renderErr();
  return;
}
const { asFragment } = render(rendered);
expect(asFragment()).toMatchSnapshot();
