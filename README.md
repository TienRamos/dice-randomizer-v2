Dice Randomizer v.2.0 is an update to the original Dice Randomizer, my first personal web development project. It includes several new features and improvements based on the feedback of the wonderful people from the r/learnprogramming subreddit. 

New features:
- support for up to 9 dice
- customizable number of sides/faces
- color changer
- log of the previous roll
- press spacebar to roll dice

Improvements: 
- displayed dice are now done in CSS instead of being PNG files, allowing custom number of dice sides and removing need to preload dice images
- roll dice button now randomizes the dice without the need to refresh the page
- improved layout for mobile
- added a favicon

How it works:
 
1. The dice number selector determines which of the 9 dice are visible. A switch statement takes the number of dice as an input to determine which configuration the dice are to be displayed. 

2. The number of sides determine the range of numbers that a random number function, which is called upon clicking the “roll dice” button, could generate. 

3. The change color button also uses a switch statement to determine the hex code of the displayed dice. The colors cycle indefinitely through the use of the modulo operator.

4. For the log of the previous roll, a function cycles through all the visible dice and stores the value of those dice in an array. The contents of the array are displayed only after the “roll dice” button is triggered again. Then the array is reset, and the new values of the visible dice are stored.

Personal note:
I am very much aware of the extent of code repetition in this project, especially with the CSS files. I want to refactor it, but I think I’d get more value from my sweet, sweet college semestral break by making more projects. 

With that said, I hope you’d enjoy using this little project of mine as much as I enjoyed coding it (mostly the JavaScript, not so much the CSS).

-Tien Ramos

