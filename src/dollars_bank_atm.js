const prompt = require('prompt-sync')({sigint: true});

const user = require('./application_views');


module.exports = function(){
    var userAccounts = new Array();
    while(true){
        //Welcome promt
        let input = prompt(user.welcome());

        // convert user input to num
        input = Number(input);

        switch(input) {
            case 1: //Login
            let userInput = prompt(user.login());
            let userFound = false;
            for(i = 0; i < userAccounts.length; i++){
                if(userInput === userAccounts[i].apin){
                    var anotherTrans = true;
                    while(anotherTrans){
                        let choice = prompt(user.transaction.menu());
                        choice = Number(choice);
                        switch (choice){
                            case 1: // Account balance
                                user.transaction.checkBalance(userAccounts[i]);
                            break;
                            case 2:// Transactions History
                                user.transaction.printHistory(userAccounts[i]);
                            break;    
                            case 3: // Update pin
                                user.transaction.upDatePin(userAccounts[i]);
                            break;    
                            case 4: //Withdrwal
                                user.transaction.withdraw(userAccounts[i]);
                                break;    
                            case 5:// Deposit
                                user.transaction.deposit(userAccounts[i]);
                            
                            break;      
                        }
                        let repeat = prompt(user.transaction.repeat());
                        repeat.toLocaleLowerCase();
                        if (repeat != 'y')
                            anotherTrans = false;
                        
                       
                    }
                    userFound = true;
                    break;
                }
                
                
            }
            if(!userFound)
                console.log('\x1b[31m', 'Error Try Again USAer')
            break;
        case 2:// New User
            let newUser = user.newUser();
            if (newUser != null){
                userAccounts.push(newUser);
            }
            break;
            default:
              
                console.log('\x1b[31m', 'Error Try Again')
            break;    
        }
    }
}
