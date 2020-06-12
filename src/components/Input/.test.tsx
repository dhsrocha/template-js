import { Input } from ".";
import { shallow } from "enzyme";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
describe("Render tests.", () => {
  // Arrange / Act
  const wrap = shallow(<Input />);
  it("Should render <section>.", async () => {
    // Assert
    expect(wrap.find("section")).toBeDefined();
  });
  it("<section> should be the topmost component.", async () => {
    // Act
    const child = wrap.find("section").props().children;
    // Assert
    expect(child).toEqual([
      <input type="checkbox" />,
      <input type="text" />,
      <button />,
    ]);
  });
  describe("Checkbox.", () => {
    it("Should render one <text[type=checkbox]/>.", async () => {
      // Act
      const child = wrap.find("input").find({ type: "checkbox" });
      // Assert
      expect(child).toHaveLength(1);
    });
  });
  describe("Text.", () => {
    it("Should render one <text[type=text]/>.", async () => {
      // Act
      const child = wrap.find("input").find({ type: "text" });
      // Assert
      expect(child).toHaveLength(1);
    });
  });
  describe("Button.", () => {
    it("Should render one <button>.", async () => {
      // Act
      const child = wrap.find("button");
      // Assert
      expect(child).toHaveLength(1);
    });
  });
});
