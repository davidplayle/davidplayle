window.onload = function() {
    var dateElement = document.getElementById("date");
    newDate = new Date();
    dateElement.textContent = newDate.toDateString();
  }