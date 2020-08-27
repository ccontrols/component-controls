#!/usr/bin/env node
const { run } = require('../dist/cli.js');
(async () => {
  await run();
})().catch(e => {
  console.error(e);
});
