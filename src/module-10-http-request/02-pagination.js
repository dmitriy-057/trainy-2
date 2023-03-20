const refs = {
    searchForm: document.querySelector('.search-form-pagination'),
    articlesList: document.querySelector(".pg-articles")
};

refs.searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
    e.preventDefault();

// получаем значение с инпута
    const searchData = e.currentTarget.elements.query.value;
    console.log('Data input', searchData);

    const options = {
        headers: {
            Authorization: '4330ebfabc654a6992c2aa792f3173a3'
        }
    }
    const url = `https://newsapi.org/v2/everything?q=${searchData}&pageSize=10&page=1`;

    fetch(url, options)
    .then(r => r.json())
    .then(console.log)

    refs.searchForm.reset();
}

