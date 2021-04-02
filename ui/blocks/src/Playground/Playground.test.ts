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
  defaultOpenSource,
  disableZoomPan,
  multiStories,
  title,
  customTitle,
  notCollapsible,
  extraPanel,
  child,
  multiChild,
  darkTheme,
  scale,
  zoomDisabled,
  visibleTabs,
} from './Playground.stories';

describe('Playground', () => {
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

  test('defaultOpenSource', () => {
    const example = defaultOpenSource;

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

  test('disableZoomPan', () => {
    const example = disableZoomPan;

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

  test('multiStories', () => {
    const example = multiStories;

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

  test('extraPanel', () => {
    const example = extraPanel;

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

  test('child', () => {
    const example = child;

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

  test('multiChild', () => {
    const example = multiChild;

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

  test('darkTheme', () => {
    const example = darkTheme;

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

  test('scale', () => {
    const example = scale;

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

  test('zoomDisabled', () => {
    const example = zoomDisabled;

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

  test('visibleTabs', () => {
    const example = visibleTabs;

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
