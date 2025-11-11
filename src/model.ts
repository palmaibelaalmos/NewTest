class Model{
    // Mezők, adattag-ok, attribútumok, tulajdonság, "változók" (Osztály állapotai)
    private guessNumber: number;
    private tips: number[];
    private isGameOver: boolean;

    // Inicializálja az osztály mezőit - így helyet igényel a memóriában:
    constructor() {
        this.guessNumber = 0; // Inicializálás
        this.tips = [];  // Inicializálás
        this.isGameOver = false;
    };

    // Képesség, metódus ("eljárás")
    //Játék állapotának kezelése
    get gameOver() {
        return this.isGameOver;
    }
    set gameOver(value:boolean) {
        this.isGameOver = value;
    }


    createRndNum(){
        this.guessNumber = Math.floor(Math.random()*100) + 1;
        return;
    };
    // Property "belül", a class-ban úgy néz ki, mint egy alprogram, de "kívülről" attribútumként, változóként mutatja magát.
    // Property (guessNum) egy get-ter elérővel (accessor)
    get guessNum() {
        return this.guessNumber;
    };
    // Property (guessNum) egy set-ter elérővel (accessor) - Ellenőrzött módosítás!
    set guessNum(n: number) {
        if (n > 0)
            this.guessNumber = n;
    }
    // Képesség, metódus ("eljárás")
    addTipp(n: number) {
        this.tips.push(n);
    };
    // Képesség, metódus ("függvény")
    getNumberCount() {
        return this.tips.length;
    };
    // Literal type: 
    // Itt most valójában a visszatérési típus string, de leszűkítettük a lehetőségeket.
    isMatch(): "lt" | "gt" | "q" {
        // Itt történik a guessNumber és a tip összehasonlítása.
        // Visszatérési érték pl.:
        return "lt";
    }

};

export default Model;

/* 
// Példányosítás, itt jön létre az objektum, osztálypéldány
const m = new Model(); // A new foglal helyet a memóriában a konstruktor számára!

console.log(m.guessNum); // Property használata
m.guessNum = 344; // Property használata
m.getNumberCount(); // Objektum képességének, metódusának használata.
m.addTipp(34); // Objektum képességének, metódusának használata.
 */