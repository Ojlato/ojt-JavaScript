const time=document.querySelector(".timer");
const tst=document.querySelector("#test-area")
const origin=document.querySelector("#origin-text p").innerHTML;
const wrapper=document.querySelector(".test-wrapper");
const Reset=document.querySelector("#reset");
let tymer=[0,0,0,0];
var runinng=false;
let set;
function reset() {
    clearInterval(set);
    set=null;
    tymer=[0,0,0,0];
    runinng=false;
    tst.value="";
    time.innerHTML="00:00:00";
    wrapper.style.borderColor="gray"
};function zero(ti) {
    if(ti<=9) {
        ti="0"+ti;
    };return ti;
};function run() {
    let current=zero(tymer[0])+":"+zero(tymer[1])+":"+zero(tymer[2]);
    time.innerHTML=current;
    tymer[3]++;
    tymer[0]=Math.floor((tymer[3]/100)/60);
    tymer[1]=Math.floor(tymer[3]/100)-(tymer[0]*60);
    tymer[2]=Math.floor(tymer[3]-(tymer[1]*100)-(tymer[0]*6000));
};function spell() {
    let txt=tst.value;
    var orig=origin.substring(0,txt.length);
    if(txt==origin) {
        wrapper.style.borderColor="green";
        clearInterval(set);
    }else {
        if(txt==orig) {
            wrapper.style.borderColor="yellow";
        }else {
            wrapper.style.borderColor="red";
        };
    };
};function start() {
    let agar=tst.value.length;
    if(agar==0 && !runinng) {
        runinng=true;
        set=setInterval(run,10);
    };};tst.addEventListener("keypress",start);
tst.addEventListener("keyup",spell);
Reset.addEventListener("click",reset);