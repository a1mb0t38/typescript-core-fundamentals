# Type narrowing in typescript
Type narrowing is reducing a variables possible type in a specific block of code. this is used to understand better type use in code.
and this provide a better type safety.

there are several ways to perform type narrowing.

Example:

```
    function values(vlaue: string | number){
        if(typeof value === "string"){
            console.log("this is string")
        }else{
            console.log("this is number")
        }
    }

```

type narrowing help typescript identify correct type before performing operations.
