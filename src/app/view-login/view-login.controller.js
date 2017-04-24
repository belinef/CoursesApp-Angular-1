import angular from 'angular';

export default class LoginController {
    /* @ngInject */
    constructor($injector) {
        this.loginService = $injector.get('LoginFct');
        this.sessionStorage = $injector.get('$sessionStorage');
        this.state = $injector.get('$state');
        this.toastr = $injector.get('toastr');
        this.form = {
            userName : {
                value: '',
                valid: true,
                initial : false
            },
            userPassword : {
                value: '',
                valid: true,
                initial : false
            },
            valid: false,
            loginIsValid : true
        };

        this.validateForm();
    }

    loginErrorResolve(error) {
        this.toastr.error(error, 'Access Denied');
    }

    submitForm($event) {
        const {
            userName : {value : user},
            userPassword : {value : password}} = this.form;

        $event.preventDefault();

        this.loginService.postLogin({user, password})
            .then(data => {
                const {error} = data;

                let login;

                if (error) {
                    this.form.loginIsValid = false;
                    this.loginErrorResolve(error);

                    return;
                }

                login = {
                    name : user,
                    logged : true
                };

                this.loginService.logIn(login);
                this.state.go('main.courses.list');
            });
    }

    validateForm() {
        this.form.valid = this.form.userName.initial &&
            this.form.userPassword.initial &&
            this.form.userName.valid &&
            this.form.userPassword.valid;
    }

    validateInput(inputType) {
        if (!this.form[inputType].initial) {
            this.form[inputType].initial = true;
        }

        this.form[inputType].value ? this.form[inputType].valid = true : this.form[inputType].valid = false;

        this.validateForm();
    }
}