export default () => {
    class SwapFromToService {
        constructor () {
            this.currentSelected = [];
        }

        setInitial (initial) {
            return this.currentSelected = initial;
        }

        getInitial () {
            return this.currentSelected;
        }
    }

    return new SwapFromToService();
}
