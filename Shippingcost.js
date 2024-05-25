let orderValue = parseFloat(prompt("Enter the total order value: "));
let shippingCost;

if(orderValue < 50)
{
    shippingCost = 5;
    let value = orderValue + shippingCost;
    console.log("the order value is: "+ value);
}

else if(orderValue >= 50 && orderValue <= 100)
{
    shippingCost = 10;
    let value = orderValue + shippingCost;
    console.log("the order value is: "+ value);
}
else
{
    shippingCost = 0;
    let value = orderValue + shippingCost;
    console.log("the order value is: "+ value);
}