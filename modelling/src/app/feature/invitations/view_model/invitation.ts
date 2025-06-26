import { Observable } from "../../observable";

export class Invitation extends Observable {
  #email: string = "";

  email() {
    return this.#email;
  }

  setEmail(email: string) {
    this.#email = email;
    this.update();
  }
}
