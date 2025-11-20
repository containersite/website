const newTabURL = "https://watchvarse1.blogspot.com/p/blog-page.html";
  const redirectURL = "https://adx3uq.blogspot.com/p/18-parves.html";

  function showLoadingAndPlay() {
    const playButton = document.querySelector('.play-button');
    const spinner = document.getElementById('loadingSpinner');

    // প্লে বাটন লুকাও, spinner দেখাও
    playButton.style.display = 'none';
    spinner.style.display = 'block';

    // 🔹 সরাসরি click ইভেন্টে window.open → block কম হবে
    const newTab = window.open(newTabURL, "_blank");

    // নতুন ট্যাব না খুললে fallback → মূল ট্যাবে খুলবে
    if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
      window.location.href = newTabURL;
    }

    // spinner 1 সেকেন্ড দেখানো
    setTimeout(() => {
      spinner.style.display = 'none';
      // মূল ট্যাবে redirect
      window.location.href = redirectURL;
    }, 1000);
  }

