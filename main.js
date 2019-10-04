/* Functionality

Nav bar will condense for mobile and will handle click
events on the button to provide a popout menu.

On mobile the values section will display as a 3 stage 
slide show.

Each project will have a main color; on hover the main
color will become the background of the website. */


function handleNavClicks() {
    console.log('listening for nav clicks');
}

function handleProjectHover() {
    console.log('looking for project hovers');
}

function handleSlideshowClicks() {
    console.log('listening for slideshow clicks');
}

function valueSlideshow() {
    console.log('slideshow is running');
}

function portfolioListener() {
    handleNavClicks();
    handleProjectHover();
    handleSlideshowClicks();

    /*Non listener*/
    valueSlideshow();
}

/*callback function*/

$(portfolioListener);
