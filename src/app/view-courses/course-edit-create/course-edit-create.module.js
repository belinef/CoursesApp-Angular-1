import angular from 'angular';

import template from './course-edit-create.html';
import './course-edit-create-style.css';

import CoursesEditController from './course-edit.controller';

import CoursesCreateController from './course-create.controller';

export default angular.module('coursesCourseEdit', [])
    .config(/*@ngInject*/$stateProvider => {
        $stateProvider
            .state('main.courses.edit', {
                url: 'course/edit/:id',
                params: {id: ''},
                template: template,
                controller: 'CoursesEditController',
                controllerAs: 'view'
            })
            .state('main.courses.create', {
                url: 'course/new',
                template: template,
                controller: 'CoursesCreateController',
                controllerAs: 'view'
            });
    })
    .controller('CoursesCreateController', CoursesCreateController)
    .controller('CoursesEditController', CoursesEditController)
    .name;