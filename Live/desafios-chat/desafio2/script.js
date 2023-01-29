// function onClick() {
//     const bg = document.getElementById("4");
//     const ball = document.createElement("span");
//     ball.innerText = "close";
//     ball.className = "material-symbols-outlined"
//     bg.appendChild(ball);
// }

// inicio
// ESCOLHA x ou o
// O = "radio_button_unchecked"
// x = "close"
//class = "material-symbols-outlined"

function createXouO(id, type) {
    const place = document.getElementById(id);
    const create = document.createElement("span");
    create.innerText = type;
    create.className = "material-symbols-outlined";
    place.appendChild(create);
}
// createXouO(1, "radio_button_unchecked");

document.addEventListener("click", function(findOutId){
    const elementId = findOutId.target.id;
    console.log(elementId);
});

    // const div = document.querySelector





// if("O") {
// }
