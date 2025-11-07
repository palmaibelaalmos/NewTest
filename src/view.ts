class View{
    private input: HTMLInputElement;
    private start: HTMLButtonElement;
    private control: HTMLButtonElement;
    //private h2Count: HTMLSpanElement;
    //private h2Control: HTMLElement;
    //private h2ConGrat: HTMLSpanElement;
    private article: HTMLDivElement;

    constructor(){
        this.input = document.querySelector("[type=number]") as HTMLInputElement;
        this.start = document.querySelector("button:first-child") as HTMLButtonElement;
        this.control = document.querySelector("button:last-child") as HTMLButtonElement;
        //this.h2Count = document.querySelector("h2:nth-child(3) span") as HTMLSpanElement;
        //this.h2Control = document.querySelector("h2:nth-child(4)") as HTMLElement;
        //this.h2ConGrat = document.querySelector("h2:nth-child(5) span") as HTMLSpanElement;
        this.article = document.querySelector("article") as HTMLDivElement;
    }
    // Kezdő-gomb működtetése:
    handleStart(startClickCallback: () => void) {
        this.start.addEventListener("click", startClickCallback)
    }
    // Ellenőrző-gomb működése:
    handleControl(controlClickCallback: () => void) {
        this.control.addEventListener("click", controlClickCallback)
    }

    // Az input értékének kinyerése - type union:
    getInputValue(): number | null {
        if (!this.input.value){
            this.input.focus();
            alert("Adjon meg egy számot!");
            return null;
        }
        return Number(this.input.value);
    }
};

export default View;
