const prompt = require('prompt-sync')({sigint: true});

const Account = require('./customer_account');


var user = {}


//Welcome Promt

user.welcome = function(){
    console.log('\nx1b[32m','DOLLARSBANK ATM Welcomes You!!');
    console.log('Enter a valid Choice (1 > Transaction 2 > Open new Account','\x1b[0m');
}


//New Account
user.newUser = function(){
    let deposit = prompt(console.log('\x1b[32m', 'Enter Initial Deposit : 00.00: \x1b[0m'));

    deposit = Number(deposit);

    let regex = /\d+(\.\[1,2])?/;

    if(regex.test(deposit)){
        deposit = deposit.toFixed(2);

        let isNotValidPin = true;
        let pin = '';
        while (isNotValidPin){
            pin = prompt(console.log('\x1b[32m', 'Secure  pin: 4 digit number: \x1b[0m'))
            let reg = /^[0-9]{4,4}$/;
            if(reg.test(pin)){
                isNotValidPin = false;
            }else{
                console.log('\x1b[31m', 'Invalid Pint');
            }
        }

        let check = prompt(console.log('\x1b[32m', 'Verify pin: \x1b[0m'))
        if (pin == check){
            console.log('\x1b[34m', 'Account Created.')
            return new Account(pin,deposit);
        }else{
            console.log('\x1b[31m', 'Error Please Try Again.');
            return null;
        }

    }else{
        console.log('\x1b[32m', 'Error Please Try Again');
    }

}


// Login To Account
user.login = function(){
    
    console.log('\x1b[32m', 'Enter Pin: v')


}
user.transaction = {}

// Transcation Menu 

user.transaction.menu = function(userAccount){
    console.log('\x1b[32m',' Transcation Menu: ');
    console.log('Enter 1 : Account Balance Check');
    console.log('Enter 2 : Print Transactions');
    console.log('Enter 3 : Update Pin');
    console.log('Enter 4 : Withdraw Amount');
    console.log('Enter 5 : Deposit Amount');
    console.log('Choice should be in 1-5 ','\x1b[0m');
}


// Check Balance 

user.transaction.checkBalance = function(userAccount){
    console.log('\x1b[32m',' Your Account Balance is: $' + userAccount.abalance + '\n');
}

// Transaction History

user.transaction.printHistory = function(userAccount){
    history = userAccount.ahistory;
    console.log('\x1b[32m', ' ===== Transcation History ======');
    for( let i = 0; i < history.length;i++){
        console.log(history[i]);
    }
}

//Update Account Pin
user.transaction.upDatePin = function(userAccount){
    let oldPin = prompt(console.log('\x1b[32m', 'Enter Old Pin: '));

    if(oldPin == userAccount.apin){
        let newPin = prompt(console.log('\x1b[32m', 'Enter New Pin: '));
        let reg = /^[0-9]{4,4}$/;
        if(reg.test(newPin)){
            userAccount.apin = newPin;
            console.log('\x1b[34m', 'Your pin has benn changed: ')
        }else{
            console.log('\x1b[31m', 'Error Try Again ')
        }

    }else{
        console.log('\x1b[31m', 'Error Try Again')
    }
}


// Withrawal
user.transaction.withdraw = function(userAccount){
    let withdra = prompt(console.log('\x1b[32m', 'Enter Withdrawal Amount: 00.00 : \x1b[0m'));
    withdra = Number(withdra);

    let regex = /\d+(\.\[1,2])?/;
    if(regex.test(withdra)){
        let balance = Number(userAccount.abalance);
        balance -= withdra;
        if(balance < 0){
            console.log('\x1b[31m', 'Insufficient Funds')
        }else{
            balance = balance.toFixed(2);
            userAccount.abalance = balance;
            withdra = withdra.toFixed(2);

            let newDate = new Date();
            userAccount.ahistory.push('-$' + withdra +' on ' + newDate);
            console.log('\x1b[34m', 'Deposit Successful ')
        }
    }else{
        console.log('\x1b[31m', 'Error Try Again')
    }
}


// Depoist 

user.transaction.deposit = function(userAccount){
    let deposit = prompt(console.log('\x1b[32m', 'Enter Deposit Amount: 00.00 : \x1b[0m'));
    deposit = Number(deposit);
    let regex = /\d+(\.\[1,2])?/;

    if(regex.test(deposit)){
        let balance = Number(userAccount.abalance);
        balance += deposit;
    
        balance = balance.toFixed(2);
        userAccount.abalance = balance;
       deposit = deposit.toFixed(2);

        let newDate = new Date();
        userAccount.ahistory.push('-$' + deposit +' on ' + newDate);
        console.log('\x1b[34m', 'Deposit Successful ')
        
    }else{
    console.log('\x1b[31m', 'Error Try Again')
    }
}

// Loop

user.transaction.repeat = function(){
    console.log('\x1b[32m', 'Perform another transaction?(y,n)  \x1b[0m')
}

module.exports = user;
