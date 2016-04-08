var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan (el1, el2, callback) {
  reader.question("Is " + el1 + " greater than " + el2 + "? ", function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

askIfGreaterThan(3, 6, function (answer) {
  console.log("Here is the " + answer);
  reader.close();
});
