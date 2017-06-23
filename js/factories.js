angular.module('WorkApp', [])
    .factory('WorkFactory', function() {
        return {
            getProjects: function() {
                return [{
                    name: "Doggleganger",
                    technologies: "HTML5, CSS3, JavaScript, Angular.js, Node.js, Express.js, MongoDB, JWT, Petfinder API, GraphicsMagick\'s npm module",
                    github: 'https://github.com/sdkevorkian/project-3',
                    liveSite: 'https://doggleganger.herokuapp.com/',
                    imgUrl: 'images/work/doggleganger.png',
                    description: "Doggleganger allows you to search for the perfect pet based on your percentage look-alike match. This was a three-person group project, and I was primarily responsible for the image comparison features, Angular.js implementation, troubleshooting, and deployment.",
                    contributors: [{ name: "Alaina Buzas" }, { name: "Andrew Tsujimoto", link: "http://www.andrewtsujimoto.com" }, { name: "Mark Goldstein", link: "http://markdgold.github.io" }, { name: "Peter Amadon" }, { name: "Ben Frates (UX/UI)", link: "https://www.benfrates.com/" }]
                }, {
                    name: "Chronotron",
                    technologies: "HTML5, CSS3, JavaScript, JQuery, Ruby on Rails, Youtube API, Trails API, Spotify API, Open Trivia API, Open Weather API, Google Analytics",
                    github: 'https://github.com/sdkevorkian/chronotron',
                    liveSite: 'https://chronotron.herokuapp.com/',
                    imgUrl: 'images/work/chronotron.png',
                    description: "“There's never enough time to do all the nothing you want.” Give Chronotron an amount of time you need to spend and it will provide you enough content to fill that void. This project was created by a 5 person dev team working with 1 UX/UI Consultant. My responsibilities were the music section, the homepage and side navbar logic, deployment, troubleshooting, and implementing suggestions from the UX/UI consultant.",
                    contributors: [{ name: "Alaina Buzas" }, { name: "Andrew Tsujimoto", link: "http://www.andrewtsujimoto.com" }]
                }, {
                    name: "Browsergotchi",
                    technologies: "HTML5, CSS3, JavaScript, JQuery, GIMP",
                    github: 'https://github.com/sdkevorkian/browsergotchi',
                    liveSite: 'https://sdkevorkian.github.io/browsergotchi/',
                    imgUrl: 'images/work/browsergotchi.png',
                    description: "Based on the tamagotchis of the 1990s, Browsergotchi is a game where you feed a pet and gain experience points. The higher your experience points, the better food and accessories that you can unlock! Don't forget to pick up the poop!"
                }, {
                    name: "Find Happy",
                    technologies: "HTML5, CSS3, JavaScript, JQuery, Node.js, Express.js, Google Map + Geocode APIs, Yelp API, Sequelize, PostgreSQL",
                    github: "https://github.com/sdkevorkian/find-happy",
                    liveSite: 'https://find-happy.herokuapp.com/',
                    imgUrl: "images/work/find-happy.png",
                    description: "Find Happy is a combined address book and Yelp search app. Users can preload addresses and save fun locations around that area! Perfect for travel planning."
                }, {
                    name: "One Snooze Away",
                    technologies: "HTML5, CSS3, JavaScript, Angular.js, Node.js, Express.js, MongoDB, King County Transit Data, JWT",
                    github: "https://github.com/sdkevorkian/stop-alarm",
                    liveSite: 'https://onesnoozeaway.herokuapp.com/',
                    imgUrl: "images/work/onesnoozeaway.png",
                    description: "One Snooze Away is here to make sure you never sleep through your stop again. Simply search for your destination, set an alarm, and take a nap. We'll wake you up when the bus is approaching your stop. One Snooze Away was created by two devs as a part of a one-day,  MEAN Hackathon. I took on a back-end role and handled the Node.js/Express.js routing, MongoDB implementation, and Angular.js logic.",
                    contributors: [{ name: "Alaina Buzas" }]
                }];
            }
        };
    });
