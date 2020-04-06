function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("menu");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
function includeHTML(file) {
  var elmnt, xhttp;
  elmnt = document.getElementById("media-screen");
  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        elmnt.innerHTML = this.responseText;
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
  }  
}
Mousetrap.bind('alt+enter', function(e) {
  document.querySelector("embed").requestFullscreen()
});

function fadeIn() {
  var i, elmnts;
  elmnts = getElementsByClassName('fade-in');
  for (i=0; i < (elmnts.length - 1); i++) {
    if ((this.offsetHeight + this.offsetTop) < (window.offsetHeight + window.offsetTop)) {
      this.addClass('in')
    }
    else {
      this.removeClass('in')
    }
  }
}
  
