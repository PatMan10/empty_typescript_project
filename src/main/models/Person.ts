class Person {
  constructor(private _firstName: string, private _lastName: string) {}

  get firstName(): string {
    return this._firstName;
  }

  set firstName(aName: string) {
    if (aName.length < 4 || aName.length > 10)
      throw new Error(`name too ${aName.length < 4 ? "short" : "long"}`);
    this._firstName = aName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(aName: string) {
    if (aName.length < 4 || aName.length > 10)
      throw new Error(`name too ${aName.length < 4 ? "short" : "long"}`);
    this._lastName = aName;
  }

  greet() {
    console.log(`Awe! My name is ${this.firstName} ${this.lastName}.`);
  }
}

export default Person;
