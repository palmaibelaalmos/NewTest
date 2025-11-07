class Model {
    // Mezők, adattag-ok, attribútumok, tulajdonság, "változók" (Osztály állapotai)
    guessNumber;
    tips;
    // Inicializálja az osztály mezőit - így helyet igényel a memóriában:
    constructor() {
        this.guessNumber = 0; // Inicializálás
        this.tips = []; // Inicializálás
    }
    ;
    // Képesség, metódus ("eljárás")
    createRndNum() {
        this.guessNumber = Math.floor(Math.random() * 100) + 1;
        return;
    }
    ;
    // Property "belül", a class-ban úgy néz ki, mint egy alprogram, de "kívülről" attribútumként, változóként mutatja magát.
    // Property (guessNum) egy get-ter elérővel (accessor)
    get guessNum() {
        return this.guessNumber;
    }
    ;
    // Property (guessNum) egy set-ter elérővel (accessor) - Ellenőrzött módosítás!
    set guessNum(n) {
        if (n > 0)
            this.guessNumber = n;
    }
    // Képesség, metódus ("eljárás")
    addTipp(n) {
        this.tips.push(n);
    }
    ;
    // Képesség, metódus ("függvény")
    getNumberCount() {
        return this.tips.length;
    }
    ;
}
;
export default Model;
/*
// Példányosítás, itt jön létre az objektum, osztálypéldány
const m = new Model(); // A new foglal helyet a memóriában a konstruktor számára!

console.log(m.guessNum); // Property használata
m.guessNum = 344; // Property használata
m.getNumberCount(); // Objektum képességének, metódusának használata.
m.addTipp(34); // Objektum képességének, metódusának használata.
 */ 
//# sourceMappingURL=model.js.map