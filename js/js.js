var btn = document.getElementsByTagName('button');
console.log(btn);
btn[0].innerHTML = 'hello';
btn[1].innerHTML = 'self-introduction';
btn[0].addEventListener('click',popup,false);
btn[1].addEventListener("click",addtext,false);
var count = 0;
function popup() {
    alert('你好，欢迎查看我的简历，我叫段泽昆！')
}

function addtext() {
    
    var span = document.getElementsByTagName('span')[0];
    if(count%2===0){
        span.textContent = "My name is Emlir,I like javascript,html,css,I can't study well,but i still study hard!";
        btn[1].innerHTML = 'close';
        count++;
    }else{
        span.textContent = "";
        count++;
    }
    
}
