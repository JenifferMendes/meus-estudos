class h2 {
    constructor(className, text) {
        this.element = document.createElement("h2");
        this.element.innerText = text;
        this.element.className = className;
    }
}