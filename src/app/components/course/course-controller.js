import angular from 'angular';

export default class CourseCtrl {
    /*@ngInject*/
    constructor ($attrs, $injector) {
        this.attr = $attrs;
        this.coursesFct = $injector.get('CoursesCollectionFct');
        this.timeout = $injector.get('$timeout');
    }

    $postLink() {
        this.course = angular.fromJson(this.attr.course);
    }

    get prettyCourseDuration() {
        if (this.course) {
            const {duration} = this.course,
                hours = Math.floor(duration / 60),
                minutes = duration % 60;

            return duration ? `${hours || ''} ${hours ? 'hour' : ''}${hours > 1 ? 's' : ''} ${minutes || '0'} min.` : '';
        }
    }

    deleteCourse(id) {
        this.coursesFct.removeCourse(id).then((deleted) => {
            if(deleted) {
                this.removing = true;
                this.timeout(()=> {
                    this.deleted = true
                }, 2000)

            }
        });
    }
}
