import { create } from "react-test-renderer";
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
    const subject = create(<Root />);
    // Assert
    expect(subject.toJSON().children).toStrictEqual(["Root"]);
  });
});
