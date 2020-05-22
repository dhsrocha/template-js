import { configure } from "enzyme";
// eslint-disable-next-line
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });
