function ContactController() {
  var vm = this;

  vm.name = 'Bill Gates';
  vm.phone = '01234567890';
  vm.email = 'Microsoft@hotmail.com';


  this.changeName = function () {
    vm.name = 'Satya Nadella'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
