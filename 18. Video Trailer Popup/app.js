//btn
const btn = document.querySelector(".btn");
//close-icon
const closeicon = document.querySelector(".close-icon");
//convid
const convid = document.querySelector(".convid");
//video
const video = document.querySelector("video");

btn.addEventListener("click", () => {
    convid.classList.remove("active");
    video.play();
    video.currentTime = 21;
});

closeicon.addEventListener("click", () => {
    convid.classList.add("active");
    video.pause();
});