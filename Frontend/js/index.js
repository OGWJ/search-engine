const showResults = require('./app.js')

const form = document.querySelector('#search-form');

form.addEventListener('submit', showResults);

document.getElementById('search-form').addEventListener('submit', function() {
    console.log('test success!');
});