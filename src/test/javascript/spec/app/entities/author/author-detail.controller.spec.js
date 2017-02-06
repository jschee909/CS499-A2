'use strict';

describe('Controller Tests', function() {

    describe('Author Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockAuthor, MockBook, MockMagazine;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockAuthor = jasmine.createSpy('MockAuthor');
            MockBook = jasmine.createSpy('MockBook');
            MockMagazine = jasmine.createSpy('MockMagazine');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Author': MockAuthor,
                'Book': MockBook,
                'Magazine': MockMagazine
            };
            createController = function() {
                $injector.get('$controller')("AuthorDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'cs499A2App:authorUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
