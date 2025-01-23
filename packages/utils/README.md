# @pnstack/utils

A collection of utility functions for PNStack applications.

## Installation

```bash
pnpm add @pnstack/utils
```

## Usage

```typescript
import { get, isEmpty, delay, randomString } from "@pnstack/utils";

// Access nested object properties safely
const obj = { user: { profile: { name: "John" } } };
const name = get(obj, "user.profile.name"); // 'John'
const age = get(obj, "user.profile.age", 0); // 0 (default value)

// Check if value is empty
isEmpty(""); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(null); // true
isEmpty(undefined); // true
isEmpty("hello"); // false

// Delay execution
await delay(1000); // waits for 1 second

// Generate random string
const id = randomString(10); // e.g. "a1b2c3d4e5"
```

## API Reference

### get(obj: any, path: string, defaultValue?: T): T | undefined

Safely access nested object properties using dot notation or array syntax.

### isEmpty(value: any): boolean

Check if a value is empty (null, undefined, empty string, empty array, empty object).

### delay(ms: number): Promise<void>

Creates a promise that resolves after the specified number of milliseconds.

### randomString(length: number): string

Generates a random string of the specified length using alphanumeric characters.

## License

MIT
