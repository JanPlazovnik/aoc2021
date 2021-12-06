const input = require("fs").readFileSync(__dirname + "/input/input.txt", "utf-8").split("\r\n");
const bitCounts = input[0].split("").map(() => ({"0": 0, "1": 0}))

const getGammaRate = () => parseInt(bitCounts.map(it => it["0"] > it["1"] ? "0" : "1").join(""), 2)
const getEpsilonRate = () => parseInt(bitCounts.map(it => it["1"] > it["0"] ? "0" : "1").join(""), 2)

for (const value of input) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] == "0") bitCounts[i]["0"]++;
        else bitCounts[i]["1"]++;
    }
}

console.log(getGammaRate(), getEpsilonRate(), getGammaRate() * getEpsilonRate())