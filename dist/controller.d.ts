import View from "./view.js";
import Model from "./model.js";
declare class Controller {
    private view;
    private model;
    constructor(v: View, m: Model);
    handleStartClick: () => void;
    handleControlClick: () => void;
}
export default Controller;
//# sourceMappingURL=controller.d.ts.map