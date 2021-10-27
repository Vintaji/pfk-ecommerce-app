const soap = require('soap');
const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';

const cep = {
    init: async () => {
      document.getElementById('form_cep').addEventListener('click', soap.createClient)
},

soap.createClient(url, (err, client) => {
    if(err) {
        console.log(err);
    } else {
        client.CalcPrecoPrazo({
            nCdEmpresa: '',
            sDsSenha: '',
            nCdServico: '04014',
            sCepOrigem: '40040505',
            sCepDestino: '44004395',
            nVlPeso: '1',
            nCdFormato: '1',
            nVlComprimento: '22',
            nVlAltura: '12',
            nVlLargura: '33',
            nVlDiametro: '1',
            sCdMaoPropria: 'N',
            nVlValorDeclarado: '0',
            sCdAvisoRecebimento: 'N'
        }, (err, res) => {
            console.log(res.CalcPrecoPrazoResult.Servicos.cServico[0].Valor);
        });
    }
});

window.onload = cep.init();