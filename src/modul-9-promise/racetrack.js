const horses = [
    'Secretariat',
    "Eclipse",
    "West Australian",
    "Flying Fox",
    "Seabiscuit"
];

let raceCounter = 0;

const refs = {
    startBtn: document.querySelector('.js-race-btn'),
    winnerField: document.querySelector(".js-winner"),
    progressField: document.querySelector(".js-progress"),
    tableBody: document.querySelector(".js-results-table > tbody")
};

refs.startBtn.addEventListener('click', onStartBtnCLick);

function onStartBtnCLick() {
    raceCounter +=1;

    const promises = horses.map(horse => run(horse));
    console.log('Promises', promises);

    updateWinner("");
    updateProgress("Заезд начался, ставки не принимаются!");
    findWinner(promises);
    waitForAll(promises);
};

function findWinner(horsesP) {
    Promise.race(horsesP).then(({horse, time}) => {

        updateWinner(`Победил ${horse}, финишировал за ${time} времени`);
        updateResultsTable({horse, time, raceCounter});
        }
        );
};

function waitForAll(horsesP) {
    Promise.all(horsesP)
    .then(() => updateProgress('Заезд окончен, ставки принимаются'));
}

function updateWinner(message) {
    refs.winnerField.textContent = message;
};

function updateProgress(message) {
    refs.progressField.textContent = message;
};

function updateResultsTable({ horse, time, raceCounter }) {
    const tr = `
    <tr>
        <td>${raceCounter}</td>
        <td>${horse}</td>
        <td>${time}</td>
    </tr>`;

    refs.tableBody.insertAdjacentHTML("beforeend", tr);

}

function run(horse) {
    return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

 setTimeout(() => {
    resolve({horse, time});
    }, time);

    })

};


function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// Promise.race(promises).then(({horse, time})=> console.log(`%c Победил ${horse}, финишировал за ${time} времени`, 'color: yellow; font-size: 16px'));





