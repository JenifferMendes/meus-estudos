class Tabela {
    constructor (className) {
        this.element = document.createElement("table");
        this.element.className = className;
        this.th = null;
        this.thcol = null;
    }

    addTd(text) {
        this.th = document.createElement("th");
        this.th.innerText = text;
    }
    addTdRow (textcol){
        this.thcol = document.createElement("th");
        this.thcol.innerText = textcol;
        this.thcol.setAttribute("colspan", 2);
    }
    addRowTh(text, textcol) {
        const tr = document.createElement("tr");
        this.addTd(text);
        tr.appendChild(this.th);
        this.addTdRow(textcol);
        tr.appendChild(this.thcol);
        this.element.appendChild(tr);
    }

    addRowTd(type, values, buttons) {
        const tr = document.createElement("tr");
        for (const value of values) {
            const td = document.createElement(type);
            td.innerText = value;
            tr.appendChild(td);
        }
        if (buttons){
             for (const button of buttons) {
                const td = document.createElement(type);
                td.append(button.element);
                tr.appendChild(td);
            }
         }

        this.element.appendChild(tr);
    }
}