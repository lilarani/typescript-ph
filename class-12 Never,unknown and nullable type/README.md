#### ✅ Nullable Types

In TypeScript, a variable can be explicitly declared as `null` or another type
using a union:

```ts
const searchName = (value: string | null) => { ... };
```

- Use truthy check to handle `null`.

#### ✅ `unknown` Type

The `unknown` type forces explicit type checks before use:

```ts
const getSpeedInMeterPerSecond = (value: unknown) => { ... };
```

- Type narrowing (`typeof value`) ensures safe operations.
- Converts speed in `km/h` to `m/s` with formula: `(value * 1000) / 3600`.

#### ✅ `never` Type

The `never` type represents values that never occur:

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

- Used for functions that throw errors or never return.

#### Example Outputs

```ts
searchName(null); // "There is nothing to search"
getSpeedInMeterPerSecond(200); // "The speed is 55.555... ms^1"
getSpeedInMeterPerSecond('1000 ms^1'); // "The speed is 277.77... ms^1"
getSpeedInMeterPerSecond(null); // "worng input"
throwError('hahaha'); // Throws Error
```
