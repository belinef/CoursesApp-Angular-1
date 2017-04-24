import angular from 'angular';
import Courses from './courses.service';

export default angular.module('coursesCollectionModel', [])
    .factory('CoursesCollectionFct', Courses)
    .name;
