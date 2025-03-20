<<<<<<< HEAD
const navElement = document.querySelector('nav');
const navbarLinks = navElement.querySelectorAll('a');
const sectionElements = document.querySelectorAll('section');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveLinks();
        hideSections();
        link.parentElement.classList.add('active');
        const sectionElement = document.querySelector(link.hash);
        sectionElement.classList.remove('hidden');
    });
});

const removeActiveLinks = () => {
    navbarLinks.forEach(link => link.parentElement.classList.remove('active'));
};
const hideSections = () => {
    sectionElements.forEach(section => section.classList.add('hidden'));
};
=======
const addButtonElement = document.getElementById('counterAdd')
const subButtonElement = document.getElementById('counterSub');
const counterDisplayElement = document.getElementById('counterDisplay');

let total = 0;
const limit = 20;

const updateCounterDisplay = function() {
    if (total > limit) {
        total = limit;
    }

    if (total < 0) {
        total = 0;
    }

    counterDisplayElement.textContent = total;
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`)
};

addButtonElement.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
});

subButtonElement.addEventListener('click', () => {
    total -=1;
    updateCounterDisplay();
});

updateCounterDisplay();
>>>>>>> 61b5bc8 (first commit)
