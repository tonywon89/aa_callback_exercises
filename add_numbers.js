var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please provide a number: ", function (num) {
      sum += parseInt(num);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });

  } else {
    completionCallback(sum);
    reader.close();
  }

}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
