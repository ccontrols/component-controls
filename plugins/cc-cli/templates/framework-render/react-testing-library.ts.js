let rendered: ReturnType<typeof renderExample> = undefined as any;
act(() => {
  {{? it.bundle }}
  rendered = renderFn({ story, doc{{? it.data && it.data[story.id] }}, values{{?}} });
  {{?? true }}
  rendered = renderExample({
    example,
    doc,
    config,
    {{? it.data && it.data[story.id] }}values,{{?}}
  });
  {{?}}
});
if (!rendered) {
  renderErr();
  return;
}
it('snapshot', () => {
  const { asFragment } = render(rendered);
  expect(asFragment()).toMatchSnapshot();
});
{{=it.allytest}}