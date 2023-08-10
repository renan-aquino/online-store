export function formatPrice(valueInCents: number){
    const valueInReals = valueInCents / 100;
    return valueInReals.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}