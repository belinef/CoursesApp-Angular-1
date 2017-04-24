import angular from 'angular';

import template from './view-login.html';
import './view-login-style.css';

import LoginController from './view-login.controller';

export default angular.module('coursesLogin', [])
    .config(/*@ngInject*/$stateProvider => {
        $stateProvider
            .state('main.login', {
                url: 'login',
                template: template,
                controller: 'LoginController',
                controllerAs: 'view'
            });
    })
    .controller('LoginController', LoginController)
    .name;