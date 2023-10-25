const debutton = document.querySelector(".debutton");
const preherkansing = document.querySelector(".preherkansing");
const herkansing = document.querySelector(".herkansing");

// Voeg een click event listener toe aan de knop
debutton.addEventListener("click", toggleElements);

function toggleElements() {
  // Controleer of de preherkansing verborgen is
  if (herkansing.style.display === "none") {
   
  } else {
    // Als het zichtbaar is, verberg het
    preherkansing.style.display = "none";
    herkansing.style.display = "block";
  }
}
