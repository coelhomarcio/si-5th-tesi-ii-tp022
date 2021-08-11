import './style.css';

import { Person } from "./person";

const h1: string = "Typecript";
const h2: string = "Class Person";
let person: Person = new Person("Janis", "Lyn", "Joplin", 27);

const main: HTMLElement = document.querySelector("main");

main.innerHTML = `
<h1>${h1}</h1>
<h2>${h2}</h2>
<p>${person.getFullName()}</p>
<p>${person.getBirthdayYear()}</p>
`;
