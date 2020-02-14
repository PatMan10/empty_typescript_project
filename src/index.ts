import Person from "./models/Person";

const people: Map<string, Person> = new Map();

people.set("patrick", new Person("Patrick", "Heynes"));
people.set("kevin", new Person("Kevin", "Black"));
people.set("dexter", new Person("Dexter", "Morgan"));

const patrick = people.get("patrick") || {};
Object.keys(patrick).forEach(key => console.log(key));
