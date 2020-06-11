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
  it("Should render text input.", async () => {
    // Act
    const subject = shallow(<Input />);
    // Assert
    expect(subject.find("input").find({ type: "text" })).toHaveLength(1);
  });
  it("Should render button.", async () => {
    // Act
    const subject = shallow(<Input />);
    // Assert
    expect(subject.find("button")).toHaveLength(1);
  });
});
