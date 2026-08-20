import { Concessionaria } from "./Concessionaria";

describe('Modelo Concessionaria', () =>{
    it('deve criar um concessionaria corretamente com nome e cnpj', () =>{
        const nomeDoConcessionaria = 'Localiza Veículos';
        const cnpjDoConcessionaria = '00.123.456/0001-00';
        const cidadeDoConcessionaria = 'Belo Horizonte';


        const concessionaria = new Concessionaria(nomeDoConcessionaria, cnpjDoConcessionaria, cidadeDoConcessionaria);

        expect(concessionaria.nome).toBe('Localiza Veículos');
        expect(concessionaria.cnpj).toBe('00.123.456/0001-00');
        expect(concessionaria.cidade).toBe('Belo Horizonte');
        expect(concessionaria.id).toBeNull();
    });
});