
//text typewriter effect function. call with the html element, text to append
const textTypeEffect = (element, text, i = 0) => {
    element.textContent += text[i];

    if (i === text.length-1) {
        return;
    }

    setTimeout(() => textTypeEffect(element, text, i + 1), 50);
}

const scenicText = document.querySelector("#scenic-text");
const gameText = document.querySelector("#game-text");
const buttonContainer = document.querySelector("#button-container")
let scenicInitShutdown = 1;
let gameInitShutdown = 1;

//initiates the scenic text div and span
const scenicInitiation = () => {
    if (scenicInitShutdown === 1) {
        const scenicWriter = document.querySelector("#scenic-writer");
        textTypeEffect(scenicWriter, `With the door to your cell open, you see a path to freedom...`);
        scenicInitShutdown = 0
    } else {
        return;
    }
}

//initiates the game text div and span
const gameTextInitiation = () => {
    if (gameInitShutdown === 1) {
        const gameWriter = document.querySelector("#game-writer");
        setTimeout(() => {textTypeEffect(gameWriter, `You wonder what horrors may lurk these prison halls, but you must take your chance...`)}, 4500)
        gameInitShutdown = 0
    } else {
        return;
    }
}

//why wont this work
const buttonInitiation = () => {
    buttonContainer.innerHTML = `<input type="button" id="progressor" value="Next">`;
}

//make a function for the "next" button to clear both spans and then count up a progressor of some kind to proceed with the dialogue.