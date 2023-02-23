
const refs = {
    startBtn: document.querySelector("button[data-action-start]"),
    stopBtn: document.querySelector("button[data-action-stop]"),
    clockface: document.querySelector(".js-clockface")
};

class Timer {
constructor({onTick}) {
    this.onTick = onTick;
    this.intervalId = null;
    this.isActive = false; 

    this.init()
};
    start() {
        if(this.isActive) {
            return;
        };

        this.isActive = true;
        console.log('Таймер запущен');
        const startTime = Date.now();
            
    this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
            // updateClockface(time);
        }, 1000);
    };
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
        console.log('Таймер остановлен')
    };

// Принимает время в милисекундах;
// Высчитывает сколько в них вмещается часов/минут/секунд;
    getTimeComponents(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60) / (1000 * 60))));
        const secs = this.pad(Math.floor((time % (1000 * 60) / 1000)));

        return {hours, mins, secs}; 
    };

// Принимает число, приводит к строке, и добавляет в начале 0 если число меньше 2-х знаков;
    pad(value) {
        return String(value).padStart(2, "0");
    };

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);        
    }
}; 

const timer = new Timer({
    onTick: updateClockface
});

refs.startBtn.addEventListener('click', ()=> {
    timer.start();
 });
 refs.stopBtn.addEventListener('click', ()=> {
     timer.stop();
 });

// const timer = {
//     intervalId: null,
//     isActive: false,

// start() {
//     if(this.isActive) {
//         return;
//     };

//     this.isActive = true;
//     console.log('Таймер запущен');
//     const startTime = Date.now();
        
//    this.intervalId = setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = currentTime - startTime;
//         const time = getTimeComponents(deltaTime);
//         // console.log(`${hours}: ${mins}: ${secs}`);
//         console.log(`${pad(new Date(deltaTime).getUTCHours())}: ${pad(new Date(deltaTime).getMinutes())}: ${pad(new Date(deltaTime).getSeconds())}`);

//         updateClockface(time);
//     }, 1000);
//     },

// stop() {
//     this.isActive = false;
//     console.log('Таймер остановлен')
//     clearInterval(this.intervalId);
// }
// };



/*  функция updateClockface
    - Принимает время в милисекундах;
    - Высчитывает сколько в них вмещается часов/минут/секунд;
    - Рисует интерфейс;
*/
function updateClockface({hours, mins, secs}) {
    refs.clockface.textContent = `${hours}: ${mins}: ${secs}`;
}
// Принимает время в милисекундах;
// Высчитывает сколько в них вмещается часов/минут/секунд;
// 
// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60) / (1000 * 60))));
//     const secs = pad(Math.floor((time % (1000 * 60) / 1000)));

//     return {hours, mins, secs}; 
// };

// Принимает число, приводит к строке, и добавляет в начале 0 если число меньше 2-х знаков;
// function pad(value) {
//     return String(value).padStart(2, "0");
// };