(function() {
    'use strict';

    angular
        .module('cs499A2App')
        .controller('MagazineDetailController', MagazineDetailController);

    MagazineDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Magazine', 'Author'];

    function MagazineDetailController($scope, $rootScope, $stateParams, previousState, entity, Magazine, Author) {
        var vm = this;

        vm.magazine = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('cs499A2App:magazineUpdate', function(event, result) {
            vm.magazine = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
