import { Correr } from "../actions/Correr";
import { IPadraoCorrer } from "../interfaces/IPadraoCorrer";
import { Pato } from "./Pato";

export class PatoCorredor extends Pato implements IPadraoCorrer {
  
  constructor() {
    super()
    this.setComportamento(new Correr(50))
  }
  
  mostrar(): string {
    return "Eu sou o Pato Corredor"
  }

  correr(): string {
    return 'Correndo...'
  }

}