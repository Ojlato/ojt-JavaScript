console.log("Connected...");
//تعریف متغیرهای str
var Name,number;
Name="Omid";
number='09355073770';
//_________________//انواع پرینت_________________
// console.log(Name,number);
// document.write(number);
// window.alert(Name);
//_________________//متغیرهای دوگانه و چندگانه str_________________
let person={
    fname:"Omid",
    lname:"Jalali"
};(person.fname+" "+person.lname);
//_________________//متغیرهای عددی_________________
var Num=69;
var Num2=66;
if(Num==Num2){
    ("Numbers Are Equal");
}else{
    ("Numbers Are Not Equal");
}; //عملگرهای منطقی شرطی
//______________________/در معادلات بررسی کنه باید === بنویسیم datatype اگر بخوایم
var num=55;
var num2=55;
var isEqual;
if(num==num2)//اگر بخوایم دوتا شرط بذاریم ک ترکیب عطفی باشه باید از & و اگر بخوایم ترکیب فصلی باشه از | استفاده میکنیم
{
    isEqual=true
}else{
    isEqual=false
};
//______________________/مدل متغیر سه گانه در یک خط
Num==Num2 ? isEqual=true : isEqual=false;
("The Equal match is: "+isEqual);//در کل عملگر شرطی در سه حالت استفاده میشود
//_________________//متغیر های بولین(یا درست یا غلط)_________________
var isComplete=false;
isEqual=(Num==Num2)
//_________________//آرایه ها(هم مقدار عددی هم اس تی آر و هم بولین دریافت میکنند)_________________
var names=new Array("Omid","Mostafa","Sadeq"); 
    (names[0]);
var myarray=("Ojlato",20,true,"Kashmar",17.5);
//______________________
var color=["Red","Blue","Black","Orange","Yellow"];
color.reverse(); //از آخر به اول خواندن لیست
color.shift(); //خانه اول لیست رو حذف میکنه
color.unshift("Green"); //به اول لیست مقدار اضافه میکنه
color.pop(); //خانه آخر لیست رو حذف میکنه
color.push("White"); //به آخر لیست مقدار اضافه میکنه
//______________________
var newcolor=color.slice(); //از لیست کپی برداری میکنه و تغییرات ما روی کپی اعمال میشه
var result=color.indexOf("Black",0); //جستجو کردن در لیست با ذکر نام مورد نظر و اینکه از کجا شروع کنه
var arraystr=color.join(" | "); //تمام مقادیر لیست رو بهم متصل میکنه و به اس تی آر تبدیل میکنه و با علامت دلخواه از هم جدا میشن
//_________________//و اعمال روزهای هفته switch دستور_________________
var today=new Date().getDay();
var day;
switch (today) {
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wendsday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    default:
        day="Your Value Not Found"
}("Today Is: "+day);
//_________________//تعریف تابع دارای نام_________________
function prj(a,b) {
    var res;
    a>b ? res=["avali",a] : res=["dovomi",b];
    return res;
    // a>b ? console("avali",+a): console("dovomi",+b);
};// var kasr=3/14; // var kasr2=6/28; // prj(kasr,kasr2); // prj(8/25,10/5);

// var newres = prj(3/14,6/28);
(prj(3/14,6/28));
//______________________ //تابع های بدون نام
var big=function(a,b) {
    var res;
    a>b ? res=["avali",a] : res=["dovomi",b];
    return res;
}//(big(13/25,7/9));
//______________________ //تابع های بدون نیاز به فراخوانی
var Big=(function(a,b) {
    var res1;
    a>b ? res1=["avali",a] : res1=["dovomi",b];
    return res1;
})(1/2,7/9);(Big);
//_________________//انواع متغیرها که دو نوع هستند_________________
var Var1="Variable-1"; //globally variale
function myprj() {
    var Var2="Variable-2"; //locally variable
    (Var2);
}myprj();
//______________________ //استفاده میکنیم var,const و let برای تعریف متغیر از مقدار 
var Res="OMID"; //این متغیر قابلیت تغییر مقادیر را داراست
Res=20;
const Res1="JALALI"; //این متغیر را نمیتوان متغیرش را بعدا تغییر داد باید همان ابتدا ابن کار را کرد
//Res1=83;
function scope() {
    let local=2; //برای اینکه بتونیم بلاک هارو جدا نمایش بدیم و مقادیرشون در یک تابع باهم قاطی نشن نیازمند این متغیریم
    if (local=2) {
        let local="Different Variable"; //استفاده کنیم هردو جوابها مثل هم هستند var اگر از
        (local);
    }(local);
}scope();
//_________________//اشیا_________________
var Person={Fname:"OMID",Lname:"JALALI TORSHIZI"};
var Person2=new Object();
    Person2.phonenumber=9355073770;
    Person2.age=20;
