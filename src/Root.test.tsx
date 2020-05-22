import { shallow } from "enzyme";
import * as React from "react";
import { Root } from "./Root";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
describe("Root component.", () => {
  /**
   * @author Diego Rocha <dhsrocha.dev@gmail.com>
   */
  it("Component has text: Root.", () => {
    // Act
    const subject = shallow(<Root />);
    // Assert
    expect(subject.text()).toBe("Root");
  });
});
