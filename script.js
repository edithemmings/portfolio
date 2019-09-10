//header countdown
let today = new Date();
let numDays = today.getDate() - 22;
let numMonths = (today.getMonth()+1) - 2;
let numYears = today.getFullYear() - 2019;

let monthsInDays = numMonths * 30.42;
let yearsInDays = numYears * 365.25;

let sum = numDays + monthsInDays + yearsInDays;
let daysSince = Math.round(sum);
console.log(daysSince + ' days since I downloaded my first text editor');
document.getElementById('daysSince').innerHTML = daysSince;

//hover effects
const arr = ['todo', 'rps', 'rocket', 'twf'];

arr.forEach(function(member) {
  document.getElementById(member+'front').addEventListener('mouseenter', function() {
    document.getElementById(member + 'front').className = 'front grow';
    document.getElementById(member + 'caption').className = 'caption show';
  });
  document.getElementById(member+'front').addEventListener('mouseleave', function() {
    document.getElementById(member + 'front').className = 'front';
    document.getElementById(member + 'caption').className = 'caption';
  });
})
