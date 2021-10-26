class User {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class UserFilter {
    filterByName(User, name) {
        return User.filter(function(user) {
            user.name === name;
        });
    }
    filterByAge(User, age) {
        return User.filter(function(user) {
            user.age === age;
        });
    }
}