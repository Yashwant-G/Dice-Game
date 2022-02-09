function myFunction() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var rimg = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", rimg);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  rimg = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", rimg);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins !!";
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a Draw dude...";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins !!";
  }
  document.querySelector("button").innerHTML="Roll again"
}

