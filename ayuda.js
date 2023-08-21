  let audio = document.getElementById("audio");
  let play_btn = document.getElementById("play-btn");
  let pause_btn = document.getElementById("pause-btn");
  
  let is_playing = false;
  
  const play_effects = () => {
    circulo.style.animationPlayState = "running";
    circulo2.style.animationPlayState = "running";
  };
  
  const pause_effects = () => {
    circulo.style.animationPlayState = "paused";
    circulo2.style.animationPlayState = "paused";
  };
  
  play_btn.addEventListener("click", () => {
    if (is_playing) {
      audio.pause();
      is_playing = false;
      pause_effects();
    } else {
      audio.play();
      is_playing = true;
      play_effects();
    }
  });