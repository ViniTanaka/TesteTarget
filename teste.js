//1) Observe o trecho de código:
// int INDICE = 12, SOMA = 0, K = 1;
// enquanto K < INDICE faça
// { K = K + 1; SOMA = SOMA + K;}
// imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

function soma() {
    let INDICE = 12, SOMA = 0, K = 1;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return SOMA;
    // Resposta: 77
}

// 2) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2,10, 12, 16, 17, 18, 19, 20

const faturamento = [1000, 500, 3402, 8923, 12, 928, 999,1, 0, 0, 0,2222 ];

function calcularFaturamento(faturamento) {
    const diasUteis = faturamento.filter(dia => dia > 0);
    const faturamentoTotal = diasUteis.reduce((total, dia) => total + dia, 0);
    const menorFaturamento = Math.min(...diasUteis);
    const maiorFaturamento = Math.max(...diasUteis);
    const mediaFaturamento = faturamentoTotal / diasUteis.length;
    const diasAcimaMedia = diasUteis.filter(dia => dia > mediaFaturamento).length;
    return { faturamentoTotal, menorFaturamento, maiorFaturamento, mediaFaturamento, diasAcimaMedia };

}

// 4)Clientes
// id_cliente (PK)
// razao_social
// estado_id (FK) -> Estados(id_estado)

// Telefones
// id_telefone (PK)
// numero
// tipo_telefone_id (FK) -> TiposTelefone(id_tipo_telefone)
// cliente_id (FK) -> Clientes(id_cliente)

// TiposTelefone
// id_tipo_telefone (PK)
// descricao

// Estados
// id_estado (PK)
// sigla
// nome

// SELECT  
//     c.id_cliente,
//     c.razao_social,
//     t.numero,
//     tt.descricao,
// FROM Clientes c
// JOIN Telefones t ON c.id_cliente = t.cliente_id
// JOIN TiposTelefone tt ON t.tipo_telefone_id = tt.id_tipo_telefone
// JOIN Estados e ON c.estado_id = e.id
// WHERE e.sigla = 'SP'

// 5) ambos os veiculos estarão a mesma distancia de ribeirão preto, pois independente de onde eles se cruzarem, o ponto de referencia é a mesma cidade.