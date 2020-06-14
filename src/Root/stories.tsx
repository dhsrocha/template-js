import { Root } from ".";

export default { title: "Root Component", component: Root };

export const Basic = (): React.ReactElement => <Root />;

Basic.story = {
  parameters: {
    jest: ["Root.test.tsx"],
  },
};
