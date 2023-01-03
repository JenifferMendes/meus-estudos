function arredondar(saldo) {
    return Math.round(saldo * 100) / 100;
}

function formatarDinheiro(valor) {
    return new Intl.NumberFormat("pt-br", {currency: "BRL", style: "currency"}).format(valor);
}