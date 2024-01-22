var index = 0;

function changeColors() {
  var colors = ["#3EB489", "blue", "green", "black", "orange", "#fff"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) index = 0;
}

var size = 0;

function changeSize() {
  var sizes = ["20px", "40px", "60px", "80px", "90px", "110px"];

  document.getElementsByTagName("h1")[0].style.fontSize = sizes[size++];

  if (size > sizes.length - 1) size = 0;
}
