let selectBox=document.querySelector('#lang-select');
selectBox.addEventListener('change', function(){
    let selectedOption=selectBox.value;
let languageOption=document.querySelector('#lang-option');
  languageOption.innerText=selectedOption   
});