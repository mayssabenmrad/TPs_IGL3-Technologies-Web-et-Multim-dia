import type { Role } from "../utils/types";

export abstract class Person {
  constructor(
    public id: number,
    public name: string,
    public role: Role
  ) {}
}

export class User extends Person {
  constructor(id: number, name: string) {
    super(id, name, "User");
  }
}

export class Admin extends Person {
  constructor(id: number, name: string) {
    super(id, name, "Admin");
  }
}
