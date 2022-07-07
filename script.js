const homeLinks = document.querySelectorAll(".main_link");
const navLink = homeLinks[0];
const aboutLink = homeLinks[1];
const projectsLink = homeLinks[2];
const contactLink = homeLinks[3];

const homeLinkPopup = document.querySelector('#test1');

function toggleShow(element) {
    element.classList.add('show');
    element.classList.remove('hidden');
}

function toggleHidden(element) {
    element.classList.add('hidden');
    element.classList.remove('show');
}

navLink.addEventListener('mouseover', function () {
    console.log("The nav link was pressed on by the user");
    toggleShow(homeLinkPopup);
})

navLink.addEventListener('mouseout', function () {
    console.log("user left the nav");
    toggleHidden(homeLinkPopup);
})


