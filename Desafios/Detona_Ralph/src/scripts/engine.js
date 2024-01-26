const state = {
    /*Altera a parte visual*/
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    /*Altera a parte de codificação*/
    values:{
        timerID: null,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
    actions:{
        timerID: setInterval(randomSquare, 1000), //velocidade do jogo em 1000 para aumentar a dificuldade esse tempo deve diminuir.
        countDownTimerId: setInterval(countDown, 1000),
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");  /* Remove todos os inimigos na tela */
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId)
        clearInterval(state.actions.timerID)
        alert(`GAME OVER! O seu resultado foi: ${state.values.result};`)
    }
}

function playsound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}


function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result
                state.values.hitPosition = null
                playsound("hit")
            }
        });
    });
}



function init(){
    addListenerHitBox();
}

init();

/*Continua no implementando listener e hitbox */ 