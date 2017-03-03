window.console.log("=========== Part 1 - Math and Math Functions ===========\n");

/*
Part 1 - Math and Math Functions (5 points)
Create a new web page and solve these JavaScript Math problems:
1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
*/

window.console.log("************* STEP 1 ******************\n");
var number = parseInt(window.prompt("Hey you! Give me a number, please."));
if (number < 0) number = number * -1;
window.console.log(number);
window.console.log("*********** END-STEP 1 ****************\n\n");


/*
2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
*/

window.console.log("************* STEP 2 ******************\n");
var number = parseFloat(window.prompt("Hey you! Give me a decimal number, please."));
window.console.log(Math.round(number));
window.console.log("*********** END-STEP 2 ****************\n\n");



/*
3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
*/
window.console.log("************* STEP 3 ******************\n");
var number = parseFloat(window.prompt("Hey you! Give me a decimal number, please."));
window.console.log(Math.round(number));
window.console.log("*********** END-STEP 2 ****************\n\n");


/*
4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
*/
window.console.log("************* STEP 4 ******************\n");
var numbers = window.prompt("Hey you! Give me 5 numbers separated by commas, please.").split(",");
window.console.log("Largest number in the list: " + Math.max(parseInt(numbers[0]),parseInt(numbers[1]),parseInt(numbers[2]),parseInt(numbers[3]),parseInt(numbers[4])));
window.console.log("Smallest number in the list: " + Math.min(parseInt(numbers[0]),parseInt(numbers[1]),parseInt(numbers[2]),parseInt(numbers[3]),parseInt(numbers[4])));
window.console.log("*********** END-STEP 4 ****************\n\n");


/*
5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
*/

window.console.log("************* STEP 5 ******************\n");
var number = parseFloat(window.prompt("Hey you! Give me number, please."));
window.console.log("The square root of " + number + " is " + Math.sqrt(number));
window.console.log("*********** END-STEP 5 ****************\n\n");


window.console.log("=========== END Part 1 - Math and Math Functions ===========\n\n\n");


window.console.log("=========== Part 2 - Date and Date Functions ===========\n");

/*
Continue with the previously created web page and now solve these JavaScript Date problems:
6.	Create an application that gets the current date. Display that result within the console window.
*/
window.console.log("************* STEP 6 ******************\n");
var objDate = new Date();
window.console.log(objDate.toDateString());
window.console.log("*********** END-STEP 6 ****************\n\n");


/*
7.	Create an application that gets the number of days in a month. Display that result within the console window.
*/
window.console.log("************* STEP 7 ******************\n");
var objDate = new Date(2017, 2, 0);
window.console.log(objDate.getDate());
window.console.log("*********** END-STEP 7 ****************\n\n");


/*
8.	Create an application that gets the month name from a particular date. Display that result within the console window.
*/
window.console.log("************* STEP 8 ******************\n");
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var objDate = new Date();
window.console.log(months[objDate.getMonth()]);
window.console.log("*********** END-STEP 8 ****************\n\n");


/*
9.	Create an application that tests whether a date is a weekend. Display that result within the console window.
*/
window.console.log("************* STEP 9 ******************\n");

//var objDate = new Date(2017,2,18); // weekend day
var objDate = new Date();

if (objDate.getDay() == 0 || objDate.getDay() == 6)
    window.console.log("Yeah!! Happy weekend, do not drink too much!!");
else
    window.console.log("Take it easy!!! the weekend is coming soon!");

window.console.log("*********** END-STEP 9 ****************\n\n");



/*
10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
*/
window.console.log("************* STEP 10 ******************\n");
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var objDate = new Date();
window.console.log("Yesterday was " + weekdays[objDate.getDay()-1]);
window.console.log("*********** END-STEP 10 ****************\n\n");


/*
11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
*/
window.console.log("************* STEP 11 ******************\n");
var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var objDate = new Date();
window.console.log("The first letter of the day is " + weekdays[objDate.getDay()][0]);
window.console.log("*********** END-STEP 11 ****************\n\n");


window.console.log("=========== END-Part 2 - Date and Date Functions ===========\n\n\n");




window.console.log("=========== Part 3 - Conditional Logic and Looping Operations ===========\n\n");


/*Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:
12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
*/
window.console.log("************* STEP 12 ******************\n");
var number1 = window.prompt("Please inform a integer number.");
var number2 = window.prompt("Please inform another integer number.");

if (number1 > number2)
    window.console.log("The bigger number informed is: " + number1);    
else
    window.console.log("The bigger number informed is: " + number2);
window.console.log("*********** END-STEP 12 ****************\n\n");


/*
13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
 
Student Name	Marks
Ursula	80
Paul	77
Henry	88
Tabitha	95
Lucy	68
*/
window.console.log("************* STEP 13 ******************\n");

var students = ["Ursula","Paul","Henry","Tabitha","Lucy"];
var marks = [0,0,0,0,0];

var mark = 0;
while (mark < marks.length){
    marks[mark] = parseFloat(window.prompt("Please, insert the mark for " + students[mark]));
    mark = mark + 1;
}
/*
The grades are computed as follows:
Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/
function getGrade(grade){
    if (grade < 60) 
        return "F";
    else if (grade < 70) 
        return "D";
    else if (grade < 80) 
        return "C";
    else if (grade < 90) 
        return "B";
    else    
        return "A";
}

window.console.log("*** Student *********** Grade ************\n");
var i = 0;
while (i < marks.length){
    window.console.log("*** " + students[i] + " *********** " + getGrade(marks[i]) + " ****************");
    i = i + 1;
}

window.console.log("*********** END-STEP 13 ****************\n\n");

/*

14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
*/
window.console.log("*********** STEP 14 ****************\n\n");

var i = 1;
while (i < 16){
    
    if ((i % 2) == 0)
        window.console.log(i + " is even");
    else
        window.console.log(i + " is odd");

    i = i + 1;
}

window.console.log("*********** END-STEP 14 ****************\n\n");




/*
15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/


window.console.log("*********** STEP 15 ****************\n\n");
var i = 1;
while (i < 100){
    
    if ( ((i % 3) == 0) && ((i % 5) == 0) )
        window.console.log(i + " - FizzBuzz");
    else if ((i % 3) == 0)
        window.console.log(i + " - Fizz");
    else if ((i % 5) == 0)
        window.console.log(i + " - Buzz");
    
    i = i + 1;
}
window.console.log("*********** END-STEP 15 ****************\n\n");


window.console.log("=========== END-Part 3 - Conditional Logic and Looping Operations ===========\n\n\n");