# Day 14

## Summary: 
* Display: Flexbox
* Display: Grid

### Flexbox
* One Dimension
* Create a flex-container to wrap all the flex-items inside
* Main axis goes horizontal to all the flexbox container
* Cross axis goes on the vertical in all the flex container
* If the flex direction is change means that the cross axis is the main axis and the Main axis is the cross axis
* Justify content apply to main axis
* Align items apply to the cross axis. The default is stretch, is taking all the vertical space that they can
* Align-content apply to the cross axis. All the elemtns can be placed having the container as reference
* Flex shrink, prevent the item to be smaller
* Flex grow, grow the lemnt when the window is resized (can be applied to mutiple elements)
* flex-basis, make the size of the element to 0
* use the align-self to overide the property of align-items
* Change the order of the elemsnts inside of the flex container

### Grid
* Two Dimension
* Create grid-container and grid items
* grid-template-columns to define how much columns have the grid container
* Define the space in the grid with 1fr, 2fr. That will 2fr wiill take double space as the 1fr
* repeat the columns with, reapeat(4, 100px)
* define the rows space grid-template-rows
*  grid-auto-rows: minmax(150px, auto) to have a min and the maximum limit on the table height
*  Set the space btw the rows and columns: grid-gap
*  Set the space to rows or columns  grid-row-gap: 20px grid-column-gap: 20px;
*  Create template areas to position the content: grid-template-areas: "header header" "sidebar content" "sidebar content". On the item define the the position according with the name grid-area: header;
*  Another method to display the columns is to use grid-column-start: 1; grid-column-end: 3; As gap is counting we need to count the gap or use grid-column-end: -1;
* Short form for the grid-column: 1 / -1 (start, end)
* The same will work for the rows:  grid-row-start: 2 grid-row-end: 4;
* grid-column: span 2; to define how much columns the item will take
* Justify-content will place the container on the middle of horizontal axis
* Align-content apply to cross Axis - vertical (must to give height of reference exemple: 100vh)
* use the align-self to overide the property of align-items
