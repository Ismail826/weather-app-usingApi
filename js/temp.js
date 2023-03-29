const API_KEY =`2dfa3e1374d8330bcb2e8a91a3495fa6`

const searchText =()=>{
   const city = document.getElementById('city-name');
   const searchText=city.value;
   searchTemp(searchText);
   document.getElementById('city-name').value=''; 
//    console.log(searchText);
} 

const searchTemp =(text)=>{

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemp(data));
    // console.log(url);
}

searchTemp('Dhaka');

const setInnerText=(id,text)=>{
    document.getElementById(id).innerText = text;
}

const displayTemp=(temputure)=>{
    setInnerText('city',temputure.name);
    setInnerText('temp',temputure.main.temp);
    setInnerText('conition',temputure.weather[0].main);
// set weather icon
const url =`https://openweathermap.org/img/wn/${temputure.weather[0].icon}@2x.png`;
const imgIcon = document.getElementById('weather-icon');
imgIcon.setAttribute('src',url);

    console.log(temputure);
}