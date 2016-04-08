function Clock () {
  var date = new Date();

  this.hours = date.getHours();
  this.minutes = date.getMinutes();
  this.seconds = date.getSeconds();

  // todo: Call print time

  // todo: schedule tick at 1 second intervals
}

Clock.prototype.printTime = function () {
  console.log(String(this.hours) + ":" + this.minutes + ":" + this.seconds);
};
// 
// var clock = new Clock();
//
// clock.printTime();
