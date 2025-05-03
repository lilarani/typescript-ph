# 📘 TypeScript Type Aliases & Function Types

This project showcases how to define and use **custom types**, including
**object types**, **primitive aliases**, and **function types** in TypeScript.

---

## 🔹 `type` Alias for Object

Define reusable object structures:

```ts
type Student = {
  name: string;
  age: number;
  gender: string;
  contact?: string; // optional
  address: string;
};

const student1: Student = {
  name: 'Ababil',
  age: 21,
  gender: 'male',
  contact: 'dfsdfds',
  address: 'Bhaduria',
};

console.log(student1);
```

---

## 🔹 `type` Alias for Primitives

Give semantic meaning to primitive values:

```ts
type UserName = string;
type IsAdmin = boolean;

const username: UserName = 'Ababil';
const isAdmin: IsAdmin = true;

console.log(username, isAdmin);
```

---

## 🔹 Function Type Alias

Define the shape of a function using a type:

```ts
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

console.log(add(3, 4)); // 7
```

---

## ✅ Summary

- Use `type` to create **reusable custom types**.
- Great for enforcing structure and improving code readability in TypeScript
  projects.
