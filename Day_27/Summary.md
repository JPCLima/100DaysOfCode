## Day 27

## Summary: ✔
* Em vs Rem


### EM vs Rem
* Font size:
  * EM:
    * Em are always em relation to the parent
    * 1em: 16px
    * 2em: 2*16px = 32px
  * REM
    * REM means root em, its related to the font-size of the major parent html or root::{}
* All the other units (margins, padding, ...): 
  * EM:
    * Is looking for the font-size of that element
  * REM:
    * is looking for the the font-size of root::/html
* Create btn:
  * The best is to use EM the padding will be in proportional to the font-size
  * We should use the REM because the padding will not adapt to the font-size
  * margin the buttons us ethe rem for the space out of the button be consistent
  * creating containers using EM for the element inside will have proportional size
* Media query:
  * For smaller screens change the font-size in the html

### Overflow
* We have oveflow whenthe content is passing the margins
  * Four types of overflow:
    * visible: the conteent will pass
    * scroll: will be added a scroll bar horizontal and vertical to the content
    * hidden: it will cut the content
    * auto: wil be addded scroll bar horizontal and/or vertical according with the content
  * We can use the overflow-x or overflow-y

### BEM 
* BEM stands for Block, Element and Modifier
  * Element inside the parent elemnt will have double underscore 
    * [Parent] -> card , [title] -> card__title, [image] -> card__image, [body] -> card__body
  * Modifier, for exemple the color of the card:
    * [Parent] -> card, [Parent type] -> card--dark 
  * Create a main class for the elment as card
  * Select directly the card__body, card__title or card__image
  * [More about BEM](http://getbem.com/introduction/)
    