/*
Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more
to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:
1. Begin your application by asking the user if they’re ready to play your game. If they are, display the message
“Awesome, our hero is waiting!” If they’re not, display the message “Too bad, we’re going to play anyway because
our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean
result of clicking OK or Cancel.
*/

var isReady = window.confirm("Are you ready to play The “\Hitchhiker's Guide to the Galaxy”\ Game?");

if (isReady)
    window.alert("Awesome, our hero is waiting!");
else
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");

/*
2. Now, alert the user to the following scenario: “You are in a  dingy, and humid cave searching for the lost
treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your
back is against the wall…”
*/

window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

/*
3. Then prompt the user with the following message: “Which direction would you like to head (please enter forward,
left, or right).”
*/

var strDirection = window.prompt("Which direction would you like to head (please enter forward, left, or right).");

/*
4. Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
*/

switch (strDirection){
    case "forward":
            window.alert("You walk about 100 yards and safely make your way out of the cave.");
            break;
    case "left":
            window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
            break;
    case "right":
            window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
    default:
        window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.")
}

/*
5. Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”

6. Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value
between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
*/

var intRate = parseInt(window.prompt("Please, on a scale of 1-10, how you rate our game?"));

if (!(intRate >= 1) || !(intRate < 10))
    intRate = 10;

if (intRate >= 6)
    window.alert("Thank you, we will continue to make improvements to the game!");
else
    window.alert("Whatever, you weren’t very good at this game anyway!");
