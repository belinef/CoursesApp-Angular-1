import angular from 'angular';

import template from './view-main.html';
import './view-main-style.css';

import MainController from './view-main.controller';

export default angular.module('coursesMain', [])
    .config(/*@ngInject*/$stateProvider => {
        $stateProvider
            .state('main', {
                url: '/',
                template: template,
                controller: 'MainController',
                controllerAs: 'view'
            });
    })
    .controller('MainController', MainController)
    .name;