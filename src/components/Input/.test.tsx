import { Input } from ".";
import { shallow } from "enzyme";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
describe("Render tests.", () => {
  it("Should render section.", async () => {
    // Act
    const subject = shallow(<Input />);
    // Assert
    expect(subject.find("section")).toBeDefined();
  });
});
