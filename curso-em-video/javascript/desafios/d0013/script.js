const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerHTML = 'Situação do aluno';
title.className = 'title';
app.appendChild(title);

const approved = document.createElement('div')
approved.className = 'approved'
approved.innerHTML = 'APROVADO'

const repair = document.createElement('div')
repair.className = 'repair'
repair.innerHTML = 'RECUPERAÇÃO'

const notApproved = document.createElement('div')
notApproved.className = 'notApproved'
notApproved.innerHTML = 'REPROVADO'

function studentVerification() {
    const student = window.prompt('Qual é o nome do aluno?');
    const firstNote = window.prompt(`Primeira nota de ${student}:`)
    const firstNoteReplace = firstNote.replace(",",".")
    const firstNoteNumber = +firstNoteReplace
    const secondNote = window.prompt(`Segunda nota de ${student}:`)
    const secondNoteReplace = secondNote.replace(",",".")
    const secondNoteNumber = +secondNoteReplace
    const media = (firstNoteNumber + secondNoteNumber) / 2
    const message = document.querySelector('#message');
    message.innerHTML = `<h3><strong>Analisando a situação de ${student} </strong></h3></br> Com as notas ${firstNote} e ${secondNote}, a <strong> média é ${media}</strong></br>`;
    if (media >= 6.0 && media <= 10.0) {
        message.innerHTML += "Com média acima de 6,0, o aluno está:"
        message.appendChild(approved)
    } else if (media >= 3.0 && media < 6.0) {
        message.innerHTML += "Com média entre 3,0 de 6,0, o aluno está em:"
        message.appendChild(repair)
    } else if (media < 3.0) {
        message.innerHTML += "Com média abaixo de 3,0, o aluno está:"
        message.appendChild(notApproved)
    } else {
        message.innerHTML = "nota não existente"
    }
}

function startChallenge(){
    const button = document.createElement('div');
    button.className = 'button';
    button.innerHTML = 'Entrar com as notas'
    button.addEventListener("click", studentVerification)
    return button;
} 

const divButton = document.createElement('div');
divButton.classList = 'divButton';
const message = document.createElement('div');
message.innerHTML = 'Clique no botão acima para informar as notas do aluno'
message.className = 'message'
message.id = 'message'
divButton.appendChild(startChallenge());
app.appendChild(divButton); 
app.appendChild(message);