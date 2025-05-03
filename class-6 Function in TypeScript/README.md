# TypeScript Function Examples

This project demonstrates different ways to define and use functions in
TypeScript, including:

## 📌 Features

### ✅ Normal Function

```ts
function add(num1: number, num2: number): number;
```

Defines a traditional function that adds two numbers.

### ✅ Arrow Function

```ts
const addArrow = (num1: number, num2: number): number => ...
```

A modern, concise function syntax achieving the same addition.

### ✅ Object Method with `this`

```ts
const poorUser = {
  name: "neela",
  balance: 0,
  addBalance(balance: number) { ... }
};
```

Demonstrates how to mutate object properties using `this`.

### ✅ Array Mapping with Arrow Function

```ts
const updatedArr = arr.map((value: number): number => value * 5);
```

Uses `Array.prototype.map` to transform an array of numbers.

---

## 🧪 Sample Output

```js
50
50
{ name: 'Neela', balance: 40, addBalance: [Function: addBalance] }
[ 15, 20, 25 ]
```

{ name: 'Neela', balance: 0, addBalance: [Function: addBalance] }
