/*
Part 7 - The “Coin Flip Streak” Game (5 points)

In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals,

operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of

streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete

the game follow the steps outlined below:

1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
*/

var coinFlip;

/*
2. Create a do while loop.
*/

do {

    /*
    3. Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
    */
    
    coinFlip = Math.round(Math.random());
    
    /*
    4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
    */
    if (coinFlip == 0)
        window.console.log("Heads");
    else
        window.console.log("Tails");
    
    
    
}
/* 5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”. */
while (!(coinFlip==1));

