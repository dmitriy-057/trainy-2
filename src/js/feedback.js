import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-msg';
const formData = {};
const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea:document.querySelector('.js-feedback-form textarea')
}

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextAreaInput, 1000));



populateMessage();

function onFormSubmit(e) {
    // Останавливаем обновление по умолчанию
    // Очищаем форму
    // Удаляем сообщение из хранилища 
    e.preventDefault();
    console.log('submit form');
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextAreaInput(evt) {
    // получаем значение поля 
    // сохраняем его в локальное хр-ще
    // можем добавить throttle
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}

function populateMessage() {
    // получаем значение из хранилища
    // если там что-то было обновляем DOM
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if(savedMessage) {
    console.log('saved message',savedMessage);
    refs.textarea.value = savedMessage;
  }
}


refs.form.addEventListener('input',(e)=> {
    formData[e.target.name] = e.target.value;
    console.log('formData', formData);

    localStorage.setItem('otziv',JSON.stringify(formData));

    const savedData = localStorage.getItem(formData);
    const parsedData = JSON.parse(savedData);
    console.log('parsed data', parsedData);




});