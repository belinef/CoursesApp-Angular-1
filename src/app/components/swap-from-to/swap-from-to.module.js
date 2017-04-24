import angular from 'angular';

import swapComponent from './swap-from-to.component';
import './swap-from-to-style.less';

import SwapFromToService from './swap-from-to.service';


export default angular.module('coursesSwapFromTo', [])

    .factory('swapFromToFct',SwapFromToService)
    .component('swapFromTo', swapComponent)
    .name;
