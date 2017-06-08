angular.module('WorkApp', [])
    .factory('WorkFactory', function() {
        return {
            getProjects: function() {
                return [{}]; // put array of projects here
            }
        };
    });
