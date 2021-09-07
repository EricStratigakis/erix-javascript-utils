const { removeHTML } = require("./src/index");

test("strips <p>Hi there</p>", () => {
  expect(removeHTML("<p>Hi there</p>")).toBe("Hi there");
});
