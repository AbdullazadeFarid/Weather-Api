// const WEATHER_API_Key = "d8b1e5c0106cbdedd225d056ab2e0fd1"; // MAILE GELEN API
// const WEB_URL = "https://api.openweathermap.org/data/2.5/weather";
// const QUERY = `?api_key=${WEATHER_API_Key}`;

const WEATHER_API_Key = "d8b1e5c0106cbdedd225d056ab2e0fd1";           // MAILE GELEN API
const WEB_URL = "https://api.openweathermap.org/data/2.5/weather";    // URL
const city = prompt();

var temp = document.getElementById("temp")
var humidity = document.getElementById("humidity")
var windSpeed = document.getElementById("windSpeed")
var cityName = document.getElementById("cityName")
var description = document.getElementById("description")
var weatherIcon = document.getElementById("weatherIcon")

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d8b1e5c0106cbdedd225d056ab2e0fd1

const QUERY = `?q=${city}&APPID=${WEATHER_API_Key}&units=metric`;   //&units=metric Dereceye cevirmek


const Weather = async()=>{          // asinxron funksiya yaradirig (funnksiyanin ozu asinxron olur onu sora cagiracig)
const response = await fetch(`${WEB_URL}${QUERY}` ,{  // BURDA AWAIT YAZIRIGKI BERKE CAVABI BACK VERMEDISE GOZDESIN NEVAXT VERECEK ONDA QAYITSIN.MORTEZENIN ICINDEDE KEYNEN QUERY NI BIRLESDIRIK CUNKI OBJECTLER ORDA YERLESIR

    method:"GET",              //get getir demekdi
})

 const data = await response.json()    // melumatlari JSON formasinda gelmesini bildiririk
 console.log(data);
 INFO (data)
 }

function INFO (element){
    temp.textContent=element.main.temp
    humidity.textContent=element.main.humidity
    windSpeed.textContent=element.wind.speed
    cityName.textContent=element.name
    description.textContent=element.weather[0].main
    weatherIcon.src = `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`

}
Weather()       // yuxardaki async await funksiyasin cagiririg ki iwlesin





















































// cont.innerHTML += `                                // CRERATE ELEMENT ELEMEDEN BELE YAZMAG OLUR
//         <h2>Name: ${element.name}</h2>
//         <p>Main: ${element.weather[0].main}</p>
//         <p>speed: ${element.wind.speed}</p>
//         <p>Temp: ${element.main.temp}</p>
//         `;






{/* <h2>Name: ${element.name}</h2>            // elementin name ni deyerini menimset h2 ye
<p>Main: ${element.weather[0].main}</p>  // elementin icinde yerlesen weatherin 0 ci obyektinde olan mainin deyerin menimset
<p>speed: ${element.wind.speed}</p> */}  //elementin icinde wind in icinde speed i p ye menimset
















