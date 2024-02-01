
const pianoKeys = document.querySelectorAll(".piano-keys .key");

let mappedKeys = [];
let audio = new Audio();

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey =document.querySelector(`[data-tecla="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);

};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.tecla));
    mappedKeys.push(key.dataset.tecla);
});

document.addEventListener("keydown", (e) => {
    if (mappedKeys.includes(e.key)){
        playTune(e.key);
    }
});