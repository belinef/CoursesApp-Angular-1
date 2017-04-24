import mainCtrl from './course-edit-create.controller';

export default class CourseCreateCtrl extends mainCtrl {
    /*@ngInject*/
    constructor($injector) {
        super($injector);

        this.getCourse();
        this.setInitialSwap(this.course.authors);
    }

    getCourse() {
        this.course = this.CoursesFct.getModel();
    }

    saveChangesHandler() {
        super.saveChangesHandler('new').then(({created, id}) => {
            if(created) {
                this.toastr.success('Course created');
                this.goToDetails(id);
            }
        });
    }

}