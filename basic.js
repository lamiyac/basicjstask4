let x=()=>
{
    const date = new Date();
    const n = date.toDateString();
    const time = date.toLocaleTimeString();
    document.write('Date: ' + n +'<br>');
    document.write('Time: ' + time);
}
x();
document.write('<br> ');

let z=(year)=>
 {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.write (year + ' is a leap year');
        document.write('<br> ');
    } else {
        document.write(year + ' is not a leap year');
        document.write('<br> ');
    }
}
// const year = prompt('Enter a year:');
z(2011);


let y=()=>
{
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    const formattedDate1 = month + '/' + day + '/' + year;
    document.write(formattedDate1);
    document.write('<br> ');
        const formattedDate2 = month + '-' + day + '-' + year;
        document.write(formattedDate2);
        document.write('<br> ');
        const formattedDate3 = day + '-' + month + '-' + year;
        document.write(formattedDate3);
        document.write('<br> ');
        const formattedDate4 = day + '/' + month + '/' + year;
        document.write(formattedDate4); 
}
y();
document.write('<br> ');

let a=()=>
{
    const d1 = new Date();
    document.write(d1);
}
a();
document.write('<br> ');

let b=()=>
{
    var g1 = new Date();
   
    var g2 = new Date(2019 - 08 - 03);
    if (g1.getTime() < g2.getTime())
        document.write("g1 is lesser than g2");
    else if (g1.getTime() > g2.getTime())
        document.write("g1 is greater than g2");
    else
        document.write("both are equal");
}
b();
document.write('<br> ');

// let e=()=>{
//     let countDownDate = new Date("Aug 5, 2025 14:22:36").getTime();
//     let x = setInterval(function() {

//     let now = new Date().getTime();
//     let timeLeft = countDownDate - now;
//     const days = Math.floor( timeLeft/(1000*60*60*24) );
//     const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
//     const minutes = Math.floor( (timeLeft/1000/60) % 60 );
//     const seconds = Math.floor( (timeLeft/1000) % 60 );
//     document.write(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
//     if (timeLeft < 0) {
//         clearInterval(x);
//         document.write('CountDown Finished');
//     }
//     },2000);}
//     e(2000);
//     document.write('<br> ');


let f=(min=2,max=100)=>
{
const a = Math.floor(Math.random() * (max - min + 1)) + min;
document.write(`Random value between ${min} and ${max} is ${a}`);
document.write('<br> ');

}
f();

let g=()=>
{
   
    document.write("The URL of this page is: " + window.location.href);
    document.write('<br> ');
}
g();





let checkNumber=(x)=>
 {

    
    if(typeof x == 'number' && !isNaN(x)){
        if (Number.isInteger(x)) {
            document.write(`${x} is integer.`);
            document.write('<br> ');
        }
        else {
            document.write(`${x} is a float value.`);
            document.write('<br> ');
        }
    
    } else {
        document.write(`${x} is not a number`);
        document.write('<br> ');
    }
}
checkNumber(34);

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);

let k=()=>
{
    const d1 = new Date();
    document.write(d1);

    const result = d1.getTime();
    document.write(result);
    document.write('<br> ');

}
k();


let validateEmail=(email_id) =>
{
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email_id)) {
        document.write('The email address is valid');
        document.write('<br> ');
    }
    else {
        document.write('The email address is not valid');
        document.write('<br> ');
    }
}

validateEmail('abc123@gmail.com');
validateEmail('hello@com');

let u=()=>
{
const img = new Image();

// get the image
// img.src = "/public/images/d7ef05a188bd5f1eac4310807fa0892f.jpg";

// get height and width
img.onload = function() {
    document.write('width ' + this.width)
    document.write('height '+ this.height);
}}
u();
// let o=()=>
// {
// var message = 'hello world';

// const number = 10;
// function multiplyNumbers(a, b) 
//  {
//     return a * b;
// }
// export { message, number, multiplyNumbers };



// import { message, number, multiplyNumbers } from './modules.js';

// document.write(message); 

// document.write(number);
// document.write(multiplyNumbers(3, 4)); 
// document.write(multiplyNumbers(5, 8)); 
// }
o();
let l=()=>
{
class Stack {
    constructor() {
        this.items = [];
    }

    add(element) {
        return this.items.push(element);
    }
    
    
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
   
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
document.write(stack.items);
document.write('<br> ');
document.write(stack.peek());
document.write('<br> ');
document.write(stack.isEmpty());
document.write('<br> ');
document.write(stack.size());
document.write('<br> ');
stack.clear();
document.write(stack.items);
document.write('<br> ');
}
l();
let n=()=>
{
class Queue {
    constructor() {
        this.items = [];
    }
    
 
    enqueue(element) {
        return this.items.push(element);
    }
    
   
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    

    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
document.write(queue.items);

queue.dequeue();
document.write(queue.items);
document.write('<br> ');
document.write(queue.peek());
document.write('<br> ');
document.write(queue.isEmpty());
document.write('<br> ');
document.write(queue.size());
document.write('<br> ');
queue.clear();
document.write(queue.items);
document.write('<br> ');
}
n();