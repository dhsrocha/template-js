import { Input } from ".";
import { shallow } from "enzyme";

/**
 * @author Diego Rocha <dhsrocha.dev@gmail.com>
 */
describe("Render tests.", () => {
  // Arrange
  const wrap = shallow(<Input />);
  describe("<section>", () => {
    it("Should render one.", async () => {
      // Assert
      expect(wrap.find("section")).toBeDefined();
    });
    it("Should be the topmost component.", async () => {
      // Act
      const children = wrap.find("section").props().children;
      // Assert
      expect(children).toEqual([
        <input type="checkbox" />,
        <input type="text" />,
        <button />,
      ]);
    });
  });
});