(Person2);
//______________________ //تعریف تابع و انواع متغیرها در اشیا
let course={
    title:"JavaScript",
    teacher:"Mohammad Hashemi",
    level:1,
    active:true,
    view:0,
    updateview:function() {
        return ++course.view;
    }
};(course);
course.updateview();
(course);
//______________________ //روش دوم تعریف تابع و انواع متغیرها در اشیا
function Course(title,teacher,level,active,view,updateview) {
    this.title=title,
    this.teacher=teacher,
    this.level=level,
    this.active=active,
    this.view=view,
    this.updateview=function() {
        return ++this.view;
    }
};let Course1=new Course("JavaScript","Mohammad Hashemi",1,true,15000);
let Course2=new Course("Python","Amir Amiri",2,false,20000);
let Course3=new Course("HTML,CSS","Milad Dehyami",2,false,10000);
let Course4=new Course("Front-End","Qasem Bassaki",1,false,5000);
let Course5=new Course("NodeJS","Daniyal Setayesh",1,true,500);
//_________________//for حلقه_________________
const Cars=["Benz","BMW","Land Crouse","Lexus","Aoudi"];
for(let i=0; i<5; i++) {
    ("The Car Brand Is: "+Cars[i]); //for of
};for(value of Cars) {
    (value);
} //for in
const car={name:"Haima S5",ProductYear:1401,color:"White",isABS:true};
for(key in car) {
    (car[key]);
}
//_________________//while,do حلقه_________________
let j=0
while(Cars[j]) {
    (Cars[j]);
    j++;
}
do {
    (j);
    j++;
}while(j<=10);
//______________________
for(let j=1; j<15; j++) {
    if(j==5) {
        continue; //break;
    }
    (j);
} //_________________//DOM_________________
const friends=["Sadeq","Qasem","Mostafa","Mohammad","Omid"]
function me() {
    for (const item of friends) {
    var node=document.createElement("li");
    var textnode=document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("1").appendChild(node)
    }
};me();
//_________________//Events_________________
const DIV=document.getElementById("demo");
DIV.onmouseover=function() {
    DIV.style.backgroundColor="chartreuse";
};DIV.onmouseout=function() {
    DIV.style.backgroundColor="goldenrod";
}; //______________________
const element=document.getElementById("btn");
element.addEventListener('click',function() {
    document.getElementById("po").innerHTML=Date();
}); //display
// function display() {
//     document.getElementById("po").innerHTML=Date();};
//______________________
const e_btn=document.getElementById("btn2")
e_btn.addEventListener('click',f);
e_btn.addEventListener('click',f2)
function f() {
    alert("First Function Happend");
};function f2() {
    alert("second Function Happend");
}; //______________________
let n1=8;
let n2=3;
const el=document.getElementById("btn2");
el.addEventListener('click',function() {
    func(n1,n2)
});
function func(a,b) {
    document.getElementById("pi").innerHTML="8x3="+a*b
}; //____________\\
const g=document.getElementById("Dv");
g.addEventListener('click',function() {
    alert("You Clicked on Tag Div")
})//,true);
const h=document.getElementById("Pi");
h.addEventListener('click',function() {
    alert("You Clicked on Tag P")
})//,true);
const bt=document.getElementById("btnR");
bt.addEventListener('click',del)
function del() {
    g.removeEventListener('mousemove',random);
}; //____________\\
g.addEventListener('mousemove',random);
function random() {
    document.getElementById("Dv").innerHTML=Math.random();}
//__________________forEach__________________
const nomber=[19,52,60,83];
nomber.forEach(function(item,index,arr) {
    console.log(`item= ${item} index= ${index}`)
    console.log(arr)
})
//__________________A Countinue to ajax.js & ajax.html file__________________