class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    const x = "asd";
    console.log(`Awe! My name is ${this.firstName} ${this.lastName}.`);
  }
}

export default Person;
