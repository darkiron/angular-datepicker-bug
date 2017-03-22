export default class testController{
    constructor($scope , $mdDialog){
    
    	this.$scope = $scope;
    	this.$mdDialog = $mdDialog;

	}

    open(ev){
        this.$mdDialog.show({
                controller:function(){},
                templateUrl: './../src/components/test/template.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: this.$scope.customFullscreen // Only for -xs, -sm breakpoints.
        })   ;
    }


}

testController.$inject = [
	'$scope',
	'$mdDialog', 
	
]