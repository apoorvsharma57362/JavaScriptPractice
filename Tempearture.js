const prompt = require("prompt-sync")();
let temperature = prompt("Enter temperature in Celcius: ");

if(temperature < 0)
{
    console.log("Its freezing outside");
}

else if(temperature >= 0 && temperature <= 10)
{
    console.log("Its cold outside");
}

else if(temperature >= 11 && temperature <= 20)
{
    console.log("Its a pleasant day");
}

else if(temperature >= 21 && temperature <= 30)
{
    console.log("Its a warm day");
}

else
{
    console.log("Its hot outside");
}