/*Part 9 – Odd or Even? (5 points)

Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and

display a message in the console window.

Sample Output:

&quot;0 is even&quot;

&quot;1 is odd&quot;

&quot;2 is even&quot;
*/


var i = 1;
while (i < 16){
    
    if ((i % 2) == 0)
        window.console.log(i + " is even");
    else
        window.console.log(i + " is odd");

    i = i + 1;
}
