import angular         from 'angular';

import login  from './login';
import courses from './courses';
import authors from './authors';

export default angular.module('coursesModels', [
    login,
    courses,
    authors
])
    .name;
