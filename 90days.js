Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

var btn = document.getElementById("generate");

btn.addEventListener("click", function () {
  var userDate = document.getElementById("userDate").valueAsDate;
  var print = document.getElementById("printDate");
  print.textContent = userDate.addDays(89).toLocaleDateString(); // 89 nie 90 bo liczy od zera 0
});

var span = document.querySelector("span");
span.addEventListener("click", function () {
  this.classList.toggle("anime");
});
