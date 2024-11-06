let inputel = document.querySelector(".enter");
let ser = document.querySelector('.go');
let section = document.querySelector(".continer");
ser.onclick = function(e) {
    if (inputel.value == "" || !isNaN(inputel.value)) {
        let oneel = document.createElement("div");
        oneel.className = "eror";
        let twoel = document.createElement("div");
        twoel.className = "image";
        let threeel = document.createElement('img');
        threeel.src = "static/404.png";
        twoel.appendChild(threeel);
        let fourel = document.createElement("div");
        fourel.className = "text";
        let five = document.createElement("h4");
        let txt = document.createTextNode("404 Eror Pleaser Try Agin");
        five.appendChild(txt);
        fourel.appendChild(five)
        oneel.appendChild(twoel);
        oneel.appendChild(fourel);
        section.append(oneel)

    } else {
        // inputel.value = "";
        let api_key = "774e49b8cbd128962ecd6e39e20d1988";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputel.value}&appid=${api_key}`;
        let data = new XMLHttpRequest();
        data.open("GET", url, true);
        data.send();
        data.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let all_data = JSON.parse(this.responseText);
                let main = all_data.main;
                let weather = all_data.weather[0];
                let cases = document.createElement("div");
                cases.className = "case";
                let textcontent = `
                
                        <div class="image">
                        <img src="static/cloudy-day-1.svg" alt="">
                    </div>
                    <div class="degree">
                        <h3>${main.temp-273} °<sup>c</sup></h3>

                    </div>
                    <div class="weather">
                        <h3>${weather.description}</h3>

                    </div>
                    
                `
                let all = document.createElement("div");
                all.className = "all-cases";
                let texttwo = `
                 <div class="box">
                <div class="text">Temperture</div>
                <h3>${Math.ceil(main.temp-273)}</h3>
            </div>
            <div class="box">
                <div class="text">Temperture-Min</div>
                <h3>${Math.ceil(main.temp_min-273)}</h3>
            </div>
            <div class="box">
                <div class="text">Temperture-Max</div>
                <h3>${Math.ceil(main.temp_max-273)}</h3>
            </div>

            <div class="box">
                <div class="text">pressure</div>
                <h3>${main.pressure} hPa</h3>
            </div>
            <div class="box">
                <div class="text">Humidity</div>
                <h3>${main.humidity}%</h3>
            </div>
            <div class="box">
                <div class="text">Sea-level</div>
                <h3>${main.sea_level}</h3>
            </div>
                
                `
                all.innerHTML = texttwo;
                cases.innerHTML = textcontent;
                section.appendChild(cases);
                section.appendChild(all);
            }
        }
    }

}