let cityname = document.getElementById("cityInput");
let add = document.getElementById("add");
let cityOutput = document.getElementById("cityoutput");
let jav = document.getElementById("jav");
let temp = document.getElementById("temp");
const apiKey = "a80f26e8d33296a9bc3002ac06b258e4";
function deg(value){
    return (value-273).toFixed();
}

async function gweather() {
  let Res =await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apiKey}`)).json();
  info(Res);
};function info(data) {
  let citi=data["name"];
  let jaw=data["weather"][0]["description"];
  let tempu=data["main"]["temp"];
  
  cityOutput.innerHTML =`City Name: ${citi}`;
  jav.innerHTML =`Atmospheric Conditions: ${jaw}` ;
  temp.innerHTML =`Temprature : ${deg(tempu)}`;
};add.addEventListener('click',gweather):
