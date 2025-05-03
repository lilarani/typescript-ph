# Reference Type -> Object

## Literal Types

A literal type in TypeScript represents a value that is exact and immutable

### Example

```ts
const user: {
  company: 'Programming Hero'; // Literal types
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  company: 'Programming Hero',
  firstName: 'Jhankar',
  lastName: 'Mahbub',
  isMarried: true,
};

console.log(user);
/*
{
  company: 'Programming Hero',
  firstName: 'Jhankar',
  lastName: 'Mahbub',
  isMarried: true
}
*/
```
