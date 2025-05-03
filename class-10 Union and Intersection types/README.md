# 🧠 Developer Roles and Skills in TypeScript

This project is a playful yet practical demonstration of **TypeScript's
conditional types** and **type intersections**, inspired by real-life logic and
a curious mind.

## ✨ Features

- Strictly type-safe role definitions: `Frontend`, `Backend`, and `FullStack`
- Skill assignment based on the developer's role
- Use of conditional types to infer skill sets
- Fun analogy to biology and quantum physics 😄

## 📦 Developer Roles & Skills

```ts
type Frontend = 'Frontend';
type Backend = 'Backend';
type FullStack = 'FullStack';

type Role = Frontend | Backend | FullStack;

type FrontendSkills =
  | 'React'
  | 'Angualer'
  | 'Vue'
  | 'TailwindCSS'
  | 'MUI'
  | 'ShadCN';

type BackendSkills =
  | 'NodeJS'
  | 'ExpressJS'
  | 'NestJS'
  | 'FastAPI'
  | 'MongoDB'
  | 'MySql'
  | 'PostgreSQL'
  | 'Prisma'
  | 'Mongoose';

type FullStackSkills = FrontendSkills | BackendSkills;
```

## 🔁 Conditional Skill Mapping

```ts
type Skills<T extends Role> = T extends Frontend
  ? FrontendSkills[]
  : T extends Backend
  ? BackendSkills[]
  : T extends FullStack
  ? FullStackSkills[]
  : never;
```

## 👨‍💻 Developer Definitions

```ts
type FrontendDeveloper = {
  role: Frontend;
  skills: Skills<Frontend>;
};

type BackendDeveloper = {
  role: Backend;
  skills: Skills<Backend>;
};

type FullStackDeveloper = {
  role: FullStack;
  skills: Skills<FullStack>;
};
```

## 🧪 Usage

```ts
const dev_1: FrontendDeveloper = {
  role: 'Frontend',
  skills: ['Angualer', 'MUI', 'React', 'ShadCN'],
};

const dev_2: BackendDeveloper = {
  role: 'Backend',
  skills: ['ExpressJS', 'FastAPI', 'MongoDB', 'MySql', 'NodeJS'],
};

const dev_3: FullStackDeveloper = {
  role: 'FullStack',
  skills: ['FastAPI', 'Angualer', 'React'],
};

console.log(dev_1, dev_2, dev_3);
```

## ➕ Intersections Example

```ts
type Person = {
  name: string;
  email?: string;
  phone: number;
};

type Student = {
  id: number;
} & Person;

const p1: Person = {
  name: 'Ababil',
  phone: 35325325,
};

const p2: Student = {
  name: 'Ababil',
  phone: 345325,
  email: 'ababilhossain35@gmail.com',
  id: 35435,
};
```

## 🧠 Philosophical Insight

> A developer can play multiple roles — just not at the _exact same moment_
> (unless we're in the realm of quantum physics 😉). This is why union (`|`)
> makes sense over intersection (`&`) for role typing.
