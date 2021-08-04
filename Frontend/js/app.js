async function getResults(e) {
    e.preventDefault();

    const search = e.target.searchBar.value;
    let response;

    // await fetch(`http://localhost:3000/${search}`)
    //     .then(result => response = result.text())
    //     .then(response => console.log(response))
    //     .catch(err => console.warn(err));
    let res = await fetch('http://localhost:3000/test')
    .then(response => response.text())
    .then(data => response = data)
    .catch(err => console.log(err));

    response = splitResponse(response);

    console.log(response);
    displayResults(response)
}

function splitResponse(str) {
    str = str.slice(1, str.length-2);
    let re = /\[.*?\]/g;
    str = str.match(re);
    return str;
}

function displayResults(response) {

    let body = document.querySelector('body');
    let results = '';

    for (item of response) {
        console.log(item);
        results += `<p>${item}</p>`
    }
    body.innerHTML = `<ul>${results}</ul>`;
}

module.exports = getResults;
