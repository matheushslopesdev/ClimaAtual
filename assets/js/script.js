
const city = document.querySelector('#cityName')
const temp = document.querySelector('#temperature')
const desc = document.querySelector('#description')

navigator.geolocation.getCurrentPosition(onSucess, onError)

function onSucess(position){
    const {latitude, longitude} = position.coords;
    const APIkey = '7a48649acff95ba09f86e0180992817a';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`
    getTemp(url)
    getCidade(url)
    getDesc(url)

}

function onError(){
    console.log('Falha')
}


function getClima(lat,lon){
    const APIkey = '7a48649acff95ba09f86e0180992817a';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    return url
}

async function getTemp(url){
    const responde = await fetch(url)
    const resul = await responde.json()
    let tempK = resul['main']['temp']
    let transforTemp = tempK - 273.15
    temp.innerHTML = transforTemp.toFixed() + ' °C'

}
async function getCidade(url){
    const responde = await fetch(url)
    const resul = await responde.json()
    const cidade = resul['name']
    city.innerHTML = String(cidade).toUpperCase()

}
async function getDesc(url){
    const responde = await fetch(url)
    const resul = await responde.json()
    const descricao = resul['weather'][0]['main']
    desc.innerHTML = String(descricao).toUpperCase()

}


function getInputs(){
    

}

