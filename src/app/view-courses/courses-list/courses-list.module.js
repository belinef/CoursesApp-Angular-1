import angular from 'angular';

import template from './courses-list.html';
import './courses-list-style.css';

import CoursesListController from './courses-list.controller';

export default angular.module('coursesCoursesList', [])
    .config(/*@ngInject*/$stateProvider => {
        $stateProvider
            .state('main.courses.list', {
                url: 'courses',
                template: template,
                controller: 'CoursesListController',
                controllerAs: 'view'
            });
    })
    .controller('CoursesListController', CoursesListController)
    .name;