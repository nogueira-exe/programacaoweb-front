export interface Apontamento {
    id?: number;
    id_usuario: number; 
    id_categoria: number;
    id_cliente: number; 
    id_item_projeto_categoria: number;
    data: Date | string;
    horas: string;
    descricao: string;
    projeto: string; 
    extra: string; 
    data_de_exclusao?: Date | string;
    status_extra: string;
    resposta_extra: string; 
    observacao: string; 
    garantia: boolean; 
}