import angular from 'angular';

import template from './course-details.html';
import './course-details-style.css';

import CoursesDetailsController from './course-details.controller';

export default angular.module('coursesCourseDetails', [])
    .config(/*@ngInject*/$stateProvider => {
        $stateProvider
            .state('main.courses.details', {
                url: 'courses/details',
                params: {id: ''},
                template: template,
                controller: 'CoursesDetailsController',
                controllerAs: 'view'
            });
    })
    .controller('CoursesDetailsController', CoursesDetailsController)
    .name;