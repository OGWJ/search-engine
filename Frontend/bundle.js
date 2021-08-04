(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const showResults = require('./app.js')

const form = document.querySelector('#search-form');

form.addEventListener('submit', showResults);

document.getElementById('search-form').addEventListener('submit', function() {
    console.log('test success!');
});
},{"./app.js":1}]},{},[2]);
