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
        gameVelocity: 1000,

    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");  /* Remove todos os inimigos na tela */
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function moveEnemy(){
    state.values.timerID = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {

    });
}

function init(){
    moveEnemy();
    addListenerHitBox();
}

init();

/*Continua no implementando listener e hitbox */ 