 class Input {
    constructor(id, type, text){
        this.element = document.createElement("input");
        this.element.id = id;
        this.element.type = type;
        this.element.placeholder = text;
    }

    getValue () {
       if (this.element.type === "number") return this.element.valueAsNumber;
       return this.element.value; 
    }
 }