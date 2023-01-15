class Link {

    constructor(id, className, text, href) {
        this.element = document.createElement("a");
        this.element.id = id;
        this.element.className = className;
        this.element.innerText = text;
        this.element.href = `#${href}`;
     }

     addListener(fn) {
        this.element.addEventListener("click", fn);
    }
}