import { IPadraoComportamento } from "../interfaces/IPadraoComportamento"

export class VoaveisAsa implements IPadraoComportamento {
 
  private velocidade: number

  // Construtor implementando o IPadraoComportamento
  constructor() {
    this.velocidade = 10
  }

  // Encapsulamento GET
  getVelocidade(): number {
    return this.velocidade
  }

  // Métodos da classe
  execute(): string {
    return "Voando como um pássaro que voa. Velocidade: "
    + this.getVelocidade()
  }
}