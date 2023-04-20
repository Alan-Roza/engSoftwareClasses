import { IPadraoComportamento } from "../interfaces/IPadraoComportamento";

export class Correr implements IPadraoComportamento {
  
  private velocidade: number

  // Construtor implementando o IPadraoComportamento
  constructor(velocidade: number) {
    this.velocidade = velocidade ?? 30
  }

  // Encapsulamento GET
  getVelocidade(): number {
    return this.velocidade
  }

  // Métodos da classe
  execute(): string {
    return "Correndo como um pato que corre. Velocidade: "
    + this.getVelocidade()
  }
}
