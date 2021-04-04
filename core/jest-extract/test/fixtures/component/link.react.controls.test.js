import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link.react';

test('tests in same folder', () => {
  const component = renderer.create(
    <Link page="http://www.google.com">Google</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
<a
  className="normal"
  href="http://www.google.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Google
</a>
`);
});
