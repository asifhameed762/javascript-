//Q1.
let a = 5;
let b = 3;
let sum = a + b;
document.write("Q1. Sum of 5 and 3 is " + sum + "<br><br>");

//Q2.
let sub = a - b ;
document.write("Q2. Sub of 5 and 3 is " + sub + "<br><br>");
let multiply = a * b ;
document.write("........Multiply of 5 and 3 is " + multiply + "<br><br>");
let devide = a / b ;
document.write("........Devide of 5 and 3 is " + devide + "<br><br>");
let modulus = a % b ;
document.write("........Modulus of 5 and 3 is " + modulus + "<br><br>");

//Q3.
let c;
document.write("Q3. <br>");
document.write("b. Value after variable declaration is " + c + "<br><br>");

let d = 5;
document.write("d. Initial value : " + d + "<br>");

let e = ++d;
document.write("f. Value after increament is : " + e  + "<br>");

let f = e + 7;
document.write("h. Value after addition is : " + f  + "<br>");

let g = --f;
document.write("j. Value after decreament is : " + g + "<br>");

let reminder = g % 3 ;
document.write("i. The Reminder is : " + reminder + "<br><br>");

//Q4.
let ticket = 600;
let totalCost = ticket * 5;
document.write("Q4. Total cost to buy 5 tickets to a movie is " + totalCost + "PKR <br><br>");

//Q5.
let table = +prompt("Enter Your Number",4);
document.write("Q5. Tables <br><br>");
document.write(table + " x " + " 1 " + " = " + table*1 + "<br>");
document.write(table + " x " + " 2 " + " = " + table*2 + "<br>");
document.write(table + " x " + " 3 " + " = " + table*3 + "<br>");
document.write(table + " x " + " 4 " + " = " + table*4 + "<br>");
document.write(table + " x " + " 5 " + " = " + table*5 + "<br>");
document.write(table + " x " + " 6 " + " = " + table*6 + "<br>");
document.write(table + " x " + " 7 " + " = " + table*7 + "<br>");
document.write(table + " x " + " 8 " + " = " + table*8 + "<br>");
document.write(table + " x " + " 9 " + " = " + table*9 + "<br>");
document.write(table + " x " + " 10 " + " = " + table*10 + "<br><br>");

//Q6.





//Q7.
let item1 = 650;
let item2 = 100;
let qty1 = prompt("Enter your Quantity Item1", 3) ;
let qty2 = prompt("Enter Your Quantity Item2", 7) ;
let charges = 100;
let Cost = item1*qty1 +  item2 * qty2 + charges;

document.write("Q7. Shopping Cart <br><br>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping Charges " + charges + "<br><br>");
document.write("Total cost of your order is " + Cost + "<br><br>");

//Q8.
let totalMarks = 980;
let marksObtain = prompt("Enter Marks Obtained",804);
let percentage = marksObtain/totalMarks*100;
document.write("Q8 .MARKS SHEET <br><br>");
document.write("Total Marks :" + totalMarks + "<br>");
document.write("Marks Obtained :" + marksObtain + "<br>");
document.write("Percentage :" + percentage + "% <br><br>");

//Q9.
let usDollar = 104.8;
let saudiRiyal = 28;
let qtyDollar = prompt("Dollar Quantity",10);
let qtySaudi = prompt("Saudi Quantity",25);
let total = usDollar*qtyDollar + saudiRiyal*qtySaudi;
document.write("Q9. Currency in PKR <br><br>");
document.write("USDollar price in pkr 104.8 -pcs 10 <br><br>");
document.write("Saudi Riyal price in pkr 28 -pcs 25 <br><br>");
document.write("Total Currency In PKR : "  + total + "<br><br>");

//Q10.
let number = 5;
let result = (number + 5) * 10 / 2 ;
document.write("Q10. The Result is " + result + "<br><br>");

//Q11. 
let currentYear = 2024;
let birthYear = 1994;
let currentAge = currentYear-birthYear;
let currentAge2  = currentAge - 1;

document.write("Q11. Age Calculator " + "<br>");
document.write("Current Year : " + currentYear + "<br>");
document.write("Birth Year : " + birthYear + "<br>");
document.write("They are either " + currentAge +  " or " + currentAge2 +  " Years old<br><br>");

// Q12.
let radius = 20;
let circum = 2 * 3.142 * radius;
let area = 3.142 * radius ** 2   ;

document.write("Q12.<h1>The Geomatrizer</h1>"  + radius + "<br>");
document.write("Radius of a circle :"  + radius + "<br>");
document.write("The circumference is :" + circum + "<br>");
document.write("The area is :" + area + "<br><br>");

//Q13.

let fav_dryfruit = "almond";
let current_age = 30;
let max_age = 60;
let per_day = 15;
let eat = (max_age - currentAge ) * per_day;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite snack :" + fav_dryfruit + "<br>");
document.write("Current age :" + current_age + "<br>");
document.write("Estimated Maximum age :" + max_age + "<br>");
document.write("Amount of snacks per day :" + per_day + "<br>");
document.write("You will need " + eat + " almond to last you until the ripe old age of " + max_age);














