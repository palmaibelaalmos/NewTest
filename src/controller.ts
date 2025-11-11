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
    // Kezdés gomb működtetése - ide tartozó műveletek
    handleStartClick = () => { 
        //Kezdő állapot beállítása TODO
        this.model.createRndNum(); // Kitaláljuk a számot
        const gnum = this.model.guessNum; // Kikérem a gondolt számot
        //Ellenőrzés gomb működtetése 
        this.view.handleControl(this.handleControlClick);
        console.log(`A gondolt szám: ${gnum}`); // Megjelenítem a gondolt értéket.
        //Játék indítása - model isGameOver TODO

    }

    handleControlClick = () => {
        //Ha a játéknak nincs vége TODO
        //Input értékek kinyerése:
        const inputValue = this.view.getInputValue();
        if (!inputValue) return;    //Ha nincs érték, állj!
        console.log(inputValue);
        //A tipp tárolása:
        this.model.addTipp(inputValue);
        //Ellenőrzés: Tipp ~ rndNumber -> lt,gt,eq TODO
        //Ha kitalálták akkor:
            //Játék vége
            //Gratuláció kiírása
            //Tippek száma
        //Üzenetek megjelenítése: kisebb,nagyobb a gondolt szám,tippek száma
    }
};



export default Controller;