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
}

class DomesticContract extends Contract {
    createRentContract() {}
    createBuyContract() {}
}

class internationalContract extends Contract {
    createRentContract() {}
}

class VietNameseContract extends DomesticContract {
    createRentContract() {}
    createBuyContract() {}
}

class ForeignerContract extends internationalContract {
    createRentContract() {}
}