import path from 'path';
import MatchMediaMock from 'jest-matchmedia-mock';
import { loadConfigurations } from '@component-controls/config';
import { renderExample } from '@component-controls/test-renderers';
import { render as reactRender } from '@component-controls/render/react';
import { render, act } from '@testing-library/react';

const renderErr = () => {
  throw new Error('Could not render the story');
};

import doc, {
  overview,
  name,
  rgb,
  rgba,
  hsl,
  hsla,
  palette,
} from './AntdHorzColor.stories';

describe('AntdHorzColor', () => {
  let matchMedia: MatchMediaMock;
  beforeAll(() => {
    jest.mock('rc-util/lib/Portal');
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => {
    matchMedia.clear();
  });
  const configPath = path.resolve(__dirname, '../../../.config');
  const config = loadConfigurations(configPath);
  if (!config.renderFn) {
    config.renderFn = reactRender;
  }

  test('overview', () => {
    const example = overview;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config,
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });

  test('name', () => {
    const example = name;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config,
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });

  test('rgb', () => {
    const example = rgb;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config,
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });

  test('rgba', () => {
    const example = rgba;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config,
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });

  test('hsl', () => {
    const example = hsl;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config,
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });

  test('hsla', () => {
    const example = hsla;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config,
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });

  test('palette', () => {
    const example = palette;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config,
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });
});
