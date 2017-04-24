import angular from 'angular';

import template from './view-courses.html';
import './view-courses-style.css';

import CoursesController from './view-courses.controller';

import CourseDetailsModule from './course-details';
import CourseListModule from './courses-list';
import CourseEditCreateModule from './course-edit-create';

export default angular.module('coursesCoursesView', [
    CourseListModule,
    CourseDetailsModule,
    CourseEditCreateModule
])
    .config(/*@ngInject*/$stateProvider => {
        $stateProvider
            .state('main.courses', {
                url: '',
                abstract : true,
                template: template,
                controller: 'CoursesController',
                controllerAs: 'view'
            });
    })
    .controller('CoursesController', CoursesController)
    .name;