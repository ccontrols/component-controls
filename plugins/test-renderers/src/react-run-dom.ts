import { render } from 'react-dom';
import { ReactElement } from 'react';
import { JSDOM } from 'jsdom';

/**
 * run some function in the dom, by using react-dom
 * @param el - array of react elements to render
 * @param fn - callback that will be usd
 * @param args - optional arguments for the callback function
 * @returns returns the esults of executing the function
 */
export const reactRunDOM = async <T>(
  el: ReactElement | ReactElement[],
  fn: (e: Element, ...args: any[]) => Promise<T> | T,
  ...args: any[]
): Promise<T | undefined> => {
  let dom: JSDOM | null = null;
  if (!document) {
    dom = new JSDOM(`<!DOCTYPE html>`);
    global.document = dom.window.document;
  }
  const ccClassName = 'component-controls-test';
  let wrapper: Element | null = document.body.querySelector(`.${ccClassName}`);
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.className = ccClassName;
    document.body.appendChild(wrapper);
  }
  render(el as ReactElement[], wrapper);
  let results: T | undefined = undefined;
  try {
    results = await fn(wrapper, ...args);
  } finally {
    document.body.removeChild(wrapper);
    if (dom) {
      dom = null;
    }
  }
  return results;
};
