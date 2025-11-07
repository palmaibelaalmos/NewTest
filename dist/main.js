import View from "./view.js";
import Model from "./model.js";
import Controller from "./controller.js";
document.addEventListener("DOMContentLoaded", () => {
    const v = new View();
    const m = new Model();
    const c = new Controller(v, m);
});
//# sourceMappingURL=main.js.map