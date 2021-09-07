const { removeHTML } = require("./src/index");

test("strips <p>Hi there</p>", () => {
  expect(removeHTML("<p>Hi there</p>")).toBe("Hi there");
});

test("False Faliure", () => {
  expect(removeHTML("<p>Hi there</p>")).toBe("False Faliure");
});
