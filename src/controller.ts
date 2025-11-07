import View from "./view.js";
import Model from "./model.js";

class Controller{
    private view: View;
    private model: Model;
    constructor(v: View, m: Model) {
        this.view = v;
        this.model = m;

        // Működésbe hozom metódushívással a view gombját, és átadom neki a callback helyetti valódi metódust ("Ő lesz repülőtéri segítő"):
        this.view.handleStart(this.handleStartClick);
    };
    // Ez lesz a callback "helyett":
    // Ezt arrow function-ként kell megírni! Majd megbeszéljük, miért!
    handleStartClick = () => { 
        this.model.createRndNum(); // Kitaláljuk a számot
        const gnum = this.model.guessNum; // Kikérem a gondolt számot
        this.view.handleControl(this.handleControlClick);
        console.log(`A gondolt szám: ${gnum}`); // Megjelenítem a gondolt értéket.
    }

    handleControlClick = () => {
        const inputValue = this.view.getInputValue();
        if (!inputValue) return;
        console.log(inputValue);
        this.model.addTipp(inputValue);
    }
};



export default Controller;