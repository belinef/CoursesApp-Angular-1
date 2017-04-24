export default class CoursesListController {
    /*@ngInject*/
    constructor($injector) {
        this.coursesFct = $injector.get('CoursesCollectionFct');
        this.initCoursesCollection();

        this.searchCourse = '';
        this.loading = true;
    }


    handleSearch () {
        this.loading = true;
        this.courses = [];

        this.coursesFct.findCourse(this.searchCourse).then(({coursesList}) => {
            this.courses = coursesList;
            this.loading = false;
        })
    }

    initCoursesCollection() {
        this.coursesFct.getCollection().then(({coursesList}) => {
            this.courses = coursesList;
            this.loading = false;
        })
    }
}