(function() {
    'use strict';

    angular
        .module('cs499A2App')
        .controller('MagazineDialogController', MagazineDialogController);

    MagazineDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Magazine', 'Author'];

    function MagazineDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Magazine, Author) {
        var vm = this;

        vm.magazine = entity;
        vm.clear = clear;
        vm.save = save;
        vm.authors = Author.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.magazine.id !== null) {
                Magazine.update(vm.magazine, onSaveSuccess, onSaveError);
            } else {
                Magazine.save(vm.magazine, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('cs499A2App:magazineUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
