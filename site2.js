let timer = setInterval(()=>{
    timeLeft--;
    timerText.textContent = timeLeft;
    setProgress(timeLeft);

    if(timeLeft <= 0){
        clearInterval(timer);
        document.querySelector(".timer-box").style.display="none";
        text.textContent="আপনার লিংক প্রস্তুত!";

        watchBtn.style.display="block";
        downloadBtn.style.display="block";
    }
},1000);
