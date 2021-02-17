// var admin = require("firebase-admin");

// var serviceAccount = require("./transportation-tracking-app-firebase-adminsdk-14jq4-67cce389da.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// async function  readDate() {

// const snapshot = await db.collection('stands').get();

// var graph = {};

// snapshot.forEach((doc) => {

// //   var temp = {}
// //   doc.data().stops.forEach((st)=>{
// //       temp[st] = 1;
// //   });  

// //  graph[doc.id] = temp;

//     graph[doc.id] = doc.data();

// });

//  console.log(JSON.stringify(graph));

// }


// readDate();



stands = {
    "1": {
        "routes": [
            "4"
        ],
        "name": "Madar",
        "stops": [
            "2"
        ]
    },
    "2": {
        "stops": [
            "1",
            "3"
        ],
        "routes": [
            "4"
        ],
        "name": "Madhav Colony"
    },
    "3": {
        "routes": [
            "4"
        ],
        "name": "JP Nagar",
        "stops": [
            "2",
            "4"
        ]
    },
    "4": {
        "routes": [
            "4"
        ],
        "stops": [
            "3",
            "5"
        ],
        "name": "Chungi"
    },
    "5": {
        "stops": [
            "4",
            "6",
            "43"
        ],
        "routes": [
            "4",
            "15"
        ],
        "name": "Gandhi Nagar"
    },
    "6": {
        "name": "Gulab Bari",
        "routes": [
            "4",
            "15"
        ],
        "stops": [
            "5",
            "7"
        ]
    },
    "7": {
        "stops": [
            "6",
            "8"
        ],
        "name": "Raja Cycle",
        "routes": [
            "4",
            "15"
        ]
    },
    "8": {
        "stops": [
            "7",
            "9",
            "31"
        ],
        "routes": [
            "4",
            "7",
            "15"
        ],
        "name": "Martidale Bridge"
    },
    "9": {
        "stops": [
            "8",
            "10"
        ],
        "name": "Railway Station",
        "routes": [
            "4",
            "7"
        ]
    },
    "10": {
        "stops": [
            "9",
            "11"
        ],
        "name": "Churi Bazaar",
        "routes": [
            "4",
            "7"
        ]
    },
    "11": {
        "routes": [
            "4",
            "7"
        ],
        "name": "Agra Gate",
        "stops": [
            "10",
            "12",
            "32"
        ]
    },
    "12": {
        "stops": [
            "11",
            "13"
        ],
        "routes": [
            "4"
        ],
        "name": "Patel Stadium"
    },
    "13": {
        "stops": [
            "12",
            "14",
            "35"
        ],
        "name": "Ajmer Club",
        "routes": [
            "4",
            "7"
        ]
    },
    "14": {
        "name": "Savitri Circle",
        "routes": [
            "4",
            "7"
        ],
        "stops": [
            "13",
            "15",
            "34"
        ]
    },
    "15": {
        "name": "Jawahar Rang Manch",
        "routes": [
            "4"
        ],
        "stops": [
            "14",
            "16"
        ]
    },
    "16": {
        "routes": [
            "4"
        ],
        "name": "Lohagal",
        "stops": [
            "15",
            "17"
        ]
    },
    "17": {
        "stops": [
            "16",
            "47"
        ],
        "routes": [
            "4"
        ],
        "name": "Shastri nagar"
    },
    "18": {
        "routes": [
            "4"
        ],
        "stops": [
            "48"
        ],
        "name": "Janana"
    },
    "19": {
        "routes": [
            "7"
        ],
        "name": "Hatoondi",
        "stops": [
            "20"
        ]
    },
    "20": {
        "name": "Khajpura",
        "stops": [
            "19",
            "21"
        ],
        "routes": [
            "7"
        ]
    },
    "21": {
        "stops": [
            "20",
            "22"
        ],
        "routes": [
            "7"
        ],
        "name": "Padmini Resort"
    },
    "22": {
        "routes": [
            "7"
        ],
        "stops": [
            "21",
            "23"
        ],
        "name": "Badgaon"
    },
    "23": {
        "routes": [
            "7"
        ],
        "name": "Nasirabad Circle",
        "stops": [
            "22",
            "24"
        ]
    },
    "24": {
        "stops": [
            "23",
            "25"
        ],
        "routes": [
            "7"
        ],
        "name": "Makhupura"
    },
    "25": {
        "stops": [
            "24",
            "26"
        ],
        "name": "GWECA",
        "routes": [
            "7"
        ]
    },
    "26": {
        "name": "Parbatpura Bypass",
        "routes": [
            "7"
        ],
        "stops": [
            "25",
            "27"
        ]
    },
    "27": {
        "stops": [
            "26",
            "28"
        ],
        "routes": [
            "7"
        ],
        "name": "Parbatpura"
    },
    "28": {
        "name": "Adarsh Nagar",
        "routes": [
            "7"
        ],
        "stops": [
            "27",
            "29"
        ]
    },
    "29": {
        "routes": [
            "7"
        ],
        "stops": [
            "28",
            "30"
        ],
        "name": "Bhajan Ganj"
    },
    "30": {
        "name": "Nagra",
        "stops": [
            "29",
            "31"
        ],
        "routes": [
            "7"
        ]
    },
    "31": {
        "stops": [
            "30",
            "8"
        ],
        "name": "Alwar Gate",
        "routes": [
            "7"
        ]
    },
    "32": {
        "stops": [
            "11",
            "33"
        ],
        "routes": [
            "7"
        ],
        "name": "Soni Ji Ki Nasiya"
    },
    "33": {
        "routes": [
            "7"
        ],
        "name": "Delhi Gate",
        "stops": [
            "32",
            "34"
        ]
    },
    "34": {
        "routes": [
            "7"
        ],
        "stops": [
            "33",
            "14"
        ],
        "name": "Bajrangarh"
    },
    "35": {
        "routes": [
            "7"
        ],
        "name": "Bus Stand",
        "stops": [
            "13",
            "36"
        ]
    },
    "36": {
        "stops": [
            "35",
            "37"
        ],
        "routes": [
            "7"
        ],
        "name": "Civil Court"
    },
    "37": {
        "name": "RBSC",
        "routes": [
            "7"
        ],
        "stops": [
            "36",
            "49"
        ]
    },
    "38": {
        "routes": [
            "7"
        ],
        "stops": [
            "49",
            "39"
        ],
        "name": "Sophia School"
    },
    "39": {
        "routes": [
            "7"
        ],
        "name": "Maya Mandir",
        "stops": [
            "38",
            "50"
        ]
    },
    "40": {
        "stops": [
            "50",
            "41"
        ],
        "routes": [
            "7"
        ],
        "name": "Ghooghra"
    },
    "41": {
        "stops": [
            "40",
            "42"
        ],
        "name": "Pushkar Bypass",
        "routes": [
            "7"
        ]
    },
    "42": {
        "stops": [
            "41"
        ],
        "routes": [
            "7"
        ],
        "name": "MDSU"
    },
    "43": {
        "routes": [
            "15"
        ],
        "stops": [
            "5",
            "44"
        ],
        "name": "Gyanoday Colony"
    },
    "44": {
        "stops": [
            "43",
            "45"
        ],
        "routes": [
            "15"
        ],
        "name": "Kiranipura"
    },
    "45": {
        "stops": [
            "44",
            "46"
        ],
        "routes": [
            "15"
        ],
        "name": "ECA"
    },
    "46": {
        "name": "Nareli",
        "stops": [
            "45"
        ],
        "routes": [
            "15"
        ]
    },
    "47": {
        "routes": [
            "4"
        ],
        "name": "Jiwan Mandir",
        "stops": [
            "17",
            "48"
        ]
    },
    "48": {
        "name": "Kabir Nagar",
        "stops": [
            "47",
            "18"
        ],
        "routes": [
            "4"
        ]
    },
    "49": {
        "routes": "7",
        "stops": [
            "37",
            "38"
        ],
        "name": "Police Lines"
    },
    "50": {
        "routes": [
            "15"
        ],
        "name": "Ajmer Range IGP",
        "stops": [
            "39",
            "40"
        ]
    }
}

graph = {
    "1": { "2": 1 },
    "2": { "1": 1, "3": 1 },
    "3": { "2": 1, "4": 1 },
    "4": { "3": 1, "5": 1 },
    "5": { "4": 1, "6": 1, "43": 1 },
    "6": { "5": 1, "7": 1 },
    "7": { "6": 1, "8": 1 },
    "8": { "7": 1, "9": 1, "31": 1 },
    "9": { "8": 1, "10": 1 },
    "10": { "9": 1, "11": 1 },
    "11": { "10": 1, "12": 1, "32": 1 },
    "12": { "11": 1, "13": 1 },
    "13": { "12": 1, "14": 1, "35": 1 },
    "14": { "13": 1, "15": 1, "34": 1 },
    "15": { "14": 1, "16": 1 },
    "16": { "15": 1, "17": 1 },
    "17": { "16": 1, "47": 1 },
    "18": { "48": 1 },
    "19": { "20": 1 },
    "20": { "19": 1, "21": 1 },
    "21": { "20": 1, "22": 1 },
    "22": { "21": 1, "23": 1 },
    "23": { "22": 1, "24": 1 },
    "24": { "23": 1, "25": 1 },
    "25": { "24": 1, "26": 1 },
    "26": { "25": 1, "27": 1 },
    "27": { "26": 1, "28": 1 },
    "28": { "27": 1, "29": 1 },
    "29": { "28": 1, "30": 1 },
    "30": { "29": 1, "31": 1 },
    "31": { "8": 1, "30": 1 },
    "32": { "11": 1, "33": 1 },
    "33": { "32": 1, "34": 1 },
    "34": { "14": 1, "33": 1 },
    "35": { "13": 1, "36": 1 },
    "36": { "35": 1, "37": 1 },
    "37": { "36": 1, "49": 1 },
    "38": { "39": 1, "49": 1 },
    "39": { "38": 1, "50": 1 },
    "40": { "41": 1, "50": 1 },
    "41": { "40": 1, "42": 1 },
    "42": { "41": 1 },
    "43": { "5": 1, "44": 1 },
    "44": { "43": 1, "45": 1 },
    "45": { "44": 1, "46": 1 },
    "46": { "45": 1 },
    "47": { "17": 1, "48": 1 },
    "48": { "18": 1, "47": 1 },
    "49": { "37": 1, "38": 1 },
    "50": { "39": 1, "40": 1 }
}

let shortestDistanceNode = (distances, visited) => {
    // create a default value for shortest
    let shortest = null;

    // for each node in the distances object
    for (let node in distances) {
        // if no node has been assigned to shortest yet
        // or if the current node's distance is smaller than the current shortest
        let currentIsShortest =
            shortest === null || distances[node] < distances[shortest];

        // and if the current node is in the unvisited set
        if (currentIsShortest && !visited.includes(node)) {
            // update shortest to be the current node
            shortest = node;
        }
    }
    return shortest;
};

let findShortestPath = (graph, startNode, endNode) => {

    // track distances from the start node using a hash object
    let distances = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(distances, graph[startNode]);
    // track paths using a hash object
    let parents = { endNode: null };
    for (let child in graph[startNode]) {
        parents[child] = startNode;
    }

    // collect visited nodes
    let visited = [];
    // find the nearest node
    let node = shortestDistanceNode(distances, visited);

    // for that node:
    while (node) {
        // find its distance from the start node & its child nodes
        let distance = distances[node];
        let children = graph[node];

        // for each of those child nodes:
        for (let child in children) {

            // make sure each child node is not the start node
            if (String(child) === String(startNode)) {
                continue;
            } else {
                // save the distance from the start node to the child node
                let newdistance = distance + children[child];
                // if there's no recorded distance from the start node to the child node in the distances object
                // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
                if (!distances[child] || distances[child] > newdistance) {
                    // save the distance to the object
                    distances[child] = newdistance;
                    // record the path
                    parents[child] = node;
                }
            }
        }
        // move the current node to the visited set
        visited.push(node);
        // move to the nearest neighbor node
        node = shortestDistanceNode(distances, visited);
    }

    // using the stored paths from start node to end node
    // record the shortest path
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
        shortestPath.push(parent);
        parent = parents[parent];
    }
    shortestPath.reverse();

    //this is the shortest path
    let results = {
        distance: distances[endNode],
        path: shortestPath,
    };
    // return the shortest path & the end node's distance from the start node
    return results;
};


var bodyParser = require('body-parser')
var express = require('express');
var app = express();

var jsonParser = bodyParser.json()

app.post('/pathFind', jsonParser, function (req, res) {

    console.log(req.body);

    result = findShortestPath(graph, req.body.from, req.body.to);

    final_result = [];

    if (result.distance !== "Infinity") {
        result.path.forEach((stop) => {
            final_result.push({ stop_id: stop, info: stands[stop] });
        });
    }


    res.json(final_result);

});

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})