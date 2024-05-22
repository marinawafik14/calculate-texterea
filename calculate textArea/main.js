var myTextarea = document.getElementById("my-text"),
  mySpan       = document.getElementById("my-span");

  myTextarea.onkeyup = function () {
    mySpan.textContent = 50 - this.value.length;

  mySpan.textContent < 0 ?  mySpan.style.color ="#f00" : mySpan.style.color ="#000"
  }
  