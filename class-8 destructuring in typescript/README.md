# 📘 TypeScript Destructuring Examples

This mini project demonstrates how to use **object and array destructuring** in
TypeScript.

---

## 🔹 Object Destructuring

Extracting nested properties from an object:

```ts
const user = {
  id: 1323,
  name: {
    fname: 'Ababil',
    lname: 'Hossain',
  },
  contact: {
    address: 'Uganda',
  },
};

const {
  name: { fname, lname },
  contact: { address },
} = user;

console.log(fname, lname, address); // Ababil Hossain Uganda
```

---

## 🔹 Array Destructuring

Extracting values from an array, using the rest operator to collect remaining
items:

```ts
const array = ['chandler', 'joey', 'ross', 'rachel', 'monica'];

const [a, b, ...rest] = array;

console.log(a, b, ...rest); // chandler joey ross rachel monica
```

---

## ✅ Summary

- Use **object destructuring** to extract nested properties easily.
- Use **array destructuring** to unpack values and collect extras using the rest
  operator.
