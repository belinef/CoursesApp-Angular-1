export default class MainController {
    /* @ngInject */
    constructor($injector) {
        this.sessionStorage = $injector.get('$sessionStorage');
        this.loginService = $injector.get('LoginFct');
        this.state = $injector.get('$state');
        this.user = this.loginService.user;
        this.checkForLogin(this.user);
    }

    userLogOut() {
        this.loginService.logOut();
        this.state.go('main.login');
    }

    checkForLogin({logged}) {
        return logged ?
            this.state.go('main.courses.list') :
            this.state.go('main.login');
    }
}