class Buyer {
    constructor(name) {
        this.name = name;
    }
}

class Contract {
    constructor(Buyer, contractName) {
        this.Buyer = Buyer;
        this.contractName = contractName;
    }

    createRentContract() {}
    createBuyContract() {}
}

class VietNameseContract extends Contract {
    createRentContract() {}
    createBuyContract() {}
}

class ForeignerContract extends Contract {
    createRentContract() {}

    // a foreigners are not allowed to buy
    createBuyContract() {
        throw "Can not buy";
    }
}