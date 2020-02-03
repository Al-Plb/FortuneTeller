
// function displayBlock() {
//     var el = document.getElementById("blockPersona");
//     el.classList.toggle('show');
// }

function displayBlock() {
    var x = document.getElementById("blockPersona");
    if (x.style.display === "none") {
      x.style.display = "block";
    //   x.style.margin = "30px"
        var el = document.getElementsByClassName("wrap");
        console.log(el)
    } else {
      x.style.display = "none";
    }
}
