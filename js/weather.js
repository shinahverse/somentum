//openweathermap.org

function onGeoOk(position){
    // console.log(position);
    const API_KEY = "6116fdf29c22193792085002d7a1f507"; // 이 곳에 자신의 키값을 넣습니다.
    const lat = position.coords.latitude;
    
    const lon = position.coords.longitude;
    
    console.log(`당신이 있는 곳은 위도 ${lat}, 경도 ${lon}입니다.`)
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data=>{
        console.log(data.name, data.weather[0].description, data.main.temp);
        const weahter = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weahter.innerText = data.weather[0].description;
        city.innerText = `${data.name}, ${data.main.temp}℃`;
    });

}

function onGeoError(){
    console.log("찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);