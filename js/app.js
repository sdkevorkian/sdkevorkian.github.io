angular.module('Portfolio', ['WorkApp'])
    .controller('WorkCtrl', ['$scope', 'WorkFactory', function($scope, WorkFactory) {

        $scope.projects = WorkFactory.getProjects();

        $scope.animateElementIn = function($el) {
            $el.removeClass('not-visible');
            $el.addClass('fadeInLeftBig');
        };

    }]);
