### Leetcode style 10 questions based on Objects.entries, Object.keys, Object.values, Object.forEach

---

## Sample Object

```js
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
```

---

## 1️⃣ `Object.entries(obj)`

* Returns an array of `[key, value]` pairs.
* Useful for looping with **destructuring**.

```js
const entries = Object.entries(person);
console.log(entries);
```

**Output:**

```js
[ ["name", "Alice"], ["age", 25], ["city", "New York"] ]
```

**Loop example:**

```js
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

**Output:**

```
name: Alice
age: 25
city: New York
```

---

## 2️⃣ `Object.keys(obj)`

* Returns an array of **keys** only.

```js
const keys = Object.keys(person);
console.log(keys);
```

**Output:**

```js
["name", "age", "city"]
```

**Loop example:**

```js
Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});
```

**Output:**

```
name Alice
age 25
city New York
```

---

## 3️⃣ `Object.values(obj)`

* Returns an array of **values** only.

```js
const values = Object.values(person);
console.log(values);
```

**Output:**

```js
["Alice", 25, "New York"]
```

**Loop example:**

```js
Object.values(person).forEach(value => {
  console.log(value);
});
```

**Output:**

```
Alice
25
New York
```

---

## 4️⃣ `Object.forEach` ❌

* **Important:** There is **no `Object.forEach`** method in JS!
* `forEach` exists on **arrays**, so you combine it with `Object.keys()`, `Object.values()`, or `Object.entries()`.

Example:

```js
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

Output is the same as above:

```
name: Alice
age: 25
city: New York
```

---

### ✅ Quick Summary

| Method                | Returns                       | Loop example                                               |
| --------------------- | ----------------------------- | ---------------------------------------------------------- |
| `Object.keys(obj)`    | Array of keys                 | `Object.keys(obj).forEach(k => console.log(k, obj[k]))`    |
| `Object.values(obj)`  | Array of values               | `Object.values(obj).forEach(v => console.log(v))`          |
| `Object.entries(obj)` | Array of `[key, value]` pairs | `Object.entries(obj).forEach(([k,v]) => console.log(k,v))` |
| `Object.forEach`      | ❌ doesn’t exist               | Use with `entries/keys/values` instead                     |

---

Absolutely! Since we’ve been discussing **objects, maps, sets, and iterating over keys/values**, I can craft **10 LeetCode-style questions** that touch on all of these concepts — from easy to medium difficulty. These will help reinforce your understanding of `Object`, `Map`, `Set`, `Object.keys`, `Object.values`, and `Object.entries`.

---

## **10 LeetCode-style Practice Questions**

### **1. First Duplicate Value**

> Given an array of integers `nums`, return the **first value that appears more than once**. If no duplicates exist, return `-1`.
> *Focus:* Use `Set` or object to track seen values.

---

### **2. Count Frequency of Elements**

> Given an array of strings `words`, return an object mapping each word to the number of times it appears.
> *Example:* `["a","b","a"] → {a: 2, b: 1}`
> *Focus:* Using object to store counts and `Object.entries` for final processing.

---

### **3. Key With Maximum Value**

> Given an object of numbers, e.g., `{a: 3, b: 7, c: 5}`, return the key with the **highest value**.
> *Focus:* `Object.entries()` and iteration.

---

### **4. Remove Duplicates In-Place**

> Given an array of integers, remove duplicates **without changing the order**, and return the new array.
> *Focus:* `Set` to track seen numbers.

---

### **5. Two Sum with Map**

> Given an array of integers `nums` and a target `target`, return **indices** of two numbers that sum to target.
> *Focus:* Use a `Map` to store number → index for O(n) lookup.

---

### **6. Group Anagrams**

> Given an array of strings, group anagrams together.
> *Example:* `["eat","tea","tan","ate"] → [["eat","tea","ate"],["tan"]]`
> *Focus:* Use a `Map` where the **sorted string is the key**.

---

### **7. Count Characters**

> Given a string, return an object mapping **each character** to its frequency.
> *Example:* `"abb"` → `{a: 1, b: 2}`
> *Focus:* Objects and `Object.keys` or `Object.entries`.

---

### **8. Filter Object By Value**

> Given an object with numeric values, return a new object containing only keys where the value is greater than a threshold.
> *Example:* `{a: 3, b: 7, c: 1}, threshold=2 → {a:3, b:7}`
> *Focus:* `Object.entries()` → filter → `Object.fromEntries()`.

---

### **9. Intersection of Two Arrays**

> Given two arrays, return an array of elements that appear in **both arrays**.
> *Example:* `[1,2,2,3] & [2,3,4] → [2,3]`
> *Focus:* Use `Set` for fast lookups.

---

### **10. Merge Two Objects**

> Given two objects with numeric values, merge them into a single object, **summing values of keys that exist in both**.
> *Example:* `{a:1,b:2}, {b:3,c:4} → {a:1,b:5,c:4}`
> *Focus:* Iterating over `Object.keys()` or `Object.entries()`.

---

If you want, I can **also create a progression table** for these 10 questions showing:

* **Difficulty (Easy/Medium)**
* **Recommended data structure** (`Set`, `Map`, object)
* **Which Object method is most useful** (`keys/values/entries`)

This helps you **systematically practice the topics we just discussed**.

| #  | Question                    | Difficulty  | Recommended Data Structure | Useful Object/Set/Map Methods                           |
| -- | --------------------------- | ----------- | -------------------------- | ------------------------------------------------------- |
| 1  | First Duplicate Value       | Easy        | `Set` or object            | `Set.has()`, `.add()`, `in` operator                    |
| 2  | Count Frequency of Elements | Easy        | Object                     | `obj[key]`, `Object.entries()`, `Object.keys()`         |
| 3  | Key With Maximum Value      | Easy-Medium | Object                     | `Object.entries()`, iteration, comparison               |
| 4  | Remove Duplicates In-Place  | Easy        | `Set`                      | `Set.has()`, `.add()`                                   |
| 5  | Two Sum with Map            | Medium      | `Map`                      | `Map.has()`, `Map.set()`                                |
| 6  | Group Anagrams              | Medium      | `Map`                      | `Map.set()`, `Map.get()`, `Map.has()`                   |
| 7  | Count Characters            | Easy        | Object                     | `obj[char]`, `Object.keys()`, `Object.entries()`        |
| 8  | Filter Object By Value      | Medium      | Object                     | `Object.entries()`, `Object.fromEntries()`, `.filter()` |
| 9  | Intersection of Two Arrays  | Easy-Medium | `Set`                      | `Set.has()`, `.add()`                                   |
| 10 | Merge Two Objects           | Medium      | Object                     | `Object.keys()`, `Object.entries()`, assignment         |

---