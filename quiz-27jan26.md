## Questions:

We’re given a list of packages. Each package has three properties:
- An id
- A priority
- A timestamp
The goal is to schedule deliveries in the correct order. The rules are simple:
- Packages with lower priority numbers should be delivered first.
- If two packages have the same priority, then the one with the earlier timestamp should go first."

### solution:
```ts
const packages = [
  { id: "pkg-1", priority: 1, timestamp: 1001 },
  { id: "pkg-2", priority: 2, timestamp: 1006 },
  { id: "pkg-3", priority: 3, timestamp: 1011 },
  { id: "pkg-4", priority: 4, timestamp: 1016 },
  { id: "pkg-5", priority: 1, timestamp: 1021 },
  { id: "pkg-6", priority: 2, timestamp: 1026 },
  { id: "pkg-7", priority: 3, timestamp: 1031 },
  { id: "pkg-8", priority: 4, timestamp: 1036 },
  { id: "pkg-9", priority: 1, timestamp: 1041 },
  { id: "pkg-10", priority: 2, timestamp: 1046 },
  { id: "pkg-11", priority: 3, timestamp: 1051 },
  { id: "pkg-12", priority: 4, timestamp: 1056 },
  { id: "pkg-13", priority: 1, timestamp: 1061 },
  { id: "pkg-14", priority: 2, timestamp: 1066 },
  { id: "pkg-15", priority: 3, timestamp: 1071 },
  { id: "pkg-16", priority: 4, timestamp: 1076 },
  { id: "pkg-17", priority: 1, timestamp: 1081 },
  { id: "pkg-18", priority: 2, timestamp: 1086 },
  { id: "pkg-19", priority: 3, timestamp: 1091 },
  { id: "pkg-20", priority: 4, timestamp: 1096 },
  { id: "pkg-21", priority: 1, timestamp: 1101 },
  { id: "pkg-22", priority: 2, timestamp: 1106 },
  { id: "pkg-23", priority: 3, timestamp: 1111 },
  { id: "pkg-24", priority: 4, timestamp: 1116 },
  { id: "pkg-25", priority: 1, timestamp: 1121 },
  { id: "pkg-26", priority: 2, timestamp: 1126 },
  { id: "pkg-27", priority: 3, timestamp: 1131 },
  { id: "pkg-28", priority: 4, timestamp: 1136 },
  { id: "pkg-29", priority: 1, timestamp: 1141 },
  { id: "pkg-30", priority: 2, timestamp: 1146 }
];

interface customPkg {
    id: string;
    priority: number;
    timestamp: number
}

function scheduleDeliveries(packages: customPkg[]){
    packages.sort((a, b) => {
        if(a.priority !== b.priority){
            return a.priority - b.priority
        }

        // Step 2: if priority same, sort by timestamp
        return a.timestamp - b.timestamp;
    })
    return packages;
}

console.log(scheduleDeliveries(packages))


```