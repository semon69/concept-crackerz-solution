function temperatureConverter(valNum) {

    let celcius = (valNum - 32)/1.8;
    celcius = celcius.toFixed(2);
    console.log(parseFloat(celcius));
    
}
temperatureConverter(50);
temperatureConverter(103);