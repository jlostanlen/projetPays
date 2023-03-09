
class Currency{
    static all_currencies = {}
    constructor(code, name, symbol){
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }
    toString(){
        return this.code + " , " + this.name + " , " + this.symbol;
    }
}


// function fillCurrency(){
//     for(let country of Object.values(all_countries)){
//         for(let currency in country.currencies){
//             all_currency[currency.code] = new Currency(currency.code, currency.name, currency.symbol);
//         }
//     }
// }

