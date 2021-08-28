/* Project Data Set */

const projects = [
  {
    id: 'CUID',
    title: 'Sports Quiz',
    image: 'images/sportsQuiz.jpg',
    description: 
      'This game was built for sports enthusiast; as it challenges your knowledge of sports icons and events. It was inspired by my love for sports and testing the historical knowledge of my friends.',
    hoverDescription:
      'This Sports Trivia Game is an application that tests your sports knowledge<span class="dots">...</span><button class="readMore">READ MORE</button><span class="moreText"> with random sports questions from different types of sports. Are you one of the GOATs or is your sports knowledge mediocre?</span><button class="readLess">READ LESS</button>',
    tech: 'HTML, CSS, JQuery',
    link: 'https://bcreighton.github.io/sportsTriviaGame/',
    repo: 'https://github.com/bcreighton/sportsTriviaGame',
    hoverColor: 'rgba(255, 125, 52, 0.75)',
    textColor: 'white'
  },
  {
    id: 'CUID',
    title: 'NBA Sphere',
    image: 'images/nbaSphere.jpg',
    description:
      'I have a passion for fantasy sports, I built an NBA news portal for fantasy basketball players to keep up with player and team news.',
    hoverDescription:
      'NBA Sphere is a one stop shop for NBA news and details<span class="dots">...</span><button class="readMore">READ MORE</button><span class="moreText"> for all players, teams, conferences and divisions around the NBA.</span><button class="readLess">READ LESS</button>',
    tech: 'HTML, CSS, Javascript, JQuery',
    link: 'https://bcreighton.github.io/nbaSphere/',
    repo: 'https://github.com/bcreighton/nbaSphere',
    hoverColor: 'rgba(23, 64, 139, 0.75)',
    textColor: 'white'
  },
  {
    id: 'CUID',
    title: '2/47 Recruit',
    image: '/images/247REcruit.png',
    description:
      'I operate in real estate and an issue I see every day is recruiting; so I built this as a pilot to help brokers recruit agents.',
    hoverDescription:
      'Targeted Real Estate Agent recruiting simplified!<span class="dots">...</span><button class="readMore">READ MORE</button><span class="moreText"> This pilot application is a the foundation of a larger vision behind the requirements of effective recruiting in the Real Estate Brokerage business.</span><button class="readLess">READ LESS</button>',
    tech: 'React, Node, Express, PostgreSQL',
    link: 'https://247recruit-app.vercel.app/',
    repo: 'https://github.com/bcreighton/247recruit-app',
    hoverColor: 'rgba(177, 117, 255, 0.75)',
    textColor: 'white'
  },
  {
    id: 'CUID',
    title: 'EMOLINGS',
    image: '/images/emolings.png',
    description:
      'My wife and I love communicating with our kids in a meaningful way; but do not see that in many parents. So I built this app to assist parents in creating better conversations with their children.',
    hoverDescription:
      'The modern age version of a feelings chart for Parents/Caregivers<span class="dots">...</span><button class="readMore">READ MORE</button><span class="moreText">  to create better conversations with children about the feelings and emotions they experience on a daily basis.</span><button class="readLess">READ LESS</button>',
    tech: 'React, Node, Express, PostgreSQL',
    link: 'https://emolings-app.vercel.app/',
    repo: 'https://github.com/bcreighton/emolings-app',
    hoverColor: 'rgba(242, 73, 73, 0.75)',
    textColor: 'white'
  }
];

const values = [
  {
    slide: 1,
    title: 'people',
    content:
      'People, meaning users, guide the path of design and development. Conversing and working along side people sets the foundation for an efficent process and more substantial profits.',
    image: 'images/people1.jpg'
  },
  {
    slide: 2,
    title: 'process',
    content:
      'I truly enjoy the process of development; without it there is no outcome. An agile approach allows for constant development and small iterative successes leading to project success and sustainable profits.',
    image: 'images/process.jpg'
  },
  {
    slide: 2,
    title: 'profit',
    content:
      "I believe profit is the result of a people driven process that's successfully deployed and constantly improved. Without sustainable profits there is no need for development.",
    image: 'images/profit.jpg'
  }
];

/* Functionality

Nav bar will condense for mobile and will handle click
events on the button to provide a popout menu.

On mobile the values section will display as a 3 stage 
slide show.

Each project will have a main color; on hover the main
color will become the background of the website. */

function handleNavClicks() {
  console.log('listening for nav clicks');
  $('.mobileNavButton').click(function() {
    if ($('.mobileMenuSpan').css('display') === 'block') {
      $('.mobileMenuSpan').css('display', 'none');
      $('.mobileNavClose').css('display', 'block');
      $('.mobileNav')
        .animate({
          height: 'toggle'
        })
        .css('display', 'block');
    } else {
      $('.mobileMenuSpan').css('display', 'block');
      $('.mobileNavClose').css('display', 'none');
      $('.mobileNav')
        .animate({
          height: 'toggle'
        })
        .css('display', 'none');
    }
  });
}

function generateValues(values) {
  for (let i = 0; i < values.length; i++) {
    $('.values').append(`
        <div class="value ${values[i]['title']}">
            <div class="content">
                <h2>${values[i]['title']}</h2>
                <p>${values[i]['content']}</p>
            </div>
        </div>
        `);
  }

  for (let i = 0; i < values.length; i++) {
    $('.mobileValues').append(`
        <div class="mobileValue fade ${values[i]['title']}">
            <div class="content">
                <h2>${values[i]['title']}</h2>
                <p>${values[i]['content']}</p>
            </div>
        </div>
        `);
  }
}

let valueIndex = 1;
let winWidth = $(window).width();

function windowSizeListener() {
  $(window).resize(function() {
    winWidth = $(window).width();
  });
  return winWidth;
}

function generateValueSlideshowButtons() {
  $('.mobileValues').append(
    `<a class="arrow prev">&#10094;</a>
            <a class="arrow next">&#10095;</a>`
  );
}

function slideShowButtonDisplay() {
  if (windowSizeListener() < 735) {
    $('.arrow').css('display', 'block');
  } else {
    $('.arrow').css('display', 'none');
  }
}

function nextValue(n) {
  valueSlideshow((valueIndex += n));
}

function valueSlideshow(n) {
  let i;
  const valueGroup = document.getElementsByClassName('mobileValue');

  if (n > valueGroup.length) {
    valueIndex = 1;
  }

  if (n < 1) {
    valueIndex = valueGroup.length;
  }

  for (i = 0; i < valueGroup.length; i++) {
    $(valueGroup[i]).css('display', 'none');
  }

  $(valueGroup[valueIndex - 1]).css('display', 'block');
}

function handleSlideshowClicks() {
  $('.mobileValues').on('click', '.arrow', function() {
    if ($(this).hasClass('prev') === true) {
      nextValue(-1);
    } else {
      nextValue(1);
    }
  });
}

function generateProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    $('.projectContainer').append(`
            <div class="project">
              <div class='projectPrelim'>
                <h3 class='title'>${projects[i]['title']} </h3>
                <p class = 'description'>${projects[i]['description']}</p>
              </div>
                <div class="projectTint">
                    <div class='content'>
                    <h3 class = 'projectTitle'>${projects[i]['title']}</h3>
                    <p class = 'projectDescription'>${projects[i]['hoverDescription']}</p>
                    <p class = 'techUsed'>${projects[i]['tech']}</p>
                        <div class = 'projectLinks'>
                            <a class = 'live' href='${projects[i]['link']}'>Live</a>
                            <a class = 'repo' href='${projects[i]['repo']}'>Repo</a>
                        </div>
                    </div>
                </div>
            </h3>
            `);
  }
}

function handleProjectHover() {
  console.log('looking for project hovers');
  $('.projectContainer').delegate('.project', 'mouseover mouseout', function(
    e
  ) {
    let projTitle;
    let bgColor;
    let bgImage;
    let fontColor;

    if (e.type == 'mouseover') {
      projTitle = $(this)
        .find('.projectTitle')
        .text();
      $(this)
        .find('.projectPrelim')
        .css('display', 'none');
      $(this)
        .find('.projectTint')
        .css('display', 'block');
      $(this)
        .find('.content')
        .css('display', 'block');

      fontColor = $.grep(projects, function(proj) {
        return proj.title === projTitle;
      })[0]['textColor'];
      bgColor = $.grep(projects, function(proj) {
        return proj.title === projTitle;
      })[0]['hoverColor'];
      bgImage = $.grep(projects, function(proj) {
        return proj.title === projTitle;
      })[0]['image'];
      $(this)
        .find('.content')
        .css('color', fontColor);
      $(this).css('background-image', `url('${bgImage}')`);
      $(this)
        .find('.projectTint')
        .css('background-color', bgColor);
      $('.project').css('background-color', bgColor);
      $('main .bgContainer').css('background-color', bgColor);
    } else if (e.type == 'mouseout') {
      $(this).css('background-image', 'none');
      $(this)
        .find('.projectTint')
        .css('display', 'none');
      $(this)
        .find('.content')
        .css('display', 'none');
      $(this)
        .find('.projectPrelim')
        .css('display', 'block');
      $(this).css('background-color', 'rgba(215, 201, 170, 1)');
      $('.project').css('background-color', 'rgba(226, 226, 226, 1)');
      $('main .bgContainer').css('background-color', 'rgba(247, 247, 247, 1)');
    }
  });
}

function handleReadMoreClicks() {
  const dots = document.getElementsByClassName('dots');
  const moreText = document.getElementsByClassName('moreText');
  const readMore = document.getElementsByClassName('readMore');

  $('.projectContainer').on('click', '.readMore', function() {
    if ($('.dots').css('display') === 'none') {
      $('.dots').css('display', 'inline');
      $('.readMore').css('display', 'inline');
      $('.moreText').css('display', 'none');
      $('.techUsed').css('display', 'block');
      $('.projectLinks').css('display', 'block');
    } else {
      $('.dots').css('display', 'none');
      $('.readMore').css('display', 'none');
      $('.moreText').css('display', 'inline');
      $('.readLess').css('display', 'inline');
      $('.techUsed').css('display', 'none');
      $('.projectLinks').css('display', 'none');
    }
  });

  $('.projectContainer').delegate('.project', 'mouseleave', function() {
    $('.dots').css('display', 'inline');
    $('.readMore').css('display', 'inline');
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
      $('.readMore').css('display', 'inline');
      $('.moreText').css('display', 'none');
      $('.readLess').css('display', 'none');
      $('.techUsed').css('display', 'block');
      $('.projectLinks').css('display', 'block');
    } else {
      $('.dots').css('display', 'none');
      $('.readMore').css('display', 'none');
      $('.moreText').css('display', 'inline');
      $('.readLess').css('display', 'inline');
      $('.techUsed').css('display', 'none');
      $('.projectLinks').css('display', 'none');
    }
  });
}

function handleContactClicks() {
  $('.cta').click(function() {
    $('.formPopupContainer').css('display', 'block');
  });
}

function handleFormCloseClick() {
  $('.formClose').click(function() {
    $('.formPopupContainer').css('display', 'none');
  });
}

function portfolioListener() {
  windowSizeListener();
  generateProjects(projects);
  generateValues(values);
  generateValueSlideshowButtons();
  handleNavClicks();
  handleProjectHover();
  handleReadMoreClicks();
  handleReadLessClicks();
  handleSlideshowClicks();
  handleContactClicks();
  handleFormCloseClick();
}

/*callback function*/

$(portfolioListener);
