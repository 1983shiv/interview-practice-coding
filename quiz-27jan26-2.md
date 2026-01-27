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

```ts

interface Post {
  id: string;
  isPinned: boolean;
  createdAt: string; // ISO Date string (e.g., "2023-01-01T10:00:00Z")
}

const posts: Post[] = [
  { id: "post-1", isPinned: true,  createdAt: "2023-01-01T09:00:00Z" },
  { id: "post-2", isPinned: false, createdAt: "2023-01-01T10:15:00Z" },
  { id: "post-3", isPinned: true,  createdAt: "2023-01-02T08:30:00Z" },
  { id: "post-4", isPinned: false, createdAt: "2023-01-02T12:45:00Z" },
  { id: "post-5", isPinned: false, createdAt: "2023-01-03T07:20:00Z" },
  { id: "post-6", isPinned: true,  createdAt: "2023-01-03T09:10:00Z" },
  { id: "post-7", isPinned: false, createdAt: "2023-01-04T11:00:00Z" },
  { id: "post-8", isPinned: true,  createdAt: "2023-01-04T13:40:00Z" },
  { id: "post-9", isPinned: false, createdAt: "2023-01-05T08:05:00Z" },
  { id: "post-10", isPinned: false, createdAt: "2023-01-05T15:30:00Z" }
];

function sortPosts(posts: Post[]): Post[] {
    posts.sort((a, b) => {
        // step 1: sort by isPinned
        if(a.isPinned !== b.isPinned){
            return a.isPinned ? -1 : 1;
        }

        // step 2: sort by createdAt
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
        
    })
    return posts;
}

// Example usage:
const sortedPosts = sortPosts(posts);
console.log(sortedPosts);
```


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

## Solution

```ts


interface Product {
    id: number;
    name: string;
    inStock: boolean;
}

const products: Product[] = [
    { id: 1, name: "Apple iPhone 14", inStock: true },
    { id: 2, name: "Samsung Galaxy S23", inStock: false },
    { id: 3, name: "Google Pixel 8", inStock: true },
    { id: 4, name: "Apple MacBook Pro", inStock: true },
    { id: 5, name: "Dell XPS 13", inStock: false },
    { id: 6, name: "Apple Watch Series 9 Phone", inStock: true },
    { id: 7, name: "Sony WH-1000XM5 Head phones", inStock: true },
    { id: 8, name: "Bose QuietComfort 45", inStock: false },
    { id: 9, name: "Logitech MX Master 3S Mouse", inStock: true },
    { id: 10, name: "Apple iPad Air", inStock: false }
];
// Example Query: "phone"

function sortedProducts(products: Product[], query: string): Product[] {
  const q = query.toLowerCase();

  return [...products].sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const rank = (name: string) => {
      if (name === q) return 1;
      if (name.startsWith(q)) return 2;
      if (name.includes(q)) return 3;
      return 4;
    };

    const rankDiff = rank(aName) - rank(bName);
    if (rankDiff !== 0) return rankDiff;

    // Same rank → alphabetical order
    return aName.localeCompare(bName);
  });
}


console.log(sortedProducts(products, 'Apple iPhone 14'))

```
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

## Solution

```ts
// ### Challenge 3: The "Latest Reading" Filter

// **Scenario:** You are receiving a stream of data from IoT sensors. Sensors send data multiple times a minute, but we only want the *latest* single reading for every unique Sensor ID.

// **Input:** An array of `SensorReading` objects (unsorted).

// ```typescript
// interface SensorReading {
//   sensorId: string;
//   temperature: number;
//   timestamp: number; // Unix epoch
// }

// ```

// **Goal:** Return an array containing only the **most recent** reading for each unique `sensorId`. The order of the output array does not matter.

interface SensorReading {
  sensorId: string;
  temperature: number;
  timestamp: number; // Unix epoch
}

