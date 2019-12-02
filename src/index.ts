import Person from "./models/Person";

const people: Map<string, Person> = new Map();

people.set("patrick", new Person("Patrick", "Heynes"));
people.set("kevin", new Person("Kevin", "Black"));
people.set("dexter", new Person("Dexter", "Morgan"));
people.get("kevin")!.firstName = "some long ass name";

people.forEach(person => person.greet());
