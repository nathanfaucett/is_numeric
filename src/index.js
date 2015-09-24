module.exports = isNumeric;


function isNumeric(ch) {
    var charCode = ch.charCodeAt(0);
    return charCode >= 0x30 && charCode <= 0x39;
}
