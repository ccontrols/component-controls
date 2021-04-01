const { mount, configure } = require('enzyme');
const toJson = require('enzyme-to-json').default;
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

configure({ adapter: new Adapter() });
