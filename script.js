'use strict';

/*********************/
/***** BANK APP *****/
/*******************/

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////////////////////
// SHOW TRANSACTION HISTORY
///////////////////////////////////
const displayMovements = function(movements) {
  // Clear the initial transaction values
  containerMovements.innerHTML = ' ';

    movements.forEach(function(mov, i){
      // let type;
      // if(mov > 0) {
      //   type = 'deposit';
      // } else {
      //   type = 'withdrawal';
      // };
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements)

//////////////////////////////////////
// CREATE USERNAME BASED ON INITIALS
//////////////////////////////////////
const createInitials = function(accts) {
  // const user = 'Steven Thomas Williams'; 
  // const userName = user.toLowerCase().split(' ');
  // console.log(userName);
  // const userName = user.toLowerCase().split(' ').map(n => n[0]);
  // console.log(userName);
  // const userName = user.toLowerCase().split(' ').map(n => n[0]).join('');
  // console.log(userName); // Gets initials 'stw' in lower case
  
  accts.forEach(function(acct){
    acct.userName = acct.owner.toLowerCase().split(' ').map(n => n[0]).join('');
  });  
}
createInitials(accounts); // Creates a new accounts array with usernames based on initials included
console.log(accounts); 
