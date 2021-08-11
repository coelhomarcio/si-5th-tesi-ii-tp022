export class Person {
  private firstName: string;
  private middleName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string,
              middleName: string,
              lastName: string,
              age: number) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  public getBirthdayYear(): string {
    let birthdayYear: number = new Date().getFullYear() - this.age;
    return `Ano de nascimento: ${birthdayYear - 1} ou ${birthdayYear}`;
  }
}
