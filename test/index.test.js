const { like_or_dislike } = require("../src/index.js");

test('should return "Nothing" if a list is empty', () => {
    expect(like_or_dislike()).toBe("Nothing");
});