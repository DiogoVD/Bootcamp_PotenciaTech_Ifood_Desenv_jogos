
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mappedKeys = [];
let audio = new Audio();

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    /* seleciona a tecla pressionada com a tag "data-tecla=key" e adiciona a classe active*/
    const clickedKey = document.querySelector(`[data-tecla="${key}"]`); 
    clickedKey.classList.add("active");

    /* gera um timer de 150ms e remove a classe active */
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);

};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.tecla));
    mappedKeys.push(key.dataset.tecla); /* lista todas as teclas configuradas no array pianoKeys */
});

document.addEventListener("keydown", (e) => {
    if (mappedKeys.includes(e.key)){
        playTune(e.key);
    }
});

const ajusteVolume = (ev) => {
    audio.volume = ev.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach ((evk) =>
        evk.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", ajusteVolume);
keysCheck.addEventListener("input", showHideKeys);