/* GO FUNCTION */
const watchURL    = "https://watchbdree.blogspot.com/p/blog-page.html";
const downloadURL = "https://watchbdree.blogspot.com/p/blog-page.html";
const redirectURL = "https://zmistar.blogspot.com/";

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
