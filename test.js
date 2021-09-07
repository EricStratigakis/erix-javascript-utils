const { removeHTML } = require("./package/index");

test("strips <p>Hello there</p>", () => {
  expect(removeHTML("<p>Hello there</p>")).toBe("Hello there");
});
