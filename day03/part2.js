// const input = require("fs").readFileSync(__dirname + "/input/demo.txt", "utf-8").split("\r\n");
const input = require("fs").readFileSync(__dirname + "/input/input.txt", "utf-8").split("\r\n");


function getBitCounts(array, index, type = undefined) {
    if (array.length === 0) {
        return null;
    }

    if (array.length === 1) {
        return array[0];
    }

    const bitCounts = {"0": 0, "1": 0};
    
    for (const value of array) {
        if (value[index] === "0") bitCounts["0"]++;
        else bitCounts["1"]++;
    }
    
    const getMostCommonBit = (sameBit) => (bitCounts["0"] === bitCounts["1"]) ? sameBit : (bitCounts["0"] > bitCounts["1"]) ? "0" : "1";
    const getLeastCommonBit = (sameBit) => (bitCounts["0"] === bitCounts["1"]) ? sameBit : (bitCounts["0"] > bitCounts["1"]) ? "1" : "0";

    const oxygenArray = array.filter(it => it[index] === getMostCommonBit("1"));
    const co2Array = array.filter(it => it[index] === getLeastCommonBit("0"));

    index += 1;
    const returnValue = {
        O: getBitCounts(oxygenArray, index, "O"),
        CO2: getBitCounts(co2Array, index, "CO2")
    };

    if (type == "O") return returnValue["O"]
    if (type == "CO2") return returnValue["CO2"]
    return returnValue;
}

const {O, CO2} = getBitCounts(input, 0);
console.log("O: ", parseInt(O, 2));
console.log("CO2: ", parseInt(CO2, 2));
console.log("Life Support Rating: ", parseInt(O, 2) * parseInt(CO2, 2));