function StaffController() {
  this.name = 'Steve Jobs';
  this.phone = '01234567890';
  this.email = 'apple@icloud.com';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
