document.addEventListener("load", painelRGB());

function painelRGB() {
  document.addEventListener("input", painelRGB);

  var rangeR = document.querySelector("#rangeR").value;
  var rangeG = document.querySelector("#rangeG").value;
  var rangeB = document.querySelector("#rangeB").value;
  var coresRgb = "rgb(" + rangeR + "," + rangeG + "," + rangeB + ")";

  document.querySelector("#box").style.background = coresRgb;

  document.querySelector("#txtrangeR").placeholder = rangeR;
  document.querySelector("#txtrangeG").placeholder = rangeG;
  document.querySelector("#txtrangeB").placeholder = rangeB;
  console.log(document.querySelector("#box").style);
}
