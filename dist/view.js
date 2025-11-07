class View {
    input;
    start;
    control;
    h2Count;
    h2Control;
    h2ConGrat;
    constructor() {
        this.input = document.querySelector("[type=number]");
        this.start = document.querySelector("button:first-child");
        this.control = document.querySelector("button:last-child");
        this.h2Count = document.querySelector("h2:nth-child(3) span");
        this.h2Control = document.querySelector("h2:nth-child(4)");
        this.h2ConGrat = document.querySelector("h2:nth-child(5) span");
    }
    // A gomb működtetése:
    handleStart(startClickCallback) {
        this.start.addEventListener("click", startClickCallback);
    }
    handleControl(controlClickCallback) {
        this.control.addEventListener("click", controlClickCallback);
    }
    // Az input értékének kinyerése - type union:
    getInputValue() {
        if (!this.input.value) {
            this.input.focus();
            alert("Adjon meg egy számot!");
            return null;
        }
        return Number(this.input.value);
    }
}
;
export default View;
//# sourceMappingURL=view.js.map