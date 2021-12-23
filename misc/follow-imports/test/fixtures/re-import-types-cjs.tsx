const { ColumnProps } = require('./import-types-cjs');

const { CProps } = require('./import-types-cjs');

import * as All from './import-types-cjs';

export * from './import-types-cjs';

exports.Column = (props): string | undefined => props.stringProp;

exports.ColumnP = (props): string | undefined => props.stringProp;

exports.ColumnAll = (props: All.CProps): string | undefined => props.stringProp;
