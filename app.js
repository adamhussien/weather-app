'strict use'

 
const key = '4ece32b39b9c43ba9a590541240203';
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&aqi=no&q=`;
const btn = document.querySelector(".btn")
const input = document.querySelector(".input-failed")
const cards = document.querySelector(".cards")
async function fetchWeather(city) {
    try {
        const res = await fetch(apiUrl + city);
        const data = await res.json();
  //      console.log(data)
        let {current} = data
        let {location} = data
       // console.log(current.condition.icon);
        const card = document.createElement("div")

        card.className = "details"
        card.innerHTML = `
        <div class="details">
            <img src="${current.condition.icon}" alt="">
            <h3 class="city">${location.name}</h3>
            <p class="text">${current.condition.text}</p>
            <p class="humidity">humidity ${current.humidity}</p>
            <p class="temp">feels like ${current.temp_c}</p>
            <p class="temp"></p>
        </div>
        `
       cards.appendChild(card)
    } catch (err) {
        console.log('Something went wrong');
    }
}
 
btn.addEventListener("click", function () {
    const searchcity = input.value.trim()
    if(searchcity !== ""){
        cards.innerHTML = "";
        fetchWeather(searchcity)
        input.value =""
    }
})




