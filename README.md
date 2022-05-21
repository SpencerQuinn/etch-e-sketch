This is my second major project as I progressed through The Odin Project.

Thanks to earlier work involving the Rock, Paper, Scissors challange, adding event listeners felt
a bit more second nature this go-around. 

The first major hurdle I've encountered is creating a dynamically generated board.
Eventually I used CSS grid to do this. I had a variable that recored the side height, and
another variable called boardArea whose value was dependent on the side height variable.

Using this in a for loop, I appended individual board squares to the parent "board" container. To arrage them properly, I used grid-template-columns and rows with a repeat(1fr, ${sideHeight}). This enabled equal distribution, no matter what number of squares were generated, while maintaining the board dimensions.

The color wheel was a signifigant aspect of this project. I wanted to better understand creating shapes and arrangements in css. The base wheels structure is composed of several divs with dimensions or 0, but with borders that either have a color or are transparent. The rotation aspect was relatively easy, and only involved a simple calculation.

The color wheel also needed to be able to affect the board square event listener to change the color of the mouseover events. I gave each color div a data-postion attribute numbered either 0-9. Each rotation of the wheel corresponded with an increment (left +1, right -1). This changed the position attribute of each color. To keep the numbers in the same range, I used the formula ((position + 10) + increment) % 10. Then, using a global variable of userColor, I would set the current color based on a query selector for data-position="0".