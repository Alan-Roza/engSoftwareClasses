import { VoaveisAsa } from "../actions/VoaveisAsa"
import { IPadraoGrasnar } from "../interfaces/IPadraoGrasnar"
import { Pato } from "./Pato"

export class PatoBravo extends Pato implements IPadraoGrasnar {

  constructor() {
    super()
    this.setComportamento(new VoaveisAsa())
  }

  mostrar(): string {
    return "Eu sou o Pato Bravo"
  }

  grasnar(): string {
    return "Que-Que. Grrrrrrr."
  }
}