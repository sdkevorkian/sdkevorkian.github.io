angular.module('Portfolio', ['WorkApp'])
    .controller('WorkCtrl', ['$scope', 'WorkFactory', function($scope, WorkFactory) {
        projects = WorkFactory.getProjects();
        console.log(projects);
    }]);
