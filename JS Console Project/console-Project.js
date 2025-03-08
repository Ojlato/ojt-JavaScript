// const element= document.getElementById("test")//.innerHTML="Hello DOM";
// element.innerHTML="Today is: "+Date();

// document.getElementById().outerHTML

// document.getElementsByClassName("promo-area");

// document.getElementsByTagName("p");


// document.querySelectorAll(".reason");
// document.querySelectorAll("div > p");

// document.querySelector(".main-title").hasAttribute("id");
// document.querySelector(".main-title").setAttribute("id","test");
// document.querySelector(".main-title").removeAttribute("test");

// const cta=document.querySelector(".cta a");
// if(cta.hasAttribute("target")) {
//     (cta.getAttribute("target"));
// }else {
//     cta.setAttribute("target","_blank");
// };(cta.attributes);

//__________________________________________________________________________________________________________
// localStorage.setItem('FirstName','Omid');
// localStorage.setItem('LastName','Jalali');
// localStorage.removeItem('FirstName')
// const h1=document.getElementById("title");
// const fname=localStorage.getItem("FirstName");
// fname ? h1.innerText=`Welcome ${fname}` : h1.innerText='Nobody To Welcome';
// //___________________________ها storage بخش دوم از___________________________
// const Name=document.getElementById("name");
// const form=document.querySelector("form");
// const sub=document.getElementById("sname");
// const del=document.getElementById("remove");
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
// });sub.addEventListener('click',()=>{
//     sessionStorage.setItem('FullName',Name.value);
// });del.addEventListener('click',()=>{
//     sessionStorage.removeItem('FullName');
// });
// const n=sessionStorage.getItem("FullName");
// n ? h1.innerText=`Welcome ${n}` : h1.innerText='Nobody To Welcome';
//___________________________ها storage بخش سوم از___________________________
// const reserve=document.getElementById("sabt");
// reserve.addEventListener('click',()=>{
//     const ob={firstname:"Omid",lastname:"Jalali",isMale:true};
//     var arr=[
//         {firstname:"Mohammad",lastname:"Jalali",isMale:true},
//         {firstname:"Elham",lastname:"Emarati",isMale:false},
//         {firstname:"Sadeq",lastname:"Ghanbari",isMale:true},
//         {firstname:"Elnaz",lastname:"Emarati",isMale:false},
//         {firstname:"Omid",lastname:"Jalali",isMale:true}
//     ];localStorage.setItem('PersonInfo',JSON.stringify(arr));
// });
//__________________________________________________________________________________________________________

const cta=document.querySelector(".cta a");
const alert=document.querySelector(".booking-info");
alert.classList.add("hide");
cta.classList.remove("hide")
function tog(e) {
    e.preventDefault()
    cta.classList.toggle("hide");
    alert.classList.toggle("hide");
};cta.onclick=tog;

// document.querySelector(".reason");
// document.querySelector("#multi-level-nav").classList
// document.querySelector("#multi-level-nav").classList.add("test") //.classList.remove("menu")
// document.querySelector("#multi-level-nav").classList.toggle("multi-level-nav")*2
document.querySelector("#my").className="logo";

const element= document.querySelector(".main-title");
element.innerHTML="Welcome to Paradaise Hotel Kashmar";
