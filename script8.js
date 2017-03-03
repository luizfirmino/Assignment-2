/*
Part 8 – Looping a Triangle (5 points)

Write a loop that displays the following triangle within a console window:
*/

var i = 0;
var triangle = "#";

while (i<7){
    window.console.log(triangle);
    triangle = triangle + "#";
    i = i + 1
}