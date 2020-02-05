function displayBlock() {
    var wrap = document.getElementsByTagName("div")[1]; 
    var x = document.getElementById("blockPersona")
    var persona = document.getElementById("persona");
    if (wrap.style.marginTop === "0vh" && persona.style.display === "none" && x.style.display === "none" && x.style.marginTop === "0vh" ) {
      wrap.style.marginTop = "15vh";
      persona.style.display = "block";
      x.style.display = "block";
      x.style.marginTop = "5vh";
    } else {
      wrap.style.marginTop = "0vh";
      persona.style.display = "none";
      x.style.display = "none";
      x.style.marginTop = "0vh";
    }
}
