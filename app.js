let w ={
    apiKey:'4511ed4303e610b7532da6b40b5ef564',
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&units=metric&appid=" +
              this.apiKey
              ).then((res)=> res.json())
              .then((data)=> {
                this.displayWeather(data);
                document.querySelector('.msg').style.display = 'none';
            }).catch((err)=> {
                    document.querySelector('.msg').style.display = 'flex';
              })
    },
    displayWeather : function(data){
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon ,description,temp, humidity, speed );
        document.querySelector('.city').innerText = 'The Weather in ' + name;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.icon').src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.humidity').innerText = 'humidity is: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind speed is: ' + speed +  'km/h';
    },
    search : function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
       
    }
};
document.querySelector('.search-btn').addEventListener('click', function(){
    let bc = document.body
    w.search();
    if(bc.style.background == 'linear-gradient(45deg, var(--c),var(--c2))'){
        bc.style.background = 'linear-gradient(135deg, var(--c),var(--c2))';
    }else{
        bc.style.background = 'linear-gradient(45deg, var(--c),var(--c2))'
    }
})

w.fetchWeather('cairo');