var book1 = document.getElementById('book1');
var book2 = document.getElementById('book2');
var logo = document.getElementById('logo');
var topOlive = document.getElementById('top-olive');
var bottomOlive = document.getElementById('bottom-olive');
var main = document.querySelector('.main');
var navLinks = document.querySelectorAll('header ul li a');
var sections = [];

for (var i = 0; i < navLinks.length; i++) {
    var sectionId = navLinks[i].getAttribute('href');
    var section = document.querySelector(sectionId);

    if (section) {
        sections.push(section);
    }
}

function updateActiveLink() {
    var currentSection = 'home';
    var activationPoint = scrollY + window.innerHeight * 0.6;
    var reachedPageEnd = window.innerHeight + scrollY >= document.body.offsetHeight - 2;

    for (var i = 0; i < sections.length; i++) {
        if (activationPoint >= sections[i].offsetTop) {
            currentSection = sections[i].getAttribute('id');
        }
    }

    if (reachedPageEnd && sections.length > 0) {
        currentSection = sections[sections.length - 1].getAttribute('id');
    }

    for (var j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('act');

        if (navLinks[j].getAttribute('href') == '#' + currentSection) {
            navLinks[j].classList.add('act');
        }
    }
}

function moveHero() {
    var value = scrollY;
    var moveBooks = Math.min(value * 2, window.innerWidth / 2 + 120);
    var showHero = value < main.offsetHeight - window.innerHeight;

    book1.style.transform = 'translateX(-' + moveBooks + 'px)';
    book2.style.transform = 'translateX(' + moveBooks + 'px)';

    book1.classList.toggle('hide-hero', !showHero);
    book2.classList.toggle('hide-hero', !showHero);
    logo.classList.toggle('hide-hero', !showHero);
    topOlive.classList.toggle('hide-hero', !showHero);
    bottomOlive.classList.toggle('hide-hero', !showHero);
    updateActiveLink();
}

window.onscroll = moveHero;
moveHero();
