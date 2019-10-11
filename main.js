/* Project Data Set */

const projects = [
    {
        id: CUID,
        title: 'Sports Quiz',
        Description: 'The Sports Trivia Game is an application that tests your sports knowledge with random sports questions from different types of sports. Are you one of the GOATs or is your sports knowledge mediocre?',
        tech: 'HTML, CSS, JQuery',
        link: 'https://bcreighton.github.io/sportsTriviaGame/',
        repo: 'https://github.com/bcreighton/sportsTriviaGame'
    },
    {
        id: CUID,
        title: 'Project',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http'
    },
    {
        id: CUID,
        title: 'Project',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http'
    },
    {
        id: CUID,
        title: 'Project',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http'
    }
]


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
