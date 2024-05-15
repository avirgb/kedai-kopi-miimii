// Toggle Menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-btn').onclick = (e) => {
    searchForm.classList.toggle('active')
    searchBox.focus();
    e.preventDefault();
}

const searchBtn = document.querySelector('#search-btn');
document.addEventListener('click', function (e) {
    if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});
