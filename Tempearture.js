let temp = prompt("Enter temprature value if temperature in Celcius (C) and temperature in Farenhiet (F): ");

if(temp == "C")
{
    let temperature = prompt("Enter temperature value in Celcius: ");
    let f = (1.8*temperature) + 32;
    console.log("temperature vaue in farenhiet: " + f);
}

else
{
    let temperature = prompt("Enter temperature value in Farenhiet: ");
    let c = temperature - 32;
    let d = c/1.8;
    console.log("temperature vaue in celcius: " + d);
}
