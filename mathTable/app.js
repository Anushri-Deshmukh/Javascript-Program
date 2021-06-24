let numberEL=document.querySelector('#rqe-number');
numberEL.addEventListener('keyup',function(){
    let theNumber= Number(numberEL.value);
    document.querySelector('#number').innerText=theNumber;
    calculate();
});

let rangeEL=document.querySelector('#multiplier');
rangeEL.addEventListener('input' , function(){
    let selectMultiplier=Number(rangeEL.value);
    document.querySelector('#multiple').innerText =selectMultiplier;  
    calculate();
});

let calculate= ()=>{
    let theNumber=Number(document.querySelector('#number').innerText);
    let multiplier=Number(document.querySelector('#multiple').innerText );
    let mathResult=theNumber*multiplier;
    document.querySelector('#result').innerText=mathResult;
}
