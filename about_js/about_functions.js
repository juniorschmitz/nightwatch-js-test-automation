function welcome() {
  var welcome = "Potato"
  document.getElementById("welcome").append(welcome)
  console.log(welcome)
}

welcome();

function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(15, 30));