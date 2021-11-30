


class Account{
    constructor(pin, balance){
            this.pin = pin;
            this.balance = balance;

            this.history = new Array();
            let data = new Data();

            this.history.push('+ $' + balance + ' on ' + data);
        }

        get apin() {
            return this.pin;
        }
        set apin(){
            this.pin = pin;

        }

        get abalance(){
            return this.balance;
        }
        set abalance(){
             this.balance = balance;
        }

        get ahistory(){
             this.history;
        }
        set ahistory(){
            this.history = history;
        }
}

module.exports = Account;