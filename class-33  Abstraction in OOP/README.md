# 🚗 OOP Abstraction Example in TypeScript

## 📌 What is Abstraction?

Abstraction is one of the four main pillars of OOP. It allows us to hide complex
implementation details and show only the necessary parts to the user.

In programming, abstraction is typically implemented using:

- Interfaces
- Abstract Classes

## This example contains:

### ✅ Interface-based abstraction:

```ts
interface Vehicle1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car1 implements Vehicle1 {
  startEngine() {
    console.log('Starting engine...');
  }
  stopEngine() {
    console.log('Stopping engine...');
  }
  move() {
    console.log('Moving the car...');
  }
}
```

## Abstract class-based abstraction:

```ts
abstract class Car2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;

  test() {
    console.log('I am just testing');
  }
}

class ToyotaCar extends Car2 {
  startEngine() {
    console.log('Starting engine...');
  }
  stopEngine() {
    console.log('Stopping engine...');
  }
  move() {
    console.log('Moving the car...');
  }
}
```

## 🧠 Key Takeaways

- Abstract classes cannot be instantiated directly.

- Abstract methods must be implemented by subclasses.

- Interfaces only define the structure, not the implementation.

- Abstraction helps make code cleaner, modular, and easier to maintain.
