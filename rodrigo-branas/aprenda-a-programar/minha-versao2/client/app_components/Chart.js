class Chart {
    constructor () {
        this.element = document.createElement("div");
        this.element.className = "chart";
    }
    
    addBar(value, text, minValue, maxValue) {
        const bar = new Div("barDiv", "barDiv");
        const barColor = new Div("barColor","barColor");
        const invertedLERP = (minValue, maxValue, value) => (value - minValue) / (maxValue - minValue);
        const clamp = (num, minValue, maxValue) => Math.min(Math.max(num, minValue), maxValue);

        let zeroAxisProportion = clamp(invertedLERP(minValue, maxValue, 0), 0, 1);        
        
        if (value >= 0) {
            const barProportionPositive = invertedLERP(0, maxValue, value);
            const width = 100 * barProportionPositive * (1 - zeroAxisProportion);
            barColor.element.style.width = width + "%";
            barColor.element.style.left = 100 * zeroAxisProportion + "%";
            barColor.element.style.background = "var(--color-bar-positive)";
        } else {
            const barProportionNegative = invertedLERP(0, minValue, value);
            const width = 100 * barProportionNegative * zeroAxisProportion;
            barColor.element.style.width = width + "%";
            barColor.element.style.left = 100 * zeroAxisProportion - width + "%";
            barColor.element.style.background = "var(--color-bar-negative)";
            barColor.element.style.justifyContent = "flex-end";
            barColor.element.style.paddingRight = 10 + "px";

        }

        const monthName = new Div("monthNameBar", "monthNameBar");
        monthName.element.innerText = text.substring(0, 3);;
        barColor.appendChild(monthName.element);
        bar.appendChild(barColor.element);
        this.element.appendChild(bar.element);
    }
}