const { removeHTML } = require("./package/index");

test("strips <p>Hi there</p>", () => {
  expect(removeHTML("<p>Hi there</p>")).toBe("Hi there");
});
