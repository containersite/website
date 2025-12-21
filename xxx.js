
const watchURL = "https://watchvarseax.blogspot.com/p/one_11.html";
const downloadURL = "https://watchvarseax.blogspot.com/p/one_11.html";
const redirectURL = "https://cutl.io/link10-20-12-25";

function go(link){
  let win = window.open(link, "_blank");
  if(!win){
    window.location.href = link;
  }
  setTimeout(() => {
    window.location.href = redirectURL;
  }, 50);
}

document.getElementById("watch").onclick = e => {
  e.preventDefault();
  go(watchURL);
};

document.getElementById("down").onclick = e => {
  e.preventDefault();
  go(downloadURL);
};

