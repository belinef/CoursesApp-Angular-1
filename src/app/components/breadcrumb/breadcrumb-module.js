import angular from 'angular';

import breadcrumbComponent from './breadcrumb-component';
import './breadcrumb-style.css';


export default angular.module('coursesBreadcrumbModule', [])

    .component('coursesBreadcrumb', breadcrumbComponent)
    .name;
