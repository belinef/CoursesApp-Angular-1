import angular from 'angular';

import courseComponent from './course-component';
import './course-style.css';


export default angular.module('coursesCourse', [])

    .component('courseItem', courseComponent)
    .name;
