import { IPadraoComportamento } from "../interfaces/IPadraoComportamento"

export class VoarFoguete implements IPadraoComportamento {
  private velocidade: number

  constructor() {
    this.velocidade = 1000
  }

  getVelocidade(): number {
    return this.velocidade
  }

  execute(): string {
    return "Voando como um foguete. Velocidade: "
    + this.getVelocidade()
  }
}