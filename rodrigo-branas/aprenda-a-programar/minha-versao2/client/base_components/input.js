 class Input {
    constructor(id, type, text, className){
        this.element = document.createElement("input");
        this.element.id = id;
        this.element.type = type;
        this.element.placeholder = text;
        this.element.className = className;
    }

    getValue () {
       if (this.element.type === "number") return this.element.valueAsNumber;
       return this.element.value; 
    }
 }