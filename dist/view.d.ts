declare class View {
    private input;
    private start;
    private control;
    private h2Count;
    private h2Control;
    private h2ConGrat;
    constructor();
    handleStart(startClickCallback: () => void): void;
    handleControl(controlClickCallback: () => void): void;
    getInputValue(): number | null;
}
export default View;
//# sourceMappingURL=view.d.ts.map