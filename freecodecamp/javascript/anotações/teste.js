// Configuração
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Altere apenas o código abaixo desta linha
for (let i = 0; i < contacts.length ; i++) {
  if (name == contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
    return contacts[i][prop]
  } 
  if (name == contacts[i].firstName && !contacts[i].hasOwnProperty(prop)) {
    return "No such property"
    } 
}  
return "No such contact"

  // Altere apenas o código acima desta linha
}

console.log(lookUpProfile("Akira", "likes"));
lookUpProfile("Kristian", "likes");