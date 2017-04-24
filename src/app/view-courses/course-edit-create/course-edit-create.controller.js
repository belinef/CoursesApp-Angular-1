const swapConfig = {
    findHandler : {
        needed : true,
        name : 'getAuthors'
    },
    addHandler : {
        needed : true,
        name : 'newAuthor'
    }
};

export default class CourseEditCreateCtrl {
    /*@ngInject*/
    constructor($injector) {
        this.state = $injector.get('$state');
        this.CoursesFct = $injector.get('CoursesCollectionFct');
        this.toastr = $injector.get('toastr');
        this.swap = $injector.get('swapFromToFct');

        this.swapConfig = swapConfig;
    }

    goToDetails (id) {
        this.state.go('main.courses.details', {id})
    }

    setInitialSwap(initial) {
        this.swap.setInitial(initial);
    }

    get prettyCourseDuration() {
        if (this.course) {
            const {duration} = this.course,
                hours = Math.floor(duration / 60),
                minutes = duration % 60;

            return duration ? `${hours || ''} ${hours ? 'hour' : ''}${hours > 1 ? 's' : ''} ${minutes || '0'} min.` : '';
        }
    }

    saveChangesHandler(type) {
        this.course.authors = this.swap.getInitial();
        const result = Object.assign({},this.course,{date : Date.parse(this.course.date)});
        return this.CoursesFct[`${type}Course`](result);
    }

    cancelHandler() {
        this.state.go('main.courses.list')
    }
}