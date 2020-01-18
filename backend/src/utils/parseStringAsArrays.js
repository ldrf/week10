module.exports = function parseStringAsArray(arrayAsString, split){
    return arrayAsString.split(split).map(stringValue => stringValue.trim());
}