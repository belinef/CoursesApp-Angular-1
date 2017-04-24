export default class BreadcrumbCtrl {
    /*@ngInject*/
    constructor($injector) {
        this.rootScope = $injector.get('$rootScope');
        this.state = $injector.get('$state');

        this.stateValue = this.state.current.name;

        this.rootScope.$on('$stateChangeSuccess', (...rest) => {
            const [,{name : state}] = rest;

            this.stateValue = state;
        });
    }

    set stateValue(state) {
        const stateItems = [{
            abstract: null,
            name: "Courses",
            state: "main.courses.list",
            url: "courses",
        }];

        state.split('.')
            .reduce((a, b) => {
                const {abstract, name : state, url} = this.state.get(`${a}.${b}`);

                [name] = state.split('.').slice(-1);
                state !== stateItems[0].state ? stateItems.push({abstract, state, name, url}) : false;
                return `${a}.${b}`;
            });

        this.renderState = stateItems.filter(item => item.url);
    }
}