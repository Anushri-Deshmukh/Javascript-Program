let textAreaEl=document.querySelector('#text-area');
let countBoxEl=document.querySelector('#char-count');
textAreaEl.addEventListener('keyup', function(){
    let textLength=textAreaEl.value.length;
    countBoxEl.innerText=textLength;
})