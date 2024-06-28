const container = document.querySelector(".container");
const img = document.querySelector("#img");
const galleryOverlay = document.querySelector(".galleryOverlay");
const imagebox = document.querySelector(".image-box");
const i = document.querySelector("span i");

container.addEventListener("click", (e) => {
  const src = e.target.src;
  console.log(src);
  if (src != undefined) {
    // console.log(src);
    img.src = src;
    galleryOverlay.classList.add("imageOverlay-block");
    imagebox.classList.add("image-scale");
  }
});
i.addEventListener("click", () => {
  galleryOverlay.classList.remove("imageOverlay-block");
  imagebox.classList.remove("image-scale");
});

galleryOverlay.addEventListener("click", () => {
  galleryOverlay.classList.remove("imageOverlay-block");
  imagebox.classList.remove("image-scale");
});

