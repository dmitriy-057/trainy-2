console.log('localStorage', localStorage);

localStorage.setItem('my-data', JSON.stringify({name: 'Dima', age: 25}));

const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);

const parseData = JSON.parse(savedData);
console.log('parseData', parseData);