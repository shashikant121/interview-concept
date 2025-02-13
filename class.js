class BankAccount {
  customerName;
  accountNumber = Date.now();
  balance = 0;
  constructor(cname, bal = 0) {
    this.customerName = cname;
    this.balance = bal;
  }

  getBalance() {
    return this.balance;
  }
  setBalance(bal) {
    this.balance += bal;
  }
}

const shashikAccount = new BankAccount("shashi", 1000);

console.log(shashikAccount.getBalance());
