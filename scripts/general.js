//Numero totale di bottiglie utlizzato per il counter
var BOTTIGLIE_RIUTILIZZATE = 160;

// Animazione counter bottiglie di birra riutilizzate

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
  
// function startCounter(){
//     if(document.getElementById("counter").getBoundingClientRect().top < 1000){ 
//       animateValue(document.getElementById("counter"), 0, BOTTIGLIE_RIUTILIZZATE, 1500);
//       document.removeEventListener("scroll", startCounter);
//     } else{
//       window.requestAnimationFrame(startCounter);
//     }
// }

// TODO: rimuovere - Per lancio senza sezione procedimento
function startCounter(){
  animateValue(document.getElementById("counter"), 0, BOTTIGLIE_RIUTILIZZATE, 1500);
  document.removeEventListener("scroll", startCounter);
}

document.addEventListener("scroll", startCounter);