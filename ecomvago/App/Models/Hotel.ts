import { Avaliacao } from './Avaliacao';
import { Oferta } from './Oferta';

export interface Hotel {
    nome: string;
    cidade: string;
    distancia: string;
    imagem: string;
    oferta: Oferta[];
    avaliacao: Avaliacao;
}
