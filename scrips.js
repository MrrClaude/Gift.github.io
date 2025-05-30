const qs = document.querySelector(".qs");
const gif = document.querySelector(".gft");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".No-btn");

yesBtn.addEventListener("click", () => {
    qs.innerHTML = "Jit laor mes ot yur kado";
    gif.src = "https://i.pinimg.com/originals/b6/38/94/b63894f15de5dc9ed88c3b91cca28ecb.gif";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // Make sure it's movable
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

