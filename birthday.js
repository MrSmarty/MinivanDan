var currentDate = new Date();

var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
console.log(month + "/" + day);

document.getElementById("date").innerHTML = month + "/" + day;
