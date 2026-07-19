document.addEventListener("DOMContentLoaded", function () {
  function checkanswer() {
    var answer = document.getElementById("answer1").value;
    if (answer.toLowerCase() === "mehdi") {
      document.getElementById("resu").innerHTML = "correct";
    } else {
      document.getElementById("resu").innerHTML = "incorrect";
    }
  }

  document.getElementById("b").addEventListener("click", checkanswer);
});

function helo() {
  const name = document.getElementById("inp2").value;
  document.getElementById("ppp").innerHTML = `hello ${name}`;
}
document.getElementById("b3").addEventListener("click", helo);
