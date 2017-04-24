export default class CourseDetailsCtrl {
    /*@ngInject*/
    constructor($injector) {
        this.state = $injector.get('$state');
        this.CoursesFct = $injector.get('CoursesCollectionFct');

        this.loadData();
    }

    loadData() {
        const {params : {id} = {}} =  this.state;

        this.CoursesFct.getCourseByID(id).then(({course}) => {
            this.course = course;
        })
    }
}