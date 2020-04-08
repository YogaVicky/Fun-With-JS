class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log('Balance: ' + this.balance + ' EUR');
    }
}

const newAccount = new BankAccount('Will Alexander', 500);

newAccount.showBalance(); // prints 'Balance: 500 EUR' to the console

class BePolite {
    static sayHello() {
        console.log('Hello!');
    }
    static sayHelloTo(name) {
        console.log('Hello ' + name + '!');
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // prints 'Hello!'
BePolite.sayHelloTo('Will'); // prints 'Hello Will!'
const sum = BePolite.add(2, 3); // sum = 5