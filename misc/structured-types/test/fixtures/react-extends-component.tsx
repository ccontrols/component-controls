import React, { Component as C } from 'react';
import * as R from 'react';

/**
 * class extends default import
 * @example <ExtendsComponent />
 */

export class ExtendsReactComponent extends React.Component {
  public render(): React.ReactNode {
    return null;
  }
}

/**
 * class extends named import with alias
 * @example <ExtendsComponent />
 */

export class ExtendsComponent extends C {
  public render(): React.ReactNode {
    return null;
  }
}

/**
 * class extends namespace import
 * @example <ExtendsRComponent />
 */
export class ExtendsRComponent extends R.Component {
  public render(): React.ReactNode {
    return null;
  }
}
