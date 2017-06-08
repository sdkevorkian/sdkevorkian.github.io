angular.module('WorkApp', [])
    .factory('WorkFactory', function() {
        return {
            getProjects: function() {
                return [{
                    name: "Browsergotchi",
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'GIMP'],
                    github: 'https://github.com/sdkevorkian/browsergotchi',
                    liveSite: 'https://sdkevorkian.github.io/browsergotchi/',
                    imgUrl: 'images/work/browsergotchi.png'
                }]; // put array of projects here
            }
        };
    });
