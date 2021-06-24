let formatNumber= (number)=>{
let result=(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
return result;
}



let rangeE1=document.querySelector('#range');
let amountE1=document.querySelector('#amount');
rangeE1.addEventListener('input', function(){
    let selectedAmount=rangeE1.value;
    amountE1.innerText=formatNumber(selectedAmount);
})