import { mergeCssClass } from "./index";

describe("mergeCssClass", () => {
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
    const result = mergeCssClass(...args);
    expect(result).toBe(expected);
  });
});
