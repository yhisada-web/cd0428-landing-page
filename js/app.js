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

// build the nav

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


