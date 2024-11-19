/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/*
// build the nav

//JavaScript code inside DOMContentLoaded event to make sure the script runs only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the navigation bar
    const navBar = document.querySelector('#navbar__list');

    const menuSections = document.querySelectorAll('section');

    menuSections.forEach(section => {
        // Get the 'data-nav' attribute from each section
        const navText = section.getAttribute('data-nav');
        
        // Create new list item and link elements
        const menuItem = document.createElement('li');
        const linkElement = document.createElement('a');

        // Add the menu__link class to the link elements
        linkElement.classList.add('menu__link');
        
        // Set the text of the link
        linkElement.innerHTML = navText;

        // Set href of the link with a '#' to correctly reference the ID
        const navLink = `#${section.getAttribute('id')}`;
        linkElement.href = navLink;

        // Add the 'data-*' attribute to the list item
        menuItem.setAttribute('data-view', navLink);
        
        // Append the link to the list item
        menuItem.appendChild(linkElement);
        
        // Append the list item to the navigation bar
        navBar.appendChild(menuItem);

        // Scroll to section on link click 
        linkElement.addEventListener('click', (event) => { 
            event.preventDefault();
            document.querySelector(navLink).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll event listener outside the forEach loop
    window.addEventListener('scroll', function () {
        console.log('Scrolling...'); // Add a log to check if the scroll event is firing
        menuSections.forEach(section => {
            const bounds = section.getBoundingClientRect();
            console.log(bounds);
            const isInViewport = bounds.top >= 0 && bounds.left >= 0 && bounds.right <= window.innerWidth && bounds.bottom <= window.innerHeight;
            const navLink = `#${section.getAttribute('id')}`;
            const linkElement = document.querySelector(`a[href="${navLink}"]`);
            
            if (isInViewport) {
                console.log(`Section ${section.id} is in viewport`);
                section.classList.add('active');
                linkElement.classList.add('nav-active');
            } else {
                console.log(`Section ${section.id} is not in viewport`);
                section.classList.remove('active');
                linkElement.classList.remove('nav-active');
            }
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const navBar = document.querySelector('#navbar__list');
    const menuSections = document.querySelectorAll('section');

    menuSections.forEach(section => {
        const navText = section.getAttribute('data-nav');
        const menuItem = document.createElement('li');
        const linkElement = document.createElement('a');

        linkElement.classList.add('menu__link');
        linkElement.innerHTML = navText;

        const navLink = `#${section.getAttribute('id')}`;
        linkElement.href = navLink;
        menuItem.setAttribute('data-view', navLink);
        menuItem.appendChild(linkElement);
        navBar.appendChild(menuItem);

        linkElement.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(navLink).scrollIntoView({ behavior: "smooth" });
            
            // Remove 'nav-active' from all list items
            document.querySelectorAll('.nav-active').forEach(activeItem => {
                activeItem.classList.remove('nav-active');
            });
            // Add 'nav-active' to the clicked item's parent <li>
            menuItem.classList.add('nav-active');
        });
    });

    // Helper function to remove 'nav-active' class from all list items
    function removeActiveClasses() {
        document.querySelectorAll('.nav-active').forEach(activeItem => {
            activeItem.classList.remove('nav-active');
        });
        document.querySelectorAll('section.active').forEach(activeSection => {
            activeSection.classList.remove('active');
        });
    }

    window.addEventListener('scroll', function () {
        let activeFound = false;

        menuSections.forEach(section => {
            const bounds = section.getBoundingClientRect();
            const isInViewport = bounds.top < window.innerHeight && bounds.bottom > 0;
            const navLink = `#${section.getAttribute('id')}`;
            const menuItem = document.querySelector(`li[data-view="${navLink}"]`);

            if (isInViewport && !activeFound) {
                removeActiveClasses();
                section.classList.add('active');
                menuItem.classList.add('nav-active');
                activeFound = true;
            }
        });

        if (!activeFound) {
            removeActiveClasses();
        }
    });

    // Trigger the scroll event on page load to set the initial state
    window.dispatchEvent(new Event('scroll'));
});


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active


