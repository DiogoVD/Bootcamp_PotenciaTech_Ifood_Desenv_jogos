
const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio();

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.tecla);
    key.addEventListener("click", () => playTune(key.dataset.tecla));
});

document.addEventListener("keydown", (teclaCaptura) => {
    playTune(teclaCaptura.key);
});