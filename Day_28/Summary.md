## Day 28

## Summary: ✔
* Immediately Invoked Function Expressions (IIFE)
* Closure

### Closures
*  A function has access to the variable envirement (VE) of the execution in which it was credated
*  Closure: VE attached to the function, exactly as it was at the time and place the function was created
*  The closure has priority over scope chain
*  A closure is the closed-over variable envirement of the execution context in which a function was created, even after that execution is gone
*  A closures gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time
*  A closure sure that function doesn't loose connection to variables that existed at the function's birth place
*  A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the envirement where the functions was created
*  Get the closers console.dir(functioName)
