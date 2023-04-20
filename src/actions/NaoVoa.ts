import { IPadraoComportamento } from "../interfaces/IPadraoComportamento"

export class NaoVoa implements IPadraoComportamento {

  constructor() {}

  getVelocidade(): number {
    return 0
  }

  execute(): string {
    return "Esse pato não voa. Velocidade: " 
    + this.getVelocidade()
  }
}
