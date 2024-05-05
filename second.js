let customer_name = prompt("Enter Customer Name: ");
let customer_number = prompt("Enter Customer Number: ");
let old_reading = prompt("Enter the old reading units: ");
let current_reading = prompt("Enter the current reading units: ");
let maintenance_charges = 250;

let total_units = current_reading - old_reading;

let total_usage = total_units;

if(total_usage > 100)
{
    total_usage = (total_usage * 4.75);
}
else
{
    total_usage = (total_usage * 3.25);
}

let total_bill = maintenance_charges + total_usage;

let service_tax = (total_usage * 11.5)/100;

let grand_total = total_bill + service_tax;


console.log("===================================================================");
console.log("           UTTAR PRADESH POWER CORPORATIN LIMITED                       ");
console.log("                Bill of Supply of Electricity                           ");
console.log(" Circle: UpWest         Circle Code: 105       TollFreeNo: 18001800440");
console.log("         ---------------------------------------------------");

console.log("         Customer Name:                          "+ "" + customer_name);
console.log("         Customer Number:                        " + "" + customer_number);
console.log("         Old Meter Reading:                      " + "" + old_reading);
console.log("         Current Reading:                        " + "" + current_reading);
console.log("         Total Units Consumed:                   " + "" + total_units);
console.log("         Total Usage:                            " + "" + total_usage);
console.log("         Fixed Rental Line Maintenance Charges:  " + maintenance_charges);
console.log("         Total Amount:                           " + "" + total_bill);
console.log("         Total Tax:                              " + "" + service_tax);
console.log("         ----------------------------------------------------");
console.log("         Total Bill Amount Payable:              " + "" + grand_total);





