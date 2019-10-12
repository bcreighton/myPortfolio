/* Project Data Set */

const projects = [
    {
        id: 'CUID',
        title: 'Sports Quiz',
        image: 'images\sportsQuiz.jpg',
        description: 'The Sports Trivia Game is an application that tests your sports knowledge with random sports questions from different types of sports. Are you one of the GOATs or is your sports knowledge mediocre?',
        tech: 'HTML, CSS, JQuery',
        link: 'https://bcreighton.github.io/sportsTriviaGame/',
        repo: 'https://github.com/bcreighton/sportsTriviaGame',
        hoverColor: 'red'
    },
    {
        id: 'CUID',
        title: 'Project 2',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'yellow'
    },
    {
        id: 'CUID',
        title: 'Project 3',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'green'
    },
    {
        id: 'CUID',
        title: 'Project 4',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'purple'
    },
    {
        id: 'CUID',
        title: 'Project 5',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'pink'
    },
    {
        id: 'CUID',
        title: 'Project 6',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'blue'
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

function generateProjects(projects) {
    for (let i = 0; i < projects.length; i++) {
        $('.projectContainer').append(`
            <div class="project">
            <div class="content">
                <h3 class = 'projectTitle'>${projects[i]['title']}</h3>
                <p class = 'projectDescription'>${projects[i]['description']}</p>
            </div>
            `);
    }
}

function handleProjectHover() {
    console.log('looking for project hovers');
    $('.projectContainer').delegate('.project', 'mouseover mouseout', function(e) {

        let projTitle;
        let bgColor;

        if(e.type == 'mouseover') {
            projTitle = $(this).find('.projectTitle').text();
            $(this).find('.content').css('display', 'block');
            bgColor = $.grep(projects, function(proj){
                    return proj.title === projTitle;
                    })
                    [0]['hoverColor'];
            $(this).css('background-color', bgColor);
            $('body').css('background-color', bgColor);
        } else if(e.type == 'mouseout') {
            $(this).find('.content').css('display', 'none');
            $(this).css('background-color', 'rgba(215, 201, 170, 1)');
            $('body').css('background-color', 'rgba(247, 247, 247, 1)');
        }
    });
}

function handleSlideshowClicks() {
    console.log('listening for slideshow clicks');
}

function valueSlideshow() {
    console.log('slideshow is running');
}

function portfolioListener() {
    generateProjects(projects);
    handleNavClicks();
    handleProjectHover();
    handleSlideshowClicks();

    /*Non listener*/
    valueSlideshow();
}

/*callback function*/

$(portfolioListener);
