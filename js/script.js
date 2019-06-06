$(document).ready(function(){
  var lindsey = prompt("Is lindsey available?(yes/no)");
  var bus = prompt("Is the bus running?(true/fals)");

  if (lindsey === "yes") {
    $("#drive").show();
  }
  else if (bus === "true") {
    $("#drive").show();
  }
  else {
    $("#movie").show();
  }
});
