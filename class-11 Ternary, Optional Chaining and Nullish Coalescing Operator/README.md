# TypeScript Conditional & Nullish Coalescing Example

[Run TypeScript Code directly : https://www.npmjs.com/package/ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

This small TypeScript snippet demonstrates the use of:

- **Conditional Statements**
- **Ternary Operator**
- **Nullish Coalescing (`??`) vs Logical OR (`||`)**
- **Optional Chaining (`?.`)**

### Code Overview

```ts
const age: number = 15;

// Using if-else
if (age > 18) {
  console.log('adult');
} else {
  console.log('not adult');
}

// Using ternary operator
const isAdult = age > 18 ? 'adult' : 'not adult';
console.log(isAdult);

// Nullish coalescing vs logical fallback
const isAuthenticated = null;
const result = isAuthenticated ?? 'Guest'; // returns "Guest"
const result2 = isAuthenticated ? isAuthenticated : 'Guest'; // also "Guest"
console.log({ result }, { result2 });

// Optional chaining with nested object
type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    permanetAddress?: string;
  };
};

const user: any = {
  name: 'Ababil',
  address: {
    city: 'Uganda',
    presentAddress: 'Uganda',
    road: '34234',
  },
};

// Safely accessing a potentially missing nested property
const parmanentAddress = user.dsfds?.permanetAddress; // avoids runtime error
```

### Concepts Demonstrated

- ✅ Clean and safe conditional logic
- ✅ Fallback values using `??` and `?:`
- ✅ Safe access of deeply nested properties with `?.`
