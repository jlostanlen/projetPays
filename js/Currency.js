
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
