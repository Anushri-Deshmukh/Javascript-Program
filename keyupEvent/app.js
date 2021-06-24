let textBox=document.querySelector('#userName');
textBox.addEventListener('keyup', function(){
 let textEnter=textBox.value;
 let messageElement= document.querySelector('#msg');
 messageElement.innerHTML=textEnter;

});