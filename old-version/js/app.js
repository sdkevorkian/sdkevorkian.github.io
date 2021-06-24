angular.module('Portfolio', ['WorkApp'])
    .controller('WorkCtrl', ['$scope', 'WorkFactory', function($scope, WorkFactory) {

        $scope.projects = WorkFactory.getProjects();



    }]);
