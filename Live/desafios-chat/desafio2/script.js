function onClick() {
    const bg = document.getElementById("texte");
    const ball = document.createElement("span");
    ball.innerText = "close";
    ball.className = "material-symbols-outlined"
    bg.appendChild(ball);
    // bg.style.backgroundColor = 'black';
}

// inicio
// escolha: bolinha ou x
// cria a tabela
// 