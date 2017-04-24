import angular from 'angular';
import Login from './login.service';

export default angular.module('coursesLoginModel', [])
    .factory('LoginFct', Login)
    .name;
