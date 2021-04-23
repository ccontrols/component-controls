import dot from 'dot';

const template = `
Core templating

<h1>Just static text</h1>
<p>Interpolation {{=it.f1	+	it.f3}} </p>
<div> JavaScript block evaluation
{{ for(var i=0; i < it.f2; i++) {
	console.log("Pass\t" + i);
}}
<div>{{=it.f3}}</div>
{{ } }}
</div>
<div> Encoding {{!'<a 	href="http://github.com"></a>'}}</div>
`;

describe('dot library', () => {
  it('template', () => {
    dot.templateSettings.strip = false;
    (dot as any).log = false;
    const rendered = dot.template(template)({
      name: 'Foo',
      f1: 1,
      f2: 2,
      f3: 3,
      altEmail: 'conditional works',
      farray: [
        { farray: [1, 2, 3, [11, 22, 33]], person: { name: 'Ell', age: 23 } },
        { farray: { how: 'really' } },
        { farray: [5, 6, 7, 8] },
      ],
    });
    expect(rendered).toMatchSnapshot();
  });
});
