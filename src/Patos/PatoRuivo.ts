
import { VoaveisAsa } from "../actions/VoaveisAsa"
import { IPadraoGrasnar } from "../interfaces/IPadraoGrasnar"
import { Pato } from "./Pato"

export class PatoRuivo extends Pato implements IPadraoGrasnar {

  constructor() {
    super()
    this.setComportamento(new VoaveisAsa())
  }

  mostrar(): string {
    return "Eu sou o Pato Ruivo."
  }

  grasnar(): string {
    return "Que-Que."
  }
}