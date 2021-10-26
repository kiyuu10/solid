class User {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class filterUser {
    filter(User, objFilter) {
        return User.filter(function(user) {
            return objFilter.isMatch(user);
        });
    }
}

class filterByName {
    constructor(match) {
        this.match = match;
    }

    isMatch(user) {
        return user.name === this.match;
    }
}

class filterByAge {
    constructor(match) {
        this.match = match;
    }

    isMatch(user) {
        return user.age === this.match;
    }
}