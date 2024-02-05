
const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points")
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card")
    },
    playerSides: {
        player1: "player-cards",
        player1_box: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computer_box: document.querySelector("#computer-cards")
    },
    actions:{
        button: document.getElementById("next-duel")
    }
}


const pathImages = "./src/assets/icons/";
const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2]
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0]
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1]
    },
]

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() *cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "130px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if(fieldSide === state.playerSides.player1){
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        })
        
        cardImage.addEventListener("mouseover", () => {
            drawSelectCards(idCard);
        });

        // remove o detalhe da carta se nao estiver com o mouse em cima.
        cardImage.addEventListener("mouseout", () => {
            removeCardsDetail();
        });
    }
    return cardImage;
}

async function setCardsField(cardId){
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();

    await showHidenCardsFieldsImages(true);

    await removeCardsDetail();

    // seta os cards selecionados
    await drawCardsInfield(cardId, computerCardId);

    let duelResult = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResult);
}

async function drawCardsInfield(cardId, computerCardId){
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;
}

async function showHidenCardsFieldsImages(valueBolean){
    if(valueBolean === true){
        state.fieldCards.player.style.display = "block";
        state.fieldCards.computer.style.display = "block";
    }

    if(valueBolean === false){
        state.fieldCards.player.style.display = "none";
        state.fieldCards.computer.style.display = "none";
    }
}

async function removeCardsDetail(){
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
}

async function drawButton(text){
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
}

async function updateScore(){
    state.score.scoreBox.innerHTML = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

async function removeAllCardsImages(){

    // removendo cartas do computer
    let cards = state.playerSides.player1_box;
    let imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    // removendo cartas do player
    cards = state.playerSides.computer_box;
    imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function checkDuelResults(playerCardID, computerCardId){
    let duelResult = "Draw"
    let playerCard = cardData[playerCardID];

    if(playerCard.WinOf.includes(computerCardId)){
        duelResult = "Win";
        await playAudio(duelResult);
        state.score.playerScore++;
    }
    if(playerCard.LoseOf.includes(computerCardId)){
        duelResult = "Lose";
        await playAudio(duelResult);
        state.score.computerScore++;
    }
    
    return duelResult;
}

async function drawSelectCards(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Atribute : "+ cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide){
    for(let i=0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function resetDuel(){
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    showHidenCardsFieldsImages(false);

    init();
}

async function playAudio(status){
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    audio.play();
}

function init(){
    
    playBgm();
    showHidenCardsFieldsImages(false);
    
    drawCards(6, state.playerSides.player1);
    drawCards(6, state.playerSides.computer);

}

async function playBgm(){
    const bgm = document.getElementById("bgm");
    bgm.play();
    bgm.volume = 0.3;
}


init();

