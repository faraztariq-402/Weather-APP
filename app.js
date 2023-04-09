function getWeather(){
    let apiKey = "b9f8a6a0e80e8e93d5265575d33b5c33";
    let cityName = document.getElementById("cityName").value
    let today = new Date()
    let hour = today.getHours()
    let minutes = today.getMinutes()
    let date = today.getDate()
    let arr = ["Janurary","February","March","April","May","June","July","August","September","October","November","December"]
let month = arr[today.getMonth()];
let year = today.getFullYear()
    let amPm = ""
let weatherImage = document.getElementById("weatherImage")
if(hour <= 11){
    amPm = "Am"
}else{
    amPm = "Pm"
}
    if(hour===0){
        hour = 12
    }if(hour>12){
        hour = hour - 12
    }if(hour<10){
        hour = `0${hour}`
    }if(minutes<10){
        minutes = `0${minutes}`
    }
    if(date === 1 && date === 21 && date === 31){
        date = `${date}st`
    }  else  if(date === 2){
        date = `${date}nd`
    }  else  if(date === 3){
        date = `${date}rd`
    }else{
        date = `${date}th`
    }
let formattedTime = `${date } ${month} ${year} ${hour } : ${minutes } ${ amPm }`
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
.then(function (response) {
// handle success
console.log(response.data);
document.getElementById("result").innerHTML = response.data.main.temp + "°C"
document.getElementById("yourCityName").innerHTML = `${cityName}`.toUpperCase()
document.getElementById("time").innerHTML = formattedTime
document.getElementById("humidity").innerHTML = `Humidity : ${response.data.main.humidity}%`
document.getElementById("feelsLike").innerHTML = `Feelslike : ${response.data.main.feels_like}°C`
document.getElementById("tempMax").innerHTML = `Max Temperature : ${response.data.main.temp_max}°C`
document.getElementById("tempMin").innerHTML = `Min Temperature : ${response.data.main.temp_min}°C`
document.getElementById("clear").innerHTML = response.data.weather[0].main
document.getElementById("wind").innerHTML = `Wind : ${Math.round(response.data.wind.speed*2.9)} Km/h ${response.data.wind.deg}°C`


if(response.data.weather[0].main === "Clear"){
    document.getElementById("pics").innerHTML = '<img src="./images/clear.png" >' 
}else if(response.data.weather[0].main === "Rain"){
    document.getElementById("pics").innerHTML = '<img src="./images/rainy.png" >' 
}else if(response.data.weather[0].main === "Haze"){
    document.getElementById("pics").innerHTML = '<img src="./images/haze or smoke pic.png">' 
}else if(response.data.weather[0].main === "Clouds"){
    document.getElementById("pics").innerHTML = '<img src="./images/cloudy pic.png" >' 
}else if(response.data.weather[0].main === "Sunny"){
    document.getElementById("pics").innerHTML = '<img src="./images/sunny.png" >' 
}else if(response.data.weather[0].main === "Smoke"){
    document.getElementById("pics").innerHTML = '<img src="./images/haze or smoke pic.png" >' 
}else if(response.data.weather[0].main === "Mist"){
    document.getElementById("pics").innerHTML = '<img src="./images/haze or smoke pic.png" >' 
}


})
.catch(function (error) {
// handle error
console.log(error.data);
})

}