import angular from 'angular';

export default /*@ngInject*/($resource) => {
    const Authors = $resource('api/authors', {
        search : '@search'
    }, {
        get: {
            method     : 'GET',
            params : {
                search : '@search'
            }
        },
        save: {
            method: 'POST',
            transformRequest(data) {
                return angular.toJson(data);
            }
        }
    });

    Authors.prototype.newAuthor = function (name) {
        return Authors.save({name}).$promise
    };

    Authors.prototype.getAuthors = function (search) {
        return Authors.get({search}).$promise
    };

    return new Authors;
};
