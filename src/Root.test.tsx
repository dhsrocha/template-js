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
  it("Component has \"Root\" as text.", () => {
    // Act
    const subject = shallow(<Root />);
    // Assert
    expect(subject.text()).toBe("Root");
  });
});
