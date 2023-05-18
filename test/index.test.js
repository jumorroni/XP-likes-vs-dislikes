const { like_or_dislike } = require("../src/index.js");
const { getValue } = require("../src/index.js");

test("should return 'Nothing' if a list is empty", () => {
    expect(like_or_dislike()).toBe("Nothing");
});

test("should return 'Dislike' if button is 'Dislike'", () => {
    expect(getValue(1)).toBe('Dislike');
});