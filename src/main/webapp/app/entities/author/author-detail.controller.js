(function() {
    'use strict';

    angular
        .module('cs499A2App')
        .controller('AuthorDetailController', AuthorDetailController);

    AuthorDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Author', 'Book', 'Magazine'];

    function AuthorDetailController($scope, $rootScope, $stateParams, previousState, entity, Author, Book, Magazine) {
        var vm = this;

        vm.author = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('cs499A2App:authorUpdate', function(event, result) {
            vm.author = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
