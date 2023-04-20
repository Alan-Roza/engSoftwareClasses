import { Correr } from "../actions/Correr";
import { IPadraoCorrer } from "../interfaces/IPadraoCorrer";
import { Pato } from "./Pato";

export class PatoMaratonista extends Pato implements IPadraoCorrer {
  
  constructor() {
    super()
    this.setComportamento(new Correr(30))
  }
  
  mostrar(): string {
    return "Eu sou o Pato Maratonista"
  }

  correr(): string {
    return "Correndo como um maratonista..."
  }

}