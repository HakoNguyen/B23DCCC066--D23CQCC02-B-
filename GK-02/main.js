document.addEventListener("DOMContentLoaded", function () {
    const minsInput = document.getElementById("minutes");
    const secsInput = document.getElementById("seconds");
    const display = document.getElementById("display");
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const audio = document.getElementById("audio");
  
    let timer;
  
    function displayTime(minutes, seconds) {
      const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
      const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = `${displayMinutes}:${displaySeconds}`;
    }
  
    function startTimer() {
      let totalSeconds = parseInt(minsInput.value) * 60 + parseInt(secsInput.value);
  
      if (totalSeconds <= 0 || isNaN(totalSeconds)) {
        alert("Vui lòng nhập giá trị hợp lệ cho phút và giây!");
        return;
      }
  
      if (totalSeconds > 3600) {
        alert("Phút không được vượt quá 60!");
        return;
      }
  
      if (totalSeconds === 3600) {
        totalSeconds = 0;
      }
  
      let minutes, seconds;
  
      timer = setInterval(function () {
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
  
        displayTime(minutes, seconds);
  
        if (--totalSeconds < 0) {
          clearInterval(timer);
          audio.play();
          startButton.disabled = true;
          resetButton.disabled = false;
        }
      }, 1000);
  
      startButton.disabled = true;
      resetButton.disabled = true;
      minsInput.disabled = true;
      secsInput.disabled = true;
    }
  
    function resetPage() {
      clearInterval(timer);
      audio.pause();
      audio.currentTime = 0;
      location.reload(); 
    }
  
    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetPage);
  });
  