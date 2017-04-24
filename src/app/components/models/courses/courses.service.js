import angular from 'angular';

export default /*@ngInject*/($resource) => {
    const Courses = $resource('api/courses/:id', {
        id : '@id'
    }, {

        query: {
            method     : 'GET',
            params : {
                search : '@search'
            }
        },
        get: {
            method     : 'GET'
        },
        save: {
            method: 'POST',
            transformRequest(data) {
                return angular.toJson(data);
            }
        },
        update: {
            method: 'PUT',
            params: {
                id: '@id'
            }
        },
        delete: {
            method: 'DELETE',
            params: {
                id: '@id'
            }
        },
        getById: {
            method: 'GET',
            params: {
                id: '@id'
            }
        },
    });

    Courses.prototype.getCollection = function () {
        return Courses.get().$promise
    };

    Courses.prototype.findCourse = function (search) {
        return Courses.query({search}).$promise
    };

    Courses.prototype.getCourseByID = function (id) {
        return Courses.getById({id}).$promise
    };

    Courses.prototype.newCourse = function (data) {
        const dataToSend = Object.assign(this.getModel(), data);
        return Courses.save(dataToSend).$promise
    };

    Courses.prototype.getModel = function () {
        return {
            name : '',
            description : '',
            duration : '',
            date : new Date(),
            authors : []
        }
    };

    Courses.prototype.updateCourse = function (data) {
        return Courses.update(data).$promise
    };

    Courses.prototype.removeCourse = function (id) {
        return Courses.delete({id}).$promise
    };

    return new Courses;
};
