Here are 5 interview-style coding challenges designed to test your handling of arrays, objects, and logic in JavaScript/TypeScript.

**⏱️ Time limit suggestion:** Try to conceptualize and solve all 5 questions within **20–25 minutes**.

---

### Challenge 1: The "Sticky" Feed Sorter

**Scenario:** You are building a news feed. Some posts are marked as "pinned" (sticky) and must appear at the top regardless of age. All other posts should be sorted by recency.

**Input:** An array of `Post` objects.

```typescript
interface Post {
  id: string;
  isPinned: boolean;
  createdAt: string; // ISO Date string (e.g., "2023-01-01T10:00:00Z")
}

```

**Goal:** Return a new array sorted such that:

1. All `isPinned: true` posts come first.
2. Within the pinned (and unpinned) groups, sort by `createdAt` descending (newest first).

**⏱️ You have 60 seconds to think — pause and solve.**

---

### Challenge 2: The Search Result Ranker

**Scenario:** You have a list of products and a user search query. You need to rank results based on relevance relevance, not just alphabetical order.

**Input:** An array of `Product` objects and a `searchQuery` string.

```typescript
interface Product {
  id: number;
  name: string;
  inStock: boolean;
}
// Example Query: "phone"

```

**Goal:** Sort the products based on the following priority rules (Highest to Lowest):

1. **Exact Match:** The `name` is exactly equal to the query (case-insensitive).
2. **Starts With:** The `name` starts with the query (case-insensitive).
3. **Includes:** The `name` contains the query somewhere (case-insensitive).
4. **Else:** Alphabetical order by `name`.

*Note: Assume all provided products match at least one condition.*

**⏱️ You have 60 seconds to think — pause and solve.**

---

### Challenge 3: The "Latest Reading" Filter

**Scenario:** You are receiving a stream of data from IoT sensors. Sensors send data multiple times a minute, but we only want the *latest* single reading for every unique Sensor ID.

**Input:** An array of `SensorReading` objects (unsorted).

```typescript
interface SensorReading {
  sensorId: string;
  temperature: number;
  timestamp: number; // Unix epoch
}

```

**Goal:** Return an array containing only the **most recent** reading for each unique `sensorId`. The order of the output array does not matter.

**⏱️ You have 60 seconds to think — pause and solve.**

---

### Challenge 4: The Load Balancer

**Scenario:** You have a list of servers, each with a current `load` (0-100) and a `region`. You need to pick the best server to handle a new request for a specific region.

**Input:** An array of `Server` objects and a target `region` string.

```typescript
interface Server {
  id: string;
  region: string; // e.g., "US-EAST", "EU-WEST"
  load: number;   // Lower is better
}

```

**Goal:** Write a function that accepts the array and a target region. It should return the `id` of the server that:

1. Matches the target region.
2. Has the **lowest** load among servers in that region.
3. If no server exists for that region, return `null`.

**⏱️ You have 60 seconds to think — pause and solve.**

---

### Challenge 5: Version Grouping

**Scenario:** You have a list of software files. You need to group them by their file extension to display them in a categorized view.

**Input:** An array of `File` objects.

```typescript
interface File {
  name: string; // e.g., "report.pdf", "image.png", "notes.txt"
  size: number;
}

```

**Goal:** Return an object (dictionary) where:

* Keys are the file extensions (excluding the dot, e.g., `pdf`, `png`).
* Values are arrays of file names belonging to that extension.
* *Bonus logic:* If a file has no extension, group it under "other".

**⏱️ You have 60 seconds to think — pause and solve.**

---

**Next Step:** Please provide your code or pseudo-code logic for **Answer 1**, **Answer 2**, etc. I will review them one by one, acting as your interviewer to point out edge cases, optimizations, or syntax improvements.