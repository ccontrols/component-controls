import React, { Component as C } from 'react';
import * as R from 'react';

export class ExtendsReactComponent extends React.Component {
  public render(): React.ReactNode {
    return null;
  }
}

export class ExtendsComponent extends C {
  public render(): React.ReactNode {
    return null;
  }
}

export class ExtendsRComponent extends R.Component {
  public render(): React.ReactNode {
    return null;
  }
}
