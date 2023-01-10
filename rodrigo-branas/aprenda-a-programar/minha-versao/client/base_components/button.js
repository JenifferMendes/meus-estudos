class Button {
    constructor(id, className, text ) {
        this.element = document.createElement("button");
        this.element.id = id;
        this.element.className = className;
        this.element.innerText = text;
    }
    addListener(fn) {
        this.element.addEventListener("click", fn);
    }
 }