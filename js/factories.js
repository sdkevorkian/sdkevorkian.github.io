angular.module('WorkApp', [])
    .factory('WorkFactory', function() {
        return {
            getProjects: function() {
                return [{
                    name: "Doggleganger",
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Angular.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Petfinder API', 'GraphicsMagick\'s npm module'],
                    github: 'https://github.com/sdkevorkian/project-3',
                    liveSite: 'https://doggleganger.herokuapp.com/',
                    imgUrl: 'images/work/doggleganger.png',
                    description: "Doggleganger allows you to search for the perfect pet based on your percentage look-alike match. This was a three-person group project, and I was primarily responsible for the image comparison features, Angular.js implementation, troubleshooting, and deployment."
                }, {
                    name: "Browsergotchi",
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'GIMP'],
                    github: 'https://github.com/sdkevorkian/browsergotchi',
                    liveSite: 'https://sdkevorkian.github.io/browsergotchi/',
                    imgUrl: 'images/work/browsergotchi.png',
                    description: "Based on the tamagotchis of the 1990s, Browsergotchi is a game where you feed a pet and gain experience points. The higher your experience points, the better food and accessories that you can unlock! Don't forget to pick up the poop!"
                }, {
                    name: "Find Happy",
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Node.js', 'Express.js', 'Google Map + Geocode APIs', 'Yelp API', 'Sequelize', 'PostgreSQL'],
                    github: "https://github.com/sdkevorkian/find-happy",
                    liveSite: 'https://find-happy.herokuapp.com/',
                    imgUrl: "images/work/find-happy.png",
                    description: "Find Happy is a combined address book and Yelp search app. Users can preload addresses and save fun locations around that area! Perfect for travel planning."
                }]; // put array of projects here
            }
        };
    });
