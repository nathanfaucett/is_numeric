var tape = require("tape"),
    isNumeric = require("..");


var alphabet = "abcdefghijklmnopqrstuvwxyz",
    chars = (alphabet + alphabet.toUpperCase()).split(""),
    numbers = "0123456789".split(""),
    punctuation = "`~!@#$%^&*()_-+={}[]|\\:;\"'<,>.?/".split(""),
    spaces = [' ', '\n', '\t', '\u00A0', '\u2028', '\u2029', '\f', '\r', '\v'];


function testChars(assert, chars, result, name) {
    var i = -1,
        il = chars.length - 1,
        ch;

    while (i++ < il) {
        ch = chars[i];
        assert.equal(isNumeric(ch), result, name);
    }
}


tape("isNumeric(ch: Character) should return true if character is numeric", function(assert) {

    testChars(assert, numbers, true, "should be true for numeric");
    testChars(assert, chars, false, "should be false for alphabetic");
    testChars(assert, punctuation, false, "should be false for punctuation");
    testChars(assert, spaces, false, "should be false for white space");

    assert.end();
});
