import angular from 'angular';

export default /*@ngInject*/($resource, $sessionStorage) => {
    const Login = $resource('api/login', {}, {
        save: {
            method: 'POST',
            transformRequest(data) {
                return angular.toJson(data);
            }
        }
    });

    Login.user = angular.fromJson($sessionStorage.get('login')) || {
        name : null,
        logged : false
    };

    Login.postLogin = data => {
        return Login.save(data).$promise;
    };

    Login.logIn = function({ name , logged}) {
        Object.assign(Login.user, {name, logged});
        $sessionStorage.put('login', angular.toJson(Login.user));
    };

    Login.logOut = () => {
        Object.assign(Login.user, {logged : false});
        $sessionStorage.put('login', angular.toJson(Login.user));
    };

    return Login;
};
