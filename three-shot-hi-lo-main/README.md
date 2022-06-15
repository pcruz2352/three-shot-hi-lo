# Three Shot Hi Lo

Write a program, `main.js`, that randomly picks a number between 1 and 100. 

Give the user three chances to guess it. If they get it right, tell them so. 

If their guess is off, tell them in which direction they need to guess. And let them guess up to three times. If they get it correct before the third guess, don't ask them additional questions!

HINT: For this problem you will be creating a while loop that is dependent on 2 conditions:
A: if they guess the right answer
B: if they have guessed 3 times
Don't be afraid to add &&s and ||s in your while loop condition to account for both!

## Example  1

```
I'm thinking of a number bewtween 1 and 100. Try to guess it.
> 13

Sorry, too low! Guess again.
> 50

Sorry, too high! Guess again.
> 30

Sorry too low. I was thinking of 40.
```

## Example  2

```
I'm thinking of a number bewtween 1 and 100. Try to guess it.
> 13

Sorry, too low! Guess again.
> 20

Congratulations, 20 is correct!
```
