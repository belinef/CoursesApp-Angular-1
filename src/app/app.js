import angular from 'angular';
import './style';

import vendors from './vendors';
import components from './components';
import routerConfig from './components/router';
import toastrConfig from './components/toastr';

import viewMain from './view-main';
import viewLogin from './view-login';
import viewCourses from './view-courses';


angular.module('coursesApp', [
    ...vendors,
    components,
    viewLogin,
    viewMain,
    viewCourses
])
    .config(routerConfig)
    .config(toastrConfig);
