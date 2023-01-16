class Select {
    constructor(id, className){
        this.element = document.createElement("select");
        this.element.id = id;
        this.element.className = className;
    }

    addOption(text, className){
        const option = document.createElement("option");
        option.text = text;
        option.className = className;
        this.element.appendChild(option);
    }
    getValue() {
       return this.element.value;
    }
}