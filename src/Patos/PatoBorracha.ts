import { NaoVoa } from "../actions/NaoVoa";
import { Pato } from "./Pato";

export class PatoBorracha extends Pato {

  constructor() {
    super()
    this.setComportamento(new NaoVoa())
  }

  mostrar(): string {
    return "Olá, eu sou de borracha."
  }
}