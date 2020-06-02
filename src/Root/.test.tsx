import { render } from "enzyme";
import { Root } from ".";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
describe("Root component.", () => {
  /**
   * @author Diego Rocha <dhsrocha.dev@gmail.com>
   */
  it("Component has text: Root.", () => {
    // Act
    const subject = render(<Root />);
    // Assert
    expect(subject.text()).toBe("Root");
  });
});
