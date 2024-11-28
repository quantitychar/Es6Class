class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.log("Name must be a non-empty string");
      return;
    }
    this._name = value.trim();
  }

  get name() {
    return this._name;
  }

  set age(value) {
    if (typeof value !== "number" || value <= 0) {
      console.log("Age must be a positive number");
      return;
    }
    this._age = value;
  }

  get age() {
    return this._age;
  }

  set salary(value) {
    if (typeof value !== "number" || value <= 0) {
      console.log("Salary must be a positive number");
      return;
    }
    this._salary = value;
  }

  get salary() {
    return this._salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  set lang(value) {
    if (typeof value !== "string" || value.trim() === "") {
      console.log("Language must be a non-empty string");
      return;
    }
    this._lang = value.trim();
  }

  get lang() {
    return this._lang;
  }

  get salary() {
    return super.salary * 3;
  }
  set salary(value) {
    super.salary = value;
  }
}

const emp = new Employee("Alice    ", 30, 2000);
const programmer = new Programmer("Bob    ", 25, 3000, "JavaScript");
const programmer1 = new Programmer("Anna", 33, 4500, "Java");
const programmer2 = new Programmer("Lisa", 25, 3000, "Python");

console.log(programmer, programmer1, programmer2);
console.log(`Salary x3: ${programmer.name} - ${programmer.salary}; ${programmer1.name} - ${programmer1.salary};
    ${programmer2.name} - ${programmer2.salary}`);
