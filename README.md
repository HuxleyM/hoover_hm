## Hnery Hoover Challenge ##

# goals #

Make a program to control a hoover on a rectangular grid. The hoover should take a string of directions, letters of the compass, and return its end location as well as how many dirt patches it had hoovered up.

#*what I made*#

I made a program that includes: 

-a Data Handler

I built this Handler in a functional style. Originally was going to be as a closure, however this made it impossible to stubb and mock the fs module while testing. Luckily module exports allows me to only export the functions i want visible in the global scope.

-a grid class

This is a tiny class that operates just as an object. I kept as a class as I felt over time it would develop

-a hoover class 

This class process the bulk of the program. It will take a location, grid, and directions and then output its location and number of dirtpatches cleaned.

#*assumptions*#

The mins of the grid are 0. 

Data is inputted into the input.txt file correctly.

Each Hoover has one grid, there is one hoover on one grid. 

The hoover doesnt need to remember what dirt patches it cleaned, just that it cleaned them.

A hoover cannot go out of bounds of the grid.

This program only works through changing or adding rules into index.txt within the root. 

first line is grid, second is hoover start location, last is dirctions and middle are the dirt patches. 


#*how to run*#

have the latest version of node installed. 

clone this repo

navigate into the cloned folder using terminal, run 'npm install'. 

to test please run jasmine in the root by typing jasmine in your terminal whilst in the root. 

To run the program, 

type 'node index.js' - you will see the outcome then the program will exit. 

#*changes and what would be a nice way to scale'*#

In order for the program to grow there would be a number of changes I would make. 

To enable multiple hoovers on the same grid, I would create different grids as singleton classes enabling the same grid to be cleaned by many hoovers. 

I built the moveMe method of hoover to enable it to take arguments, meaning that if the interface of the program was tweaked users would be able to control the hoovers multiple times. 

I'd work on removing the dependency upon the grid class by moving methods such as inbound and removeDirt onto the grid class and then passing this grid class along with directions into the move me method. I'd be intrested to talk about wether I should have done this with this code or wether it wasnt necessary till later :)


thanks 

huxley
