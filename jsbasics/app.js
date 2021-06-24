/*console.log('This is the log message');
console.info('This is the information message');
console.warn('This is the Warn');
console.error('Ths is the error message ');
let student={
    name:'john',
    age:34,
    designation:'developer'
};

console.table(student);
let a=10;
let b=20;
let sum=a+b;
console.log('The sum '  + a + " , " + b + '  is: ' + sum);
console.log(`the sum  ${a} , ${b} is: ${sum}`);

let time=-20;
let wishMessage='';
if( time > 0 && time<=12){
    wishMessage='Good Morning';
}
else if(time > 12 && time <= 17){
    wishMessage='Good Afternoon';
}
else if(time > 17 && time <= 27){
    wishMessage='Good Evening';
}
else{
   wishMessage='Enter proper time';
}
console.log(wishMessage);

let day =new Date().getDay();
let Today='';
day = 0;
switch (day){
    case 0 :
       Today ='sunday';
       break; 
       case 1 :
       Today ='monday';
       break; 
       case 2 :
       Today ='thuesday';
       break; 
       case 3 :
       Today ='wednesday';
       break; 
       case 4 :
       Today ='thursday';
       break; 
       case 5 :
       Today ='friday';
       break; 
       case 6 :
       Today ='saturday';
       break;
       case 0 :
       Today ='sunday';
       break;  

}
console.log(`Today is : ${Today}`);

let result='';
for(let i=0; i<=10; i++){
if(i <= 9){
    result +=` ${i} ,`;
}
else{
    result += `${i}`;
}
}
console.log(result);
let result='';
for(let i=20; i>=0; i-=2){
    if( i > 0){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);
let num=5;
result='';
for(let i=1; i<=num; i++){
    for(let j=1; j<=i; j++){
        result+= `*`;
    }
   result += `\n`;
}
console.log(result);

result='';
let number=5;
for(let i=1;  i<=5; i++){
    for(let j=1; j<=i; j++){
        result+= `${j}`;
    }
    result+= `\n`;
}
console.log(result);

result='';
let num=5;
for(let i=1; i<=5; i++){
    for(let j=1; j=i; j++){
        result+= `${i}`;
    }
    result= `\n`;
} 
console.log(result);

let result='';
let i=0;
while(i<=10){
    if(i<=9){
        result += `${i} , `;

    }
    else {
        result +=`${i}`;
    }
    i++;
}
console.log(result);

result ='';
let num=5;
i=1;
while(i<=num){
    let j=1;
    while(j<=i){
        result += ` * `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

result='';
let i=1;
while(i<=5){
    let j=1;
    while(j<=1){
        result += `${i}`;
        j++;
    }
    i--;
}
console.log(result);+;


let empolyees=[
    {id:1, name:'johnn', age:40, designation:'software developer', isActive:'true'},
    {id:3, name:'ram', age:24, designation:'java developer', isActive:'true'},
    {id:4, name:'bob', age:45, designation:'php developer', isActive:'false'},
    {id:5, name:'kam', age:29, designation:'manager', isActive:'true'},
    {id:6, name:'joo', age:34, designation:'team leader', isActive:'false'},

];
result='';
for(let employee of empolyees){
    result+= ` ${ employee.name } `;
}
console.log(result);
//filter employye
console.log(empolyees);
let juniorEmployee=[];
for(employee of empolyees){
    if(employee.age <= 30){
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee);

let activeEmployee=[];
for(employee of empolyees){
    if(employee.isActive){
        activeEmployee.push(employee);
    }
}
console.log(activeEmployee);

let sum =function(a,b){
    let result = 2*(a+b);
    return result;
}
let output=sum(10,20);
console.log(output);
let result='';
let sum=function(x,y){
    result += (x+y);
    return result;
}
 let output=sum(20,40);
console.log(output);
let student={
    name:'john',
    lastname:'bob',
    fullName:function(){
        return 'Arjun Reddy'
    }
};
console.log(student.fullName())
let oterfn=function(){
    console.log('i m outer fun')
    let innerfun=function(){
        console.log('im inner func');
    };innerfun();
};oterfn();


let glassBowle=function(rawPanner,masala){
    let marrinatePanner=`Mixing :(${rawPanner} + ${masala})`;
    return marrinatePanner;
}
let cookingBowle=function(marrinatePanner,water){
    let cookedPanner=`Cooking:(${marrinatePanner} + ${water})`;
    return cookedPanner;
}
let eatingPlate=function(cookedPanner, rice){
    let eating=`Eating:(${cookedPanner} + ${rice})`;
    
    console.log(eating);
}
let rawPanner='3kg panner';
let masala='salt garlic xyz';
let marrinatePanner=glassBowle(rawPanner,masala);
let water='1ltr water';
let cookedPanner=cookingBowle(marrinatePanner,water);
let rice='1kg rice';
eatingPlate(cookedPanner,rice);

let sqrt=Math.sqrt(144);
console.log(`surt of 144 is: ${sqrt}`);

let pow=Math.pow(2,3);
console.log(`the 2 power of: ${pow}`);
let min=Math.min(18,19,20,21,22,33,44,55,66);
console.log(`min is: ${min}`);
let max=Math.max(18,19,20,21,22,33,44,55,66);
console.log(`max is: ${max}`);
let random=Math.round(Math.random() * 10000);
console.log(random);

let msg='Good Morning';
let findZeros = (str) => {
   let count=0;
    for(let i=0; i<=str.length-1; i++){
        let char =str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }return count;
}
console.log(`The zero is in sting: ${findZeros(msg)}`);

let msg='Good Morning';
let reverString= (str) => {
    let tempString='';
    for(let i=str.length-1; i>=0; i--){
        let char = str.charAt(i);
        tempString += char;
    }return tempString;
};
console.log(`${msg}=> ${reverString(msg)}`);

let msg1='ABA';
let isPalidrome=(str) => {
    
    let tempString='';
    for(let i=str.length-1; i>=0; i--){
        let char = str.charAt(i);
        tempString += char;
    }return ( str === tempString);
    }
console.log(`${msg1} is palidrome: ${isPalidrome(msg1)}`);

let msg="Anushri Deshmukh";
let tringleOne= (str) => {
    let tempString='';
    for(let i=1; i<=str.length; i++){
        tempString+= `${str.substr(0,i)} \n`;

    }
    return tempString;

}
console.log(tringleOne(msg));*
let addSpace=(num)=>{
    let tempSpace='';
    for(let i=1; i<=num; i++){
        tempSpace+='';
    }return tempSpace;
};

let msg="Anushri Deshmukh";
let tringleTwo= (str) => {
    let tempString ='';
    for(let i=0; i<=str.length-1; i++){
        tempString += ` ${addSpace(i)}${str.substr(i)} \n`;

    }
    return tempString;

}
console.log(tringleTwo(msg));

let msg="Anushri Deshmukh";
let tringleThree= (str) => {
    let tempString ='';
    for(let i=str.length-1; i>=0; i--){
        tempString += ` ${str.substr(i)} \n `;

    }
    return tempString;

}
console.log(tringleThree(msg));*/


let printWishMe=(message,color)=>{
    let h1Tag=document.querySelector('.msg');
    h1Tag.innerHTML=message;
    h1Tag.style.backgroundColor=color;
    h1Tag.style.padding='15px';
    h1Tag.style.boxShadow='black';

}

let gmButton = document.querySelector('#gm-btn');
gmButton .addEventListener('click',function(){
    printWishMe('Good Morning','coral')

})

let gaButton = document.querySelector('#ga-btn');
gaButton .addEventListener('click',function(){
    printWishMe('Good Afternoon','pink');

})
let geButton = document.querySelector('#ge-btn');
geButton .addEventListener('click',function(){
    printWishMe('Good Evening','red');

})
let gnButton = document.querySelector('#gn-btn');
gnButton .addEventListener('click',function(){
    printWishMe('Good Night','blue');

})



