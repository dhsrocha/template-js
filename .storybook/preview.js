import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";
import results from "../build/.jest.results.json";

addDecorator(withTests({ results }));
addDecorator(withA11y);
addDecorator(withKnobs);
