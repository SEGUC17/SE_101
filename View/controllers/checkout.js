angular.module('checkOutCtrl',['CartInfo']).
controller('CheckOutController',['CartInfo'], function(){
    var vm = this;
    var cart=checkOutService.checkOutFactory.cart;
		vm.total=cart.total;
    vm.products=cart.products;
    vm.plan=cart.plan;
	});
