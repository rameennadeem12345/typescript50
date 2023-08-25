//assignment2  
// 1 )- write a program to convert the temperature from Celsius to Fahrenheit and vice versa.

var temperature: number=45 
var convertInFahrenheit= (temperature * 9/5) + 32
console.log("convert in fahrenheit")

// fahrenheit to celsius 

var temperature:number=45
var convertInCelsius= (temperature - 32) * 5/9
console.log("convert in celsius")
 
// 2 ) - write a program that calculates the percentage.

var totalMarks: number = 1000
var obtainedMarks : number = 1081
var percentage : number = obtainedMarks / totalMarks * 100
console.log(percentage)

// 3 ) - write a program that convert given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var getDays:number = 45
var convertIntoWeek:number = (getDays/7)
var convertIntodays:number = getDays%7
console.log(`{convertIntoWeek} Weeks and {convertIntodays} days`);

// 4) - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var price: number = 90
var salePrice: number = 110
var get10perscent: number = (10 / 100) * salePrice
console.log(get10perscent, "10% discount ");

var get5perscent: number = (5 / 100) * salePrice
console.log(get5perscent,);

if (price > 100) {
    var givediscount: number = salePrice - get10perscent
    console.log(`{salePrice} is sale price with 10% Discount sale Price is (givediscount)`)
}
else {
    var give5perdiscount: number = salePrice - get5perscent
    console.log(`{salePrice} is sale price with 5% Discount sale Price is (give5perdiscount) `)

}


// 5) - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."


var age:number =  20
if(age > 0 && age <= 12){
    console.log(`Your age is {age} you are Child`);
    
}
else if(age >= 13 && age <=19 ){
   console.log('You are Teenager');
   
}else{
    console.log('You are Adult');
    
}

// 6)  - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
 
  var temperature:number = 10
  if(temperature <= 15){
    console.log(`The weather is cold You can wear warm cloths`);
  }
  else if(temperature >= 16 && temperature <=30){
     console.log("weather is normal");
     
  }
  else if(temperature >=31 && temperature <=40 ){
    console.log('The weather is Hot ');
    
  }else{
    console.log('Qiyamat ki Nishani');
  }

//   7) - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
  
  var value:number = 40
   if(value%3 == 0  && value%5 == 0 ){
     console.log(`{value} is divided by 3 and 5`);
     
   }else{
    console.log(`{value} is Not divided by 3 and 5`);
    
   }

//   8) - Write a program that checks if the given year is leap year or not.

   var year :number = 2024

   if(year%4 == 0 ){
     console.log(`{year} is a Leap Year`);
     
   }else{
    console.log(`{year} is not leap year`);
    
   }


//    9)  - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
  
   var userNumber:number = 1

   switch (userNumber ) {
    case 1:
        console.log(`Its a Monday`);
        break;
    case 2:
        console.log(`Its a Tuesday`);
        break;
    case 3:
        console.log(`Its a Wednesday`);
        break;
    case 4:
        console.log(`Its a Thursday`);
        break;
    case 5:
        console.log(`Its a Friday`);
        break;
    case 6:
        console.log(`Its a Saturday`);
        break;
   
    default:
        console.log('Its a Sunday');
        break;
   }

// 10)- Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.

  var numberOfUnits:number = 100
  var priceOfOneUnit:number = 27

  if(numberOfUnits >= 100 && numberOfUnits < 200){
    var calculated:number =  (numberOfUnits * priceOfOneUnit) 
    var  bill:number = calculated + (10/100)*calculated
    console.log(
        `Your total units is {numberOfUnits}, and your total bill is {bill} with 10% tax.`
      );
      
  }
  else if(numberOfUnits >= 200 && numberOfUnits < 500 ){
    var calculated:number =  (numberOfUnits * priceOfOneUnit) 
    var  bill:number = calculated + (15/100)*calculated
    console.log(
        `Your total units is {numberOfUnits}, and your total bill is {bill} with 15% tax.`
      );
      
  }
  else{
    var calculated:number =  (numberOfUnits * priceOfOneUnit) 
    var  bill:number = calculated + (25/100)*calculated
    console.log(
        `Your total units is {numberOfUnits}, and your total bill is {bill} with 25% tax.`
      );
      
  }