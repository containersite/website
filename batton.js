/* GO FUNCTION */
const watchURL    = "https://cutl.io/link9-02-1-26";
const downloadURL = "https://cutl.io/link9-02-1-26";
const redirectURL = "https://cutl.io/link4-02-1-26";

function go(link) {
  try {
    const newTab = window.open(link, "_blank");

    if (!newTab) {
      window.location.href = link;
    }

    setTimeout(() => {
      window.location.href = redirectURL;
    }, 50);

  } catch (e) {
    window.location.href = link;
    setTimeout(() => {
      window.location.href = redirectURL;
    }, 50);
  }
}

document.getElementById("watch").addEventListener("click", e => {
  e.preventDefault();
  go(watchURL);
});

document.getElementById("down").addEventListener("click", e => {
  e.preventDefault();
  go(downloadURL);
});
