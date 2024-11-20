# Landing Page Project

## Project description
The Javascript manages a navigation bar that highlights the current section of the page based on scrolling and clicking events. It creates a dynamic menu from the sections present in the document and allows smooth scrolling to those sections when their corresponding menu items are clicked.

## Features
    1. Navigation Bar Construction:
        Selects the #navbar__list element.
        Selects all section elements.
        Iterates over each section, creating list items and links, setting the href attributes correctly, and appending them to the navigation bar.

    2. Smooth Scroll:
        Adds event listeners to the links that prevent the default jump and instead scroll smoothly to the target section.

    3. Active Section Highlight:
        Adds a scroll event listener to the window.
        Checks if each section is in the viewport and toggles the active class accordingly.
