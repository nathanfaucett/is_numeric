module.exports = isNumeric;


function isNumeric(ch) {
    return isNumericCode(ch.charCodeAt(0));
}

isNumeric.code = isNumericCode;

function isNumericCode(charCode) {
    return charCode >= 0x30 && charCode <= 0x39;
}
