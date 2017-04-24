import mainCtrl from './course-edit-create.controller';

export default class CourseEditCtrl extends mainCtrl {
    /*@ngInject*/
    constructor($injector) {
        super($injector);

        this.getCourse();
    }

    getCourse() {
        const {params : {id} = {}} =  this.state;

        this.CoursesFct.getCourseByID(id).then(({course}) => {
            this.course = course;
            this.course.date = new Date(course.date);
            this.setInitialSwap(this.course.authors);
        })
    }

    saveChangesHandler() {
        super.saveChangesHandler('update').then(({updated}) => {
            if(updated) {
                this.toastr.success('Course updated');
                this.goToDetails(this.course.id);
            }
        });
    }
}