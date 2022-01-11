// PROPERTIES
let numberCounter = 1;
let sideCounter = 6;
let colorCounter = 6;
let color = "#ec4145";
let prevLog = [];

for (var i = 0; i < document.querySelectorAll(".console-button").length; i++) {
  document.querySelectorAll(".console-button")[i].addEventListener("click", function() {
    displayOperator(this.innerHTML);
  })
}

//DISPLAY COMBINATIONS
for (var i = 0; i < 9; i++) {
  if (i === 4) {
    document.querySelectorAll(".dice")[i].style.visibility = "visible";
    document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
  } else {
    document.querySelectorAll(".dice")[i].style.visibility = "hidden";
    document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
  }
}

function displayCombi(num) {
  switch (num) {
    case 1:
      for (var i = 0; i < 9; i++) {
        if (i === 4) {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        }
      }
      break;
    case 2:
      for (var i = 0; i < 9; i++) {
        if (i === 1 || i === 7) {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        }
      }
      break;
    case 3:
      for (var i = 0; i < 9; i++) {
        if (i === 1 || i === 4 || i === 7) {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        }
      }
      break;
    case 4:
      for (var i = 0; i < 9; i++) {
        if (i === 0 || i === 2 || i === 6 || i === 8) {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        }
      }
      break;
    case 5:
      for (var i = 0; i < 9; i++) {
        if (i === 1 || i === 3 || i === 5 || i === 7) {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        }
      }
      break;
    case 6:
      for (var i = 0; i < 9; i++) {
        if (i === 3 || i === 4 || i === 5) {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        }
      }
      break;
    case 7:
      for (var i = 0; i < 9; i++) {
        if (i === 3 || i === 5) {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        }
      }
      break;
    case 8:
      for (var i = 0; i < 9; i++) {
        if (i !== 4) {
          document.querySelectorAll(".dice")[i].style.visibility = "visible";
          document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
        } else {
          document.querySelectorAll(".dice")[i].style.visibility = "hidden";
          document.querySelectorAll(".dicebox")[i].style.visibility = "hidden";
        }
      }
      break;
    case 9:
      for (var i = 0; i < 9; i++) {
        document.querySelectorAll(".dice")[i].style.visibility = "visible";
        document.querySelectorAll(".dicebox")[i].style.visibility = "visible";
      }
      break;
    default:

  }
}

// RANDOMIZE NUMBER AND LOG PREVIOUS
function randomizeAndLog() {
  prevLog = [];
  for (var i = 0; i < 9; i++) {
    if (document.querySelectorAll(".dice")[i].style.visibility === "visible") {
      prevLog.push(" " + document.querySelectorAll(".dice")[i].innerHTML);
    }
  }
  for (var i = 0; i < 9; i++) {
    var randomNum = (Math.ceil(Math.random() * sideCounter));
    document.querySelectorAll(".dice")[i].innerHTML = parseFloat(randomNum);
  }

  document.querySelector(".list").innerHTML = prevLog;
}

document.querySelector(".random-button").addEventListener("click", randomizeAndLog);
document.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    randomizeAndLog();
  }
})


//CHANGE COLOR
document.querySelector(".color-button").addEventListener("click", function() {
  for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".dice")[i].style.color = color;
    document.querySelectorAll(".dicebox")[i].style.borderColor = color;
  }
  document.querySelector(".color-button").style.color = color;
  document.querySelector(".color-button").style.borderColor = color;
})

// CONSOLE FUNCTIONS

function displayOperator(operation) {
  switch (operation) {
    case "+ dice":
      if (numberCounter < 9) {
        numberCounter++;
        document.querySelector(".number-display").innerHTML = numberCounter;
        displayCombi(numberCounter);
      }
      break;

    case "- dice":
      if (numberCounter > 1) {
        numberCounter--;
        document.querySelector(".number-display").innerHTML = numberCounter;
        displayCombi(numberCounter);
      }
      break;

    case "+ side":
      sideCounter++;
      document.querySelector(".side-display").innerHTML = sideCounter;
      break;

    case "- side":
      if (sideCounter > 2) {
        sideCounter--;
        document.querySelector(".side-display").innerHTML = sideCounter;
      }
      break;

    case "change color":
      colorCounter++;
      if (colorCounter % 5 === 1) {
        document.querySelector(".color-display").innerHTML = "red";
        color = "#ec4145"
      } else if (colorCounter % 5 === 2) {
        document.querySelector(".color-display").innerHTML = "orange";
        color = "#f37b68"
      } else if (colorCounter % 5 === 3) {
        document.querySelector(".color-display").innerHTML = "yellow";
        color = "#f9a62b"
      } else if (colorCounter % 5 === 4) {
        document.querySelector(".color-display").innerHTML = "blue";
        color = "#49ddc1"
      } else {
        document.querySelector(".color-display").innerHTML = "purple";
        color = "#9b84ec";
      }
      break;

    default:
      sideCounter = parseFloat(operation);
      document.querySelector(".side-display").innerHTML = sideCounter;
  }
}
