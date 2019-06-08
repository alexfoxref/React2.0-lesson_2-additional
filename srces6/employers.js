export default class EmployersNames {
    constructor (employers = []) {
        this.employers = employers;
    }
    returnResult() {
        return this.employers
            .filter(item => item.length > 0)
            .map(item => item.toLowerCase().trim());
    }
}