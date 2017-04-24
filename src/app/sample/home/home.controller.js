import angular from 'angular';


export default class HomeController {
    /* @ngInject */
    constructor($injector) {
        this.sessionStorage = $injector.get('$sessionStorage');
        this.state = $injector.get('$state');

        this.checkForLogin();
    }

    checkForLogin() {
        const login = angular.fromJson(this.sessionStorage.get('login'));

        console.log(login);
        if(login && login.logged) {
            return true;
        }

        this.state.go('login');
    }
}