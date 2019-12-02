import Person from "./models/Person";

function printAll(people: Map<string, Person>) {
  people.forEach(person => person.greet());
}

const people: Map<string, Person> = new Map();
people.set("patrick", new Person("Patrick", "Heynes"));
people.set("kevin", new Person("Kevin", "Black"));
people.set("dexter", new Person("Dexter", "Morgan"));
printAll(people);
