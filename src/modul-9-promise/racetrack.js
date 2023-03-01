const horses = [
    'Secretariat',
    "Eclipse",
    "West Australian",
    "Flying Fox",
    "Seabiscuit"
];

// console.log('Заезд начался, ставки не принимаются!');
// console.log(`Победил ${1}, финишировал за ${1} времени`);
// console.log('Заезд окончен, ставки принимаются');

function run(horse) {
    return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

 setTimeout(() => {
    resolve(`Победил ${horse}, финишировал за ${time} времени`);
    }, time);

    })

};

console.log('Заезд начался, ставки не принимаются!');

const promises = horses.map(horse => run(horse));
console.log('promises',promises);

Promise.race(promises).then(x => console.log('x',x));

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
