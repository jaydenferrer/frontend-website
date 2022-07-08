const homeLinks = document.querySelectorAll(".main_link");
const navLink = homeLinks[0];
const aboutLink = homeLinks[1];
const projectsLink = homeLinks[2];
const contactLink = homeLinks[3];

const mainNav = document.querySelector('#main_navigation');

const homeLinkPopup = document.querySelector('#test1');

const mainHamburgerIcon = document.querySelector('#main_nav_hamburger');


const mediaQuery500px = window.matchMedia('(max-width: 500px)');

// if (mediaQuery500px.matches) {
//     console.log("view port is 500px");
// }

// eventListener that checks if viewport is 500px and toggles visibility of main nav

// have to fix issue that when you originally load the page at a smaller viewport, it waits until a change occurs 
// seems to be fixed when you set the default at 500px to be hidden in media query
mediaQuery500px.addEventListener('change', function () {
    console.log('viewport is 500px');
    // if viewport less than 500px, then make it hidden
    if (mediaQuery500px.matches === true) {
        // make ul hidden
        visibilityOff(mainNav);
    }
    else {
        // remove class list?
        visibilityOn(mainNav);
    }
});

function checkVisibility(element) {
    let elementClassList = element.classList;

    // if element doesn't have a class, mean it has to be visible
    if (elementClassList.length === 0) {
        return true;
    }

    // loop through the classlist collection/array and check if ANY of its classes are equal to 'hidden', if equal return false (will cause function to return and stop)
    for (let i = 0 ; i < elementClassList.length ; i++) {
        if (elementClassList[i] === 'visibility-off' || elementClassList[i] === 'hidden') return false;
    }
    // if reaches here, mean no elements have a class of hidden and hence, element doesn't have a class of hidden and is visible
    return true;
}


function visibilityOn(element) {
    element.classList.add('visibility-on');
    element.classList.remove('visibility-off');
}

function visibilityOff(element) {
    element.classList.add('visibility-off')
    element.classList.remove('visibility-on');
}

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

mainHamburgerIcon.addEventListener('click', function () {
    // if the mainHamburger is visible, then when it is clicked we want to hide
    if (checkVisibility(mainNav)) {
        // hide the menu
        visibilityOff(mainNav);
    }
    else {
        // show the menu
        visibilityOn(mainNav);
    }
})

