import { mergeClassnames } from "./index";

describe("mergeClassnames", () => {
  it.each([
    ["empty argument", [], ""],
    [
      "with multiple arguments",
      ["classname1", false, undefined, {}, "classname2"],
      "classname1 classname2",
    ],
    [
      "with multiple arguments and non valid string",
      [true, false, undefined, 1],
      "",
    ],
  ])("%s", (s, args, expected) => {
    const result = mergeClassnames(...args);
    expect(result).toBe(expected);
  });
});
