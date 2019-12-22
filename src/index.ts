import Person from "./models/Person";
//import Indexable from "./interfaces/Indexable";

const people: Map<string, Person> = new Map();

people.set("patrick", new Person("Patrick", "Heynes"));
people.set("kevin", new Person("Kevin", "Black"));
people.set("dexter", new Person("Dexter", "Morgan"));

const patrick = new Person("Patrick", "Heynes");
//const p = patrick as Indexable;

Object.keys(patrick).forEach(key => console.log(key));
