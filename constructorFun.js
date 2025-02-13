const account = [];
function BankAccount(cname, bal) {
  this.customerName = cname;
  this.accountNumber = Date.now();
  this.balance = bal;
  //   this.getBalance = function () {
  //     return this.balance;
  //   };
  //   this.setBalance = function (bal) {
  //     return (this.balance += bal);
  //   };
}

BankAccount.prototype.getBalance = function () {
  return this.balance;
};

const shashikAccount = new BankAccount("shashi", 1000);
const pankajAccount = new BankAccount("Pankaj", 5000);

account.push(shashikAccount.getBalance());
account.push(pankajAccount);

console.log(account);