const sensorReadings: SensorReading[] = [
  { sensorId: "sensor-A1", temperature: 22.4, timestamp: 1700001000 },
  { sensorId: "sensor-A1", temperature: 22.8, timestamp: 1700001060 },
  { sensorId: "sensor-A1", temperature: 23.1, timestamp: 1700001120 },

  { sensorId: "sensor-B2", temperature: 18.6, timestamp: 1700001000 },
  { sensorId: "sensor-B2", temperature: 18.9, timestamp: 1700001060 },
  { sensorId: "sensor-B2", temperature: 19.3, timestamp: 1700001120 },

  { sensorId: "sensor-C3", temperature: 25.0, timestamp: 1700001000 },
  { sensorId: "sensor-C3", temperature: 25.4, timestamp: 1700001060 },
  { sensorId: "sensor-C3", temperature: 25.9, timestamp: 1700001120 }
];


function mostRecent(sensorReadings: SensorReading[]): SensorReading[] {
  const latestMap: Record<string, SensorReading> = {};

  for (const reading of sensorReadings) {
    const existing = latestMap[reading.sensorId];

    if (!existing || reading.timestamp > existing.timestamp) {
      latestMap[reading.sensorId] = reading;
    }
  }

  return Object.values(latestMap);
}


console.log(mostRecent(sensorReadings))

```
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

## Solution

```ts
interface Server {
    id: string;
    region: string; // e.g., "US-EAST", "EU-WEST"
    load: number;   // Lower is better
}

const servers: Server[] = [
    { id: "srv-001", region: "US-EAST", load: 0.72 },
    { id: "srv-002", region: "US-EAST", load: 0.35 },
    { id: "srv-003", region: "US-EAST", load: 0.58 },

    { id: "srv-004", region: "EU-WEST", load: 0.41 },
    { id: "srv-005", region: "EU-WEST", load: 0.22 },
    { id: "srv-006", region: "EU-WEST", load: 0.67 },

    { id: "srv-007", region: "AP-SOUTH", load: 0.49 },
    { id: "srv-008", region: "AP-SOUTH", load: 0.31 },
    { id: "srv-009", region: "AP-SOUTH", load: 0.84 }
];

// this func show a begginer approach
function minLoadOnServer_unoptimizedWay(servers: Server[], region: string): string | null {
    const listOfServer = servers.filter((server) => server.region === region)
    // console.log(listOfServer)
    listOfServer.sort((a, b) => {
        return a.load - b.load
    })
    return listOfServer ? listOfServer[0].id : null;
}

// optimized way
function minLoadOnServer(servers: Server[], region: string): string | null {
    let bestServer: Server | null = null;

    for (const server of servers) {
        if (server.region !== region) continue;

        if (!bestServer || server.load < bestServer.load) {
            bestServer = server;
        }
    }

    return bestServer ? bestServer.id : null;
}
console.log(minLoadOnServer(servers, 'AP-SOUTH'))

```
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


const outputExample = {"pdf": ["repots1.pdf", "reports2.pdf"],
                        "zip": ["repots1.zip", "reports2.zip"]}                       }

**⏱️ You have 60 seconds to think — pause and solve.**

## Solution

```ts

interface File {
    fileName: string; // e.g., "report.pdf", "image.png", "notes.txt"
    fileSize: number;
}

const files: File[] = [
    { fileName: "report.pdf", fileSize: 245678 },
    { fileName: "report2.pdf", fileSize: 245678 },
    { fileName: "image.png", fileSize: 987654 },
    { fileName: "notes.txt", fileSize: 12456 },
    { fileName: "presentation.pptx", fileSize: 3456789 },
    { fileName: "spreadsheet.xlsx", fileSize: 876543 },
    { fileName: "archive.zip", fileSize: 5432100 },
    { fileName: "script.js", fileSize: 8450 },
    { fileName: "script_analysis.js", fileSize: 8450 },
    { fileName: "style.css", fileSize: 4320 },
    { fileName: "video.mp4", fileSize: 25432100 },
    { fileName: "README.md", fileSize: 2150 }
];

function getGroupData(files: File[]): any {
    
    const GrpData: Record<string, string[]> = {}

    for (const f of files) {
        const ext = f.fileName.split(".").pop()!; 
        if(!GrpData[ext]){
            GrpData[ext] = [];
        }
        GrpData[ext].push(f.fileName)
    }
    
    return (GrpData);
}

// getGroupData(files)
console.log(getGroupData(files))


```
---
