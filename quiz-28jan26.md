# LeetCode 1:

## Two Sum - Array problem
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
---

### Solution

```js
const numsArr = [2,7,11,15] 
const targetNum = 9 
const twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
      const needed = target - nums[i];
      if (map[needed] !== undefined) {
        return [map[needed], i];
      }
    
      map[nums[i]] = i;
    }
    return map
}
const results = twoSum(numsArr, targetNum)
```

---

Great question — this is *exactly* the right thing to ask 👍
Short answer: **this approach is better because it’s faster, scalable, and handles duplicates correctly**.
Let’s unpack *why*, step by step, and compare it to the alternatives.

---

### 1️⃣ What this approach is doing (conceptually)

This is called the **hash map / one-pass** solution.

Your loop is basically saying:

> “As I scan the array, I remember every number I’ve seen and its index.
> For each new number, I check whether its *partner* already exists.”

```js
needed = target - nums[i];
```

So for each number:

* Ask: *“Have I already seen the number I need?”*
* If yes → 🎯 solution found
* If no → store the current number for later

---

### 2️⃣ Why this is better than the brute-force approach

#### ❌ Brute force (two loops)

```js
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}
```

#### Problems:

* Time complexity: **O(n²)**
* For 10,000 numbers → **50 million comparisons**
* Slow and doesn’t scale

---

#### ✅ Your map approach

```js
for (let i = 0; i < nums.length; i++) {
  // constant-time lookup
}
```

* Time complexity: **O(n)**
* Each lookup in the map is **O(1)**
* Much faster for large inputs

👉 This is the **biggest reason** it’s considered better.

---

### 3️⃣ Why it handles duplicates correctly (like `0, 0`)

Example:

```js
nums = [0, 4, 3, 0]
target = 0
```

#### Walkthrough:

| i | nums[i] | needed | map before           | action        |
| - | ------- | ------ | -------------------- | ------------- |
| 0 | 0       | 0      | `{}`                 | store `0 → 0` |
| 1 | 4       | -4     | `{0: 0}`             | store `4 → 1` |
| 2 | 3       | -3     | `{0: 0, 4: 1}`       | store `3 → 2` |
| 3 | 0       | 0      | `{0: 0, 4: 1, 3: 2}` | ✅ found       |

Returns:

```js
[0, 3]
```

✔ Uses **two different indices**
✔ No special-case logic needed
✔ Just works

---

### 4️⃣ Why checking BEFORE storing matters

This line order is crucial:

```js
if (map[needed] !== undefined) {
  return [map[needed], i];
}

map[nums[i]] = i;
```

#### Why?

Because it prevents using the **same element twice**.

If you stored first, then checked:

* You might match a number with itself
* Especially dangerous when `target = num * 2`

Your order guarantees:

> “The partner must have appeared **earlier** in the array.”

---

### 5️⃣ Why an object / map beats `.indexOf()` or `.includes()`

Methods like:

```js
nums.indexOf(needed)
```

* Take **O(n)** time
* Inside a loop → becomes **O(n²)**
* Also awkward with duplicates

A map gives you:

* Instant lookup
* Clean logic
* No extra scanning

---

### 6️⃣ One small improvement (important detail)

This check:

```js
if (map[needed] !== undefined)
```

Can break if the stored index is `0`.

#### Safer version:

```js
if (needed in map) {
  return [map[needed], i];
}
```

or

```js
if (map.hasOwnProperty(needed)) {
  return [map[needed], i];
}
```

---

### 7️⃣ TL;DR — Why this approach wins 🏆

✅ **O(n) time** — fastest possible
✅ Handles **duplicates** naturally
✅ Avoids using the **same index twice**
✅ Clean, readable logic
✅ Industry-standard solution

This is why it’s the *canonical* Two Sum answer in interviews.

---
Perfect — here are the **same 5 coding challenges**, each written in a **LeetCode-style format** like your Two Sum example.
✔ Questions only
✔ With examples, explanations, constraints, and a follow-up
✔ No solutions or hints

---

## 1️⃣ First Repeating Element Index

**Problem:**
Given an array of integers `nums`, return the **index of the first element that appears more than once**.
If no element repeats, return `-1`.

---

**Example 1:**

Input:

```
nums = [1, 2, 3, 2, 1]
```

Output:

```
1
```

Explanation:
The number `2` is the first value that repeats. Its first occurrence is at index `1`.

---

**Example 2:**

Input:

```
nums = [5, 6, 7, 8]
```

Output:

```
-1
```

---

**Constraints:**

* 1 <= nums.length <= 10⁴
* -10⁹ <= nums[i] <= 10⁹

**Follow-up:**
Can you solve this in **O(n)** time?

### Solution

```js
let nums = [4, 21, 3, 2, 1, 3];
let nums2 = [5, 6, 7, 8];
```

### Highly Optimized - Using Set (simplest, tracks seen values)
```js
function findRepeatEleWithSet(nums) {
    let seen = new Set(); // tracks numbers we’ve seen

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) { // number repeats
            return i; // return index of the repeat
        }
        seen.add(nums[i]); // mark as seen
    }

    return -1; // no repeats
}
```

#### Notes:
- Set only tracks existence, not index.
- seen.has(value) is O(1), faster than scanning an array

### Using Map (stores index, more flexible)
```js
function findRepeatEleWithMap(nums) {
    let numMap = new Map(); // key = number, value = first index

    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) { // number repeats
            return i; // index of current repeat
        }
        numMap.set(nums[i], i); // store first occurrence index
    }

    return -1; // no repeats
}

```
**Notes:**

- Map lets you store extra info (like index, count, etc.).
- numMap.has() is similar to in for objects but safer and works for any key type.

```js
// 2nd. Optimized Approach
function findRepeatEle(nums){
    let searchMap = {};
    for (let i = 0; i < nums.length; i++){
        // console.log(searchMap[nums[i]])
        if(nums[i] in searchMap){
            return searchMap[nums[i]];
        }
        searchMap[nums[i]] = i;
        console.log(searchMap, searchMap[nums[i]])
    }
    return -1;
}
// brute force approach
function findRepeatEle2(nums){
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j] && i !== j){
                return nums[i]
            }
        }
    }
}
console.log(findRepeatEle(nums))

```

#### Quick Comparisons
| Goal                 | Use this                  |
| -------------------- | ------------------------- |
| Check key in object  | `key in obj`              |
| Check own key only   | `obj.hasOwnProperty(key)` |
| Check value in array | `arr.includes(value)`     |
| Check index in array | `index in arr`            |
| Fast lookup set      | `Object` or `Set` or `Map |


| Data Type     | Works? | Time  | Notes                      |
| ------------- | ------ | ----- | -------------------------- |
| `{}`          | ✅      | O(n)  | Classic, fine              |
| `Set`         | ✅      | O(n)  | ⭐ Best & cleanest          |
| `Map`         | ✅      | O(n)  | More flexible              |
| Array         | ⚠️     | O(n²) | Avoid                      |
| Boolean array | ⚠️     | O(n)  | Only for constrained input |

#### Key Difference

| Feature     | Set                   | Map                                                    |
| ----------- | --------------------- | ------------------------------------------------------ |
| Stores      | Only existence        | Key → Value (can store anything)                       |
| Lookup      | `.has()`              | `.has()`                                               |
| Use case    | Just check duplicates | Check duplicates **and store info** (like first index) |
| Performance | O(1)                  | O(1)                                                   |


---

## 2️⃣ Two Numbers with Given Difference

**Problem:**
Given an array of integers `nums` and an integer `k`, determine whether there exist **two different indices** `i` and `j` such that:

```
nums[i] - nums[j] = k
```

Return `true` if such a pair exists, otherwise return `false`.

---

**Example 1:**

Input:

```
nums = [5, 10, 3, 2, 50]
k = 8
```

Output:

```
true
```

Explanation:
`10 - 2 = 8`.

---

**Example 2:**

Input:

```
nums = [1, 2, 3, 4]
k = 10
```

Output:

```
false
```

---

**Constraints:**

* 2 <= nums.length <= 10⁴
* -10⁹ <= nums[i], k <= 10⁹

**Follow-up:**
Can you do this in **O(n)** time?

---

## 3️⃣ Longest Subarray with Sum Equal to K

**Problem:**
Given an array of integers `nums` and an integer `k`, return the **length of the longest contiguous subarray** whose sum equals `k`.

---

**Example 1:**

Input:

```
nums = [1, -1, 5, -2, 3]
k = 3
```

Output:

```
4
```

Explanation:
The subarray `[1, -1, 5, -2]` sums to `3` and has length `4`.

---

**Example 2:**

Input:

```
nums = [-2, -1, 2, 1]
k = 1
```

Output:

```
2
```

---

**Constraints:**

* 1 <= nums.length <= 10⁴
* -10³ <= nums[i] <= 10³
* -10⁷ <= k <= 10⁷

**Follow-up:**
Can you solve this in **O(n)** time?

---

## 4️⃣ First Non-Repeating Character in a String

**Problem:**
Given a string `s`, return the **index of the first non-repeating character**.
If no such character exists, return `-1`.

---

**Example 1:**

Input:

```
s = "leetcode"
```

Output:

```
0
```

Explanation:
`'l'` appears only once and is the first such character.

---

**Example 2:**

Input:

```
s = "aabb"
```

Output:

```
-1
```

---

**Constraints:**

* 1 <= s.length <= 10⁵
* `s` consists of lowercase English letters

**Follow-up:**
Can you solve this in **one pass** over the string?

---

## 5️⃣ Maximum Length Subarray with Equal 0s and 1s

**Problem:**
Given a binary array `nums` containing only `0` and `1`, return the **maximum length of a contiguous subarray** with an equal number of `0`s and `1`s.

---

**Example 1:**

Input:

```
nums = [0, 1]
```

Output:

```
2
```

---

**Example 2:**

Input:

```
nums = [0, 1, 0]
```

Output:

```
2
```

Explanation:
The subarray `[0, 1]` has one `0` and one `1`.

---

**Constraints:**

* 1 <= nums.length <= 10⁵
* nums[i] is either `0` or `1`

**Follow-up:**
Can you solve this in **O(n)** time?

---
