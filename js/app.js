/**
 * This script manages a navigation bar that highlights the current section
 * of the page based on scrolling and clicking events. It creates a dynamic
 * menu from the sections present in the document and allows smooth scrolling
 * to those sections when their corresponding menu items are clicked.
 */

//DOMContentLoaded event to make sure the script runs only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the navigation bar and all sections in the document
    const navBar = document.querySelector('#navbar__list');
    const menuSections = document.querySelectorAll('section');
    let isScrolling = false; // Flag to track if a scroll event is in progress

    // Loop through each section to create corresponding menu items
    menuSections.forEach(section => {
        const navText = section.getAttribute('data-nav'); // Get the navigation text from data attribute
        const menuItem = document.createElement('li'); // Create a new list item for the menu
        const linkElement = document.createElement('a'); // Create a new anchor element for the link

        // Add class to the link for styling
        linkElement.classList.add('menu__link');
        linkElement.innerHTML = navText; // Set the inner HTML to the navigation text

        const navLink = `#${section.getAttribute('id')}`; // Create a link to the section's ID
        linkElement.href = navLink; // Set the href attribute of the link
        menuItem.setAttribute('data-view', navLink); // Set a data attribute for the menu item
        menuItem.appendChild(linkElement); // Append the link to the menu item
        navBar.appendChild(menuItem); // Append the menu item to the navigation bar

        // Add click event listener to the link
        linkElement.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            isScrolling = true; // Set scrolling flag to true
            document.querySelector(navLink).scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section

            // Remove 'nav-active' class from all list items
            document.querySelectorAll('.nav-active').forEach(activeItem => {
                activeItem.classList.remove('nav-active');
            });

            // Add 'nav-active' class to the clicked item's parent <li>
            menuItem.classList.add('nav-active');

            // Re-enable the scroll event listener after a short delay
            setTimeout(() => {
                isScrolling = false; // Reset scrolling flag
            }, 1000);
        });
    });

    /**
     * Helper function to remove 'nav-active' class from all menu items
     * and 'active' class from all sections.
     */
    function removeActiveClasses() {
        document.querySelectorAll('.nav-active').forEach(activeItem => {
            activeItem.classList.remove('nav-active'); // Remove active class from menu items
        });
        document.querySelectorAll('section.active').forEach(activeSection => {
            activeSection.classList.remove('active'); // Remove active class from sections
        });
    }

    // Add scroll event listener to the window
    window.addEventListener('scroll', function () {
        if (isScrolling) {
            return; // Prevent the scroll event from firing if it is in the middle of a click action
        }

        let activeFound = false; // Flag to track if an active section has been found

        // Loop through each section to determine which one is currently in view
        menuSections.forEach(section => {
            const bounds = section.getBoundingClientRect(); // Get the bounding rectangle of the section
            const isInViewport = bounds.top < window.innerHeight && bounds.bottom > 0; // Check if the section is in the viewport
            const navLink = `#${section.getAttribute('id')}`; // Create a link to the section's ID
            const menuItem = document.querySelector(`li[data-view="${navLink}"]`); // Select the corresponding menu item

            // If the section is in the viewport and no active section has been found yet
            if (isInViewport && !activeFound) {
                removeActiveClasses(); // Remove active classes from all items
                section.classList.add('active'); // Add active class to the current section
                menuItem.classList.add('nav-active'); // Add active class to the corresponding menu item
                activeFound = true; // Set the flag to indicate an active section has been found
            } 
        });
    });

    // Trigger the scroll event on page load to set the initial state
    window.dispatchEvent(new Event('scroll'));
});

