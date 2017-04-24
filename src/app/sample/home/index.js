import angular from 'angular';
import uirouter from 'angular-ui-router';

import template from './home.html';

import HomeController from './home.controller';

export default angular.module('app.home', [uirouter])
    .config(/*@ngInject*/$stateProvider => {
        $stateProvider
            .state('main', {
                url: '/',
                template: template,
                controller: 'HomeController',
                controllerAs: 'home'
            });
    })
    .controller('HomeController', HomeController)
    .name;