# 📘 Notes: Spread and Rest Operators in TypeScript

## 🔹 Spread Operator (`...`)

The spread operator is used to expand arrays or objects into individual elements
or properties.

### 📌 Spread with Arrays

```ts
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 📌 Spread with Objects

```ts
const mentor = {
  typescritps: 'Mezba',
  redux: 'Mir',
  dbms: 'Mizan',
};

const mentor2 = {
  prisma: 'Firoz',
  next: 'Tanmoy',
  cloud: 'Nahid',
};

const mergedMentor = {
  ...mentor,
  ...mentor2,
};

console.log(mergedMentor);
/*
{
  typescritps: 'Mezba',
  redux: 'Mir',
  dbms: 'Mizan',
  prisma: 'Firoz',
  next: 'Tanmoy',
  cloud: 'Nahid'
}
*/
```

---

## 🔹 Rest Operator (`...`)

The rest operator gathers multiple values into a single array — often used in
function parameters.

### 📌 Example with Function

```ts
const greetFriends = (
  friend: string,
  friend2: string,
  friend3: string,
  ...rest: Array<string>
) => {
  console.log(`Hi`, friend, friend2, friend3, ...rest);
};

greetFriends('Abul', 'kabul', 'babul', 'ubul', 'babul');
```

**Output:**

```
Hi Abul kabul babul ubul babul
```

---

## ✅ Summary

- **Spread**: Expands elements (`...array`, `...object`)
- **Rest**: Collects elements into an array (`...rest` in function params)
