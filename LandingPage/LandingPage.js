function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  window.addEventListener("scroll", (e) => {
    let temp = document.getElementById("solution")
    console.log(temp.getBoundingClientRect())
})
  

  