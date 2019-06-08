import EmployersNames from './employers';
import Sponsors from './sponsors';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
    sponsors = {
        cash: [40000, 5000, 30400, 12000],
        eu: ['SRL', 'PLO', 'J&K'],
        rus: ['RusAuto', 'SBO']
    };

const employersNames = new EmployersNames(employers),
    sp = new Sponsors(sponsors),
    money = sp.calcCash();

class MakeBusiness {
    constructor({owner, director = 'Viktor', cash, emp} = {}) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }
    sumSponsors() {
        const {eu, rus} = sponsors,
            sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

        return sumSponsors;
    }
    reportResults() {
        const {eu:[srl]} = sponsors;

        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log(...this.sumSponsors());
        console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
    }
}

const makeBusiness = new MakeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames.returnResult()
});

makeBusiness.reportResults();