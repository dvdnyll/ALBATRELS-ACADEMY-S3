function searchStudent() {
  const input = document
    .getElementById("studentInput")
    .value
    .trim()
    .toLowerCase();

  const img = document.getElementById("resultImg");
  const box = document.getElementById("resultBox");
  const download = document.getElementById("downloadLink");
  const loading = document.getElementById("loadingText");

  // Reset tampilan
  box.style.display = "none";
  loading.style.display = "block";

  if (!input) {
    loading.style.display = "none";
    return;
  }

  let file = "";

  if (input === "photography" || input === "photo" || input === "5" || input === "E" || input === "fotografi") {
    file = "PHOTOGRAPHY CLASS.png";
  } else if (input === "geo" || input === "geography" || input === "3" || input === "C" || input === "geografi") {
    file = "GEOGRAPHY CLASS.png";
  } else if (input === "art" || input === "arts" || input === "seni" || input === "2" || input === "B") {
    file = "ART CLASS.png";
  } else if (input === "music" || input === "musik" || input === "6" || input === "F") {
    file = "MUSIC CLASS.png";
  } else if (input === "shop" || input === "teknik" || input === "4" || input === "D" || input === "teknologi") {
    file = "SHOP CLASS.png";
  } else if (input === "english" || input === "eng" || input === "1" || input === "A" || input === "bahasa inggris" || input === "inggris") {
    file = "ENGLISH CLASS.png";
  } else {
    file = "error2.png";
  }

  // SIMULASI LOADING

setTimeout(() => {
  const path = "./assets/" + file;

  img.src = path;

  // JIKA ERROR → SEMBUNYIKAN DOWNLOAD
  if (file === "error2.png") {
    download.style.display = "none";
  } else {
    download.href = path;
    download.style.display = "inline-block";
  }

  loading.style.display = "none";
  box.style.display = "block";
}, 1200);
}

document
  .getElementById("studentInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchStudent();
    }
  });

box.style.opacity = "1";
box.style.transform = "translateY(0)";
