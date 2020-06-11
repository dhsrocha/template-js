import { Input } from ".";
import { shallow } from "enzyme";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
describe("Render tests.", () => {
  it("Should render <section>.", async () => {
    // Act
    const subject = shallow(<Input />);
    // Assert
    expect(subject.find("section")).toBeDefined();
  });
  it("Should render one <text[type=text]/>.", async () => {
    // Act
    const subject = shallow(<Input />)
      .find("input")
      .find({ type: "text" });
    // Assert
    expect(subject).toHaveLength(1);
  });
  it("Should render one <button>.", async () => {
    // Act
    const subject = shallow(<Input />).find("button");
    // Assert
    expect(subject).toHaveLength(1);
  });
  it("Should render one <text[type=checkbox]/>.", async () => {
    // Act
    const subject = shallow(<Input />)
      .find("input")
      .find({ type: "checkbox" });
    // Assert
    expect(subject).toHaveLength(1);
  });
});
