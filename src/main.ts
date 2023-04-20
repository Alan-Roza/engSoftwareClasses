import { PatoRuivo } from "./Patos/PatoRuivo";
import { VoarFoguete } from "./actions/VoarFoquete";
import { Pato } from "./Patos/Pato";
import { PatoCorredor } from "./Patos/PatoCorredor";
import { PatoMaratonista } from "./Patos/PatoMaratonista";

const patoRuivo: Pato = new PatoRuivo();

console.log(patoRuivo.mostrar());
console.log(patoRuivo.nadar());
console.log(patoRuivo.getComportamento());

patoRuivo.setComportamento(new VoarFoguete());

console.log(patoRuivo.getComportamento());

console.log('-----------------------------')

const patoCorredor: Pato = new PatoCorredor();

console.log(patoCorredor.mostrar());
console.log(patoCorredor.getComportamento());
console.log(patoCorredor.correr());

console.log('-----------------------------')

const patoMaratonista: Pato = new PatoMaratonista();

console.log(patoMaratonista.mostrar());
console.log(patoMaratonista.getComportamento());
console.log(patoMaratonista.correr());
