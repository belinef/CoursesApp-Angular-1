import angular from 'angular';

const InitialSearchConfig = {
    isSearchable: true,
    findHandler: {
        needed: true,
        name: 'getAuthors'
    },
    addHandler: {
        needed: true,
        name: 'newAuthor'
    }
};

export default class SwapFromToCtrl {
    /*@ngInject*/
    constructor($attrs, $injector) {
        this.attr = $attrs;
        this.injector = $injector;
        this.swap = $injector.get('swapFromToFct');
        this.toastr = $injector.get('toastr');

        this.initialSearchConfig = InitialSearchConfig;

        this.isSearched = false;
        this.loading = false;

        this.resultListChecked = {};
        this.availableListChecked = {};
        this.availableList = [];
        this.resultList = [];
    }

    $postLink() {
        const {swapConfig, resourceFct} = this.attr;
        if (swapConfig) {
            this.resourceFct = this.injector.get(resourceFct);
            this.resultList = this.swap.getInitial();
            Object.assign(this.initialSearchConfig, angular.fromJson(swapConfig));
        }
    }

    addNewItem() {
        const {addHandler : {name : resuourseFunc}} = this.initialSearchConfig;

        this.resourceFct[resuourseFunc](this.authorSearch)
            .then(({created, name, error}) => {
                if (created) {
                    this.availableList.push(name);
                    this.toastr.info(`${name} added`);
                } else {
                    this.toastr.error(error);
                }
            })
    }

    findItems() {
        const {findHandler : {name : resuourseFunc}} = this.initialSearchConfig;

        this.isSearched = true;
        this.loading = true;
        this.availableList = [];

        this.resourceFct[resuourseFunc](this.authorSearch)
            .then(({authors}) => {
                if (authors.length) {
                    this.availableList = authors;
                } else {
                    this.toastr.warning("No search results");
                }
                this.loading = false;
            })
    }

    itemSelection(index, type) {
        this[`${type}ListChecked`][index] ?
            this[`${type}ListChecked`][index] = false :
            this[`${type}ListChecked`][index] = true;
    }

    addItems() {
        for (let index in this.availableListChecked) {
            if (!this.resultList.includes(this.availableList[index])) {
                this.resultList.push(this.availableList[index]);
            }
        }
        this.availableListChecked = {};

        this.swap.setInitial(this.resultList);
    }

    removeItems() {
        for (let index in this.resultListChecked) {
            if (!this.availableList.includes(this.resultList[index])) {
                this.availableList.push(this.resultList[index]);
            }
            this.resultList[index] = null;
        }

        this.resultList = this.resultList.filter(author => author);
        this.resultListChecked = {};

        this.swap.setInitial(this.resultList);
    }
}
