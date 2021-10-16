export interface Orcamento {
  id: number;
  nome: string;
  email: string;
  cidade: string;
  estado: string;
  telefone: string;
  celular: string;
  dataChegada: Date;
  dataSaida: Date;
  qtdAdultos: number;
  qtdCriancas: number;
  qtdApartamentos: number;
  observacao: string;
}
