import angular from 'angular';

import models from './models';
import course from './course';
import breadcrumb from './breadcrumb';
import swapFromTo from './swap-from-to';

export default angular.module('coursesComponents', [
    models,
    course,
    breadcrumb,
    swapFromTo
])
    .name;
