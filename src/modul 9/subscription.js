import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector('.modal'),
    subscribeBtn: document.querySelector('button[data-bs-subscribe]'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const modal = new BSN.Modal('.modal');
console.log(modal);

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {

    if(promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
        console.log("максимальное кол-во открытий или подписался");
        return;
    };

   setTimeout(()=> {
        console.log("Открывает модалку");
        modal.show();
        promptCounter += 1;
    }, PROMPT_DELAY);

}

function onSubscribeBtnClick() {
    hasSubscribed = true;
    modal.hide();
}

// 

// const intervalId = setInterval(() => {

//     if(promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
//         console.log('Интревал удален')
//         clearInterval(intervalId);
//         return;
//     };

//     console.log('Подпишись на расслыку! - ' + Date.now());
//     promptCounter += 1;

// }, PROMPT_DELAY);
