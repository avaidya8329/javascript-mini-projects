const mycheckbox = document.getElementById("mycheckbox");
const myvisa = document.getElementById("myvisa");
const mycreditcard = document.getElementById("mycreditcard");
const mypaypal = document.getElementById("mypaypal");
const mysubmit = document.getElementById("mysubmit");
const mysubcheck = document.getElementById("mysubcheck");
const mysubradio = document.getElementById("mysubradio");

mysubmit.onclick = function(){
    
if (mycheckbox.checked) {
    mysubcheck.textContent = `you are subscribed !`;

}
else{
    mysubcheck.textContent = `you are  not subscribed !`;
}

if (myvisa.checked) {
    mysubradio.textContent = `you are using visa for payment !`;
}else if(mycreditcard.checked){
    mysubradio.textContent = `you are using creditcard for payment !`;
}else if(mypaypal.checked){
    mysubradio.textContent = `you are using paypal for payment !`;
}
else{
    mysubradio.textContent = `you have not selected payement type !`;
}
}