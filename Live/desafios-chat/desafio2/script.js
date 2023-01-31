// function findOutId(element) {
//     const elementId = element.target.id;
//     console.log(elementId);
//     return elementId;
// }
// document.addEventListener("click", findOutId);


function createElement(type) {
    const createElement = document.createElement("span")
    createElement.className = "material-symbols-outlined";
    createElement.innerText = type;
    return createElement;
}


document.addEventListener("click", function(findOutId){
const elementId = findOutId.target.id;
console.log(elementId);
const bg = document.getElementById(`${elementId}`);
const span = bg.querySelector(".material-symbols-outlined");
    if (span) {
        console.log("já tem");
    } else {
    const createX = document.createElement("span");
    createX.innerText = "close";
    createX.className = "material-symbols-outlined"
    bg.appendChild(createX);
    };
    if (elementId == 1) {
        const bga = document.getElementById("5")
        const createO = document.createElement("span")
        createO.innerText = "radio_button_unchecked";
        createO.className = "material-symbols-outlined";
        bga.appendChild(createO); 
    }
    if (elementId == 2) {
        
        const createO = document.createElement("span")
        createO.innerText = "radio_button_unchecked";
        createO.className = "material-symbols-outlined";
        bga.appendChild(createO); 
    }
});

        //const bga = document.getElementById("3")
        // const createO = document.createElement("span")
        // createO.innerText = "radio_button_unchecked";
        // createO.className = "material-symbols-outlined";
        // bga.appendChild(createO); 

// se marcado em tal lugar, o computador marca em lugar especifico;

// const bga = document.getElementById("5")
// const createO = document.createElement("span")
// createO.innerText = "radio_button_unchecked";
// createO.className = "material-symbols-outlined";
// bga.appendChild(createO);
// return console.log("criado");
// if (span )



// vitória

// const topDiv = document.getElementById(".container-top");
// const middleDiv = document.getElementById(".container-middle");
// const bottomDiv = document.getElementById(".container-bottom");
// if ()




// inicio
// ESCOLHA x ou o
// O = "radio_button_unchecked"
// x = "close"
//class = "material-symbols-outlined"

// function createXouO(id, type) {
//     const place = document.getElementById(id);
//     const create = document.createElement("span");
//     create.innerText = type;
//     create.className = "material-symbols-outlined";
//     place.appendChild(create);
// }
// createXouO(1, "radio_button_unchecked");



// function findOutId(element) {
//     const elementId = element.target.id;
//     console.log(elementId);
//     return elementId;
// }

// document.addEventListener("click", findOutId);
// const bg = document.getElementById(`${elementId}`);
// //     const span = bg.querySelector(".material-symbols-outlined");
// // if (span) {
// //     return console.log("já tem");
// // } else {
// //     const ball = document.createElement("span");
// //     ball.innerText = "close";
// //     ball.className = "material-symbols-outlined"
// //     bg.appendChild(ball);
// //     return console.log("criado");
// //     };
// // });