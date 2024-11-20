function showSurprise() {
  let message = document.getElementById("message");
  let image = document.getElementById("image");
  let myAudio = document.getElementById("myAudio"); // Ambil elemen audio

  message.innerHTML = "Medina Yuniar, kamu adalah cinta dalam hidupku,selamanya akan jadi miliku sampai kapanpun i love you untukmu medina yuiniar! ";
  message.classList.add("surprise");

  image.src = "medina.jpg"; // Ganti dengan foto Medina Yuniar
  image.classList.add("zoomIn");

  // Menambahkan efek confetti
  let confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  setTimeout(function() {
    confetti.remove(); 
  }, 3000);

  // Mulai memainkan audio
  myAudio.play(); 
}
