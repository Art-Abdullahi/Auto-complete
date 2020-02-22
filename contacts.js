//get input element
var filterInput = document.getElementById("filterInput");

//add EventListener
filterInput.addEventListener("keyup", filterNames);

function filterNames(e) {
  //get value input
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  //get names ul
  var ul = document.getElementById("names");
  //get li's from ul
  var li = document.querySelectorAll("li.collection-item");
  //loop throght collection items
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    //if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
