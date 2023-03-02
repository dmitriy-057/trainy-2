const horses = [
    'Secretariat',
    "Eclipse",
    "West Australian",
    "Flying Fox",
    "Seabiscuit"
];

const refs = {
    startBtn: document.querySelector('.js-race-btn'),
    winnerField: document.querySelector(".js-winner"),
    progressField: document.querySelector(".js-progress"),
    tableBody: document.querySelector(".js-results-table > tbody")
};

refs.startBtn.addEventListener('click', ()=> {
    const promises = horses.map(horse => run(horse));
    console.log('Promises', promises);

    updateWinner("");
    updateProgress("Заезд начался, ставки не принимаются!");

    Promise.race(promises).then(({horse, time}) => {

    updateWinner(`Победил ${horse}, финишировал за ${time} времени`);
    updateResultsTable({horse, time});
    }
    );

    Promise.all(promises)
    .then(() => updateProgress('Заезд окончен, ставки принимаются'));
});


function updateWinner(message) {
    refs.winnerField.textContent = message;
};

function updateProgress(message) {
    refs.progressField.textContent = message;
};

function updateResultsTable({ horse, time }) {
    const tr = `
    <tr>
        <td>0</td>
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





