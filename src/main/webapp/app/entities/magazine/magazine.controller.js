(function() {
    'use strict';

    angular
        .module('cs499A2App')
        .controller('MagazineController', MagazineController);

    MagazineController.$inject = ['$scope', '$state', 'Magazine'];

    function MagazineController ($scope, $state, Magazine) {
        var vm = this;

        vm.magazines = [];

        loadAll();

        function loadAll() {
            Magazine.query(function(result) {
                vm.magazines = result;
                vm.searchQuery = null;
            });
        }
    }
})();
