(function() {
    'use strict';

    angular
        .module('cs499A2App')
        .controller('AuthorDialogController', AuthorDialogController);

    AuthorDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Author', 'Book', 'Magazine'];

    function AuthorDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Author, Book, Magazine) {
        var vm = this;

        vm.author = entity;
        vm.clear = clear;
        vm.save = save;
        vm.books = Book.query();
        vm.magazines = Magazine.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.author.id !== null) {
                Author.update(vm.author, onSaveSuccess, onSaveError);
            } else {
                Author.save(vm.author, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('cs499A2App:authorUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
