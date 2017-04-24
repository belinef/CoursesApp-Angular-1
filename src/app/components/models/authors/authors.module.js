import angular from 'angular';
import Authors from './authors.service';

export default angular.module('authorsCollectionModel', [])
    .factory('authorsCollectionFct', Authors)
    .name;
