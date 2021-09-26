class PearsonQuiz extends HTMLElement {
    constructor() {
        super();
        this.console.log('constructed!')
 
    }
}
const p = new PearsonQuiz;
window.customElements.define("pearson-quiz", p);
 