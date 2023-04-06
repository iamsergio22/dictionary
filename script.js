const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '94cdfc6384mshb427dc33c83833bp138afcjsnd9fd85e1a051',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Inputword.innerHTML = response.word;
            definition.innerHTML = response.definition;
        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchinput.value)
})