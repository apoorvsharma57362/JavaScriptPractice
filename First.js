let height = prompt("Enter your height = ");
let weight = prompt("Enter your weight = ");

height = height/100;

bmi = weight/(height*height);

if(bmi<18.5)
{
    console.log("You are underweight");
}

else if(bmi>18.5 && bmi<24.9)
{
    console.log("Normal weight");
}

else if(bmi>24.9 && bmi<29.9)
{
    console.log("You are overwight");
}

else if(bmi>30)
{
    console.log("Obesity");
}