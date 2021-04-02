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
  subcomponents,
  extraColumns,
  controls,
  title,
  customTitle,
  notCollapsible,
} from './PropsTable.stories';

describe('PropsTable', () => {
  let matchMedia: MatchMediaMock;
  beforeAll(() => {
    jest.mock('rc-util/lib/Portal');
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => {
    matchMedia.clear();
  });
  const configPath = path.resolve(__dirname, '../../.config');
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

  test('subcomponents', () => {
    const example = subcomponents;

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

  test('extraColumns', () => {
    const example = extraColumns;

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

  test('controls', () => {
    const example = controls;

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

  test('title', () => {
    const example = title;

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

  test('customTitle', () => {
    const example = customTitle;

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

  test('notCollapsible', () => {
    const example = notCollapsible;

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
