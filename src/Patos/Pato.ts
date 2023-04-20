import { IPadraoComportamento } from "../interfaces/IPadraoComportamento";

// A classe Pato é uma classe abstrata
export abstract class Pato {

  protected comportamentoPato?: IPadraoComportamento;
  
  abstract mostrar(): string;

  nadar(): string {
    return "Pato Nadando.";
  }

  correr(): string {
    return "Pato Correndo."
  }

  // Encapsulamento, aqui é um SET
  setComportamento(padrao: IPadraoComportamento): void {
    this.comportamentoPato = padrao;
  }

  // Encapsulamento, aqui é um GET
  getComportamento(): string | undefined {
    return this.comportamentoPato?.execute();
  }
}
