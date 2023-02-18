import BSN from 'bootstrap.native';

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPS = 3;

const refs = {
    modal: document.querySelector('.modal')
};

const modal = new BSN.Modal('.modal');
console.log(modal);

refs.modal.addEventListener('hide.bs.modal', ()=> {
    console.log('qwdqwqwdewefwe');

    setTimeout(()=> {
        console.log("Открывает модалку");
        modal.show();
    
    }, PROMPT_DELAY);
})


setTimeout(()=> {
    console.log("Открывает модалку");
    modal.show();

}, PROMPT_DELAY);


// let promptCounter = 0;
// let hasSubscribed = true;

// const intervalId = setInterval(() => {

//     if(promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
//         console.log('Интревал удален')
//         clearInterval(intervalId);
//         return;
//     };

//     console.log('Подпишись на расслыку! - ' + Date.now());
//     promptCounter += 1;

// }, PROMPT_DELAY);
