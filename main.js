/* Project Data Set */

const projects = [
    {
        id: 'CUID',
        title: 'Sports Quiz',
        image: 'images/sportsQuiz.jpg',
        description: 'The Sports Trivia Game is an application that tests your sports knowledge<span class="dots">...</span><button class="readMore">Read More</button><span class="moreText"> with random sports questions from different types of sports. Are you one of the GOATs or is your sports knowledge mediocre?</span><button class="readLess">Read Less</button>',
        tech: 'HTML, CSS, JQuery',
        link: 'https://bcreighton.github.io/sportsTriviaGame/',
        repo: 'https://github.com/bcreighton/sportsTriviaGame',
        hoverColor: 'rgba(255, 0, 0, 0.5)'
    },
    {
        id: 'CUID',
        title: 'Project 2',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae<span class="dots">...</span><button class="readMore">Read More</button><span class="moreText"> iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.</span><button class="readLess">Read Less</button>',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'rgba(255, 255, 0, 0.5)'
    },
    {
        id: 'CUID',
        title: 'Project 3',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae<span class="dots">...</span><button class="readMore">Read More</button><span class="moreText"> iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.</span><button class="readLess">Read Less</button>',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'rgba(0, 128, 0, 0.5)'
    },
    {
        id: 'CUID',
        title: 'Project 4',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae<span class="dots">...</span><button class="readMore">Read More</button><span class="moreText"> iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.</span><button class="readLess">Read Less</button>',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'rgba(128, 0, 128, 0.5)'
    },
    {
        id: 'CUID',
        title: 'Project 5',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae<span class="dots">...</span><button class="readMore">Read More</button><span class="moreText"> iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.</span><button class="readLess">Read Less</button>',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'rgba(255, 192, 203, 0.5)'
    },
    {
        id: 'CUID',
        title: 'Project 6',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae<span class="dots">...</span><button class="readMore">Read More</button><span class="moreText"> iaculis erat. Phasellus id ante sem. Sed dui metus, vulputate at tempor a, luctus in elit. Sed pulvinar dolor a nulla sodales, eu malesuada nisi malesuada.</span><button class="readLess">Read Less</button>',
        tech: 'HTML, CSS, JQuery',
        link: 'http',
        repo: 'http',
        hoverColor: 'rgba(0, 0, 255, 0.5)'
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
            <div class="projectTint">
                <div class='content'>
                    <h3 class = 'projectTitle'>${projects[i]['title']}</h3>
                    <p class = 'projectDescription'>${projects[i]['description']}</p>
                    <p class = 'techUsed'>${projects[i]['tech']}</p>
                    <div class = 'projectLinks'>
                        <a class = 'live' href='${projects[i]["link"]}'>Live</a>
                        <a class = 'repo' href='${projects[i]["repo"]}'>Repo</a>
                    </div>
                </div>
            </div>
            `);
    }
}

function handleProjectHover() {
    console.log('looking for project hovers');
    $('.projectContainer').delegate('.project', 'mouseover mouseout', function(e) {

        let projTitle;
        let bgColor;
        let bgImage;

        if(e.type == 'mouseover') {
            projTitle = $(this).find('.projectTitle').text();
            $(this).find('.projectTint').css('display', 'block');
            $(this).find('.content').css('display', 'block');
            bgColor = $.grep(projects, function(proj){
                    return proj.title === projTitle;
                    })
                    [0]['hoverColor'];
            bgImage = $.grep(projects, function(proj){
                return proj.title === projTitle;
                })
                [0]['image'];
            $(this).css('background-image',`url('${bgImage}')`);
            $(this).find('.projectTint').css('background-color', bgColor);
            $('.project').css('background-color', bgColor);
            $('body').css('background-color', bgColor);
        } else if(e.type == 'mouseout') {
            $(this).css('background-image','none');
            $(this).find('.projectTint').css('display', 'none');
            $(this).find('.content').css('display', 'none');
            $(this).css('background-color', 'rgba(215, 201, 170, 1)');
            $('.project').css('background-color', 'rgba(226, 226, 226, 1)');
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

function handleReadMoreClicks() {
    const dots = document.getElementsByClassName('dots');
    const moreText = document.getElementsByClassName('moreText');
    const readMore = document.getElementsByClassName('readMore');

    $('.projectContainer').on('click', '.readMore', function() {
        if ($('.dots').css('display') === 'none') {
            $('.dots').css('display', 'inline');
            $('.readMore').css('display','inline');
            $('.moreText').css('display', 'none');
            $('.techUsed').css('display', 'block');
            $('.projectLinks').css('display', 'block');
        } else {
            $('.dots').css('display', 'none');
            $('.readMore').css('display','none');
            $('.moreText').css('display', 'inline');
            $('.readLess').css('display', 'inline');
            $('.techUsed').css('display', 'none');
            $('.projectLinks').css('display', 'none');
        }
    });

    $('.projectContainer').delegate('.project', 'mouseleave', function() {
        $('.dots').css('display', 'inline');
        $('.readMore').css('display','inline');
        $('.moreText').css('display', 'none');
        $('.readLess').css('display', 'none');
        $('.techUsed').css('display', 'block');
        $('.projectLinks').css('display', 'block');
    });
}

function handleReadLessClicks() {
    const dots = document.getElementsByClassName('dots');
    const moreText = document.getElementsByClassName('moreText');
    const readMore = document.getElementsByClassName('readMore');

    $('.projectContainer').on('click', '.readLess', function() {

        if ($('.dots').css('display') === 'none') {
            $('.dots').css('display', 'inline');
            $('.readMore').css('display','inline');
            $('.moreText').css('display', 'none');
            $('.readLess').css('display', 'none');
            $('.techUsed').css('display', 'block');
            $('.projectLinks').css('display', 'block');
        } else {
            $('.dots').css('display', 'none');
            $('.readMore').css('display','none');
            $('.moreText').css('display', 'inline');
            $('.readLess').css('display', 'inline');
            $('.techUsed').css('display', 'none');
            $('.projectLinks').css('display', 'none');
        }
    });
}



function portfolioListener() {
    generateProjects(projects);
    handleNavClicks();
    handleProjectHover();
    handleSlideshowClicks();
    handleReadMoreClicks();
    handleReadLessClicks();
    
    /*Non listener*/
    valueSlideshow();
}

/*callback function*/

$(portfolioListener);
