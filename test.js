// console.log("Hello, World from!")


const fs = require("fs");
const { parse } = require("csv-parse");
const { delimiter } = require("path");

var buy_amount = 0
var sell_amount = 0

fs.createReadStream("csv-demo/input.csv")
    .pipe(parse({ delimiter: ";", from_line:2}))
    .on("data", function (row) {
        console.log("--- debut --");
        console.log(row);
        if (row[3].trim()=='Buy'){
            buy_amount -= row[1]*row[2];
        }
        if (row[3].trim()=='Sell'){
            sell_amount += row[1]*row[2];
        }
        console.log("--- fin --");
    })
    .on('end', function(){
        console.log(buy_amount);
        console.log(sell_amount);
        console.log(sell_amount + buy_amount);
    })
