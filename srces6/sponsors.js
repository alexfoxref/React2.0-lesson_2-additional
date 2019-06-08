export default class Sponsors {
    constructor ({cash = [], eu = [], rus = []} = {}) {
        this.cash = cash;
        this.eu = eu;
        this.rus = rus;
    }
    calcCash() {
        let total = 0;
        this.cash.map(item => {
            total += item
        });
        return total;
    }
}