// data_structures/city.ts
class City {
  name;
  smallestCost;
  neighbours;
  previousCity;
  constructor(name) {
    this.name = name;
    this.smallestCost = Infinity;
    this.neighbours = [];
    this.previousCity = null;
  }
}

// data_structures/path.ts
class Path {
  from;
  to;
  cost;
  constructor(from, to, cost) {
    this.from = from;
    this.to = to;
    this.cost = cost;
  }
}

// initialize_graph.ts
var ConnectTwoCities = function(city1, city2, pathCost) {
  city1.neighbours.push(new Path(city1, city2, pathCost));
  city2.neighbours.push(new Path(city2, city1, pathCost));
};
var Init1 = function() {
  const S = new City("S");
  let A = new City("A");
  ConnectTwoCities(S, A, 1);
  let B = new City("B");
  ConnectTwoCities(S, B, 2);
  ConnectTwoCities(B, A, 1);
  let C = new City("C");
  ConnectTwoCities(A, C, 2);
  let D = new City("D");
  ConnectTwoCities(C, D, 1);
  ConnectTwoCities(B, D, 1);
  S.smallestCost = 0;
  return [S, A, B, C, D];
};
var Init2 = function() {
  let A = new City("A");
  A.smallestCost = 0;
  let B = new City("B");
  let C = new City("C");
  let D = new City("D");
  let E = new City("E");
  ConnectTwoCities(A, B, 3);
  ConnectTwoCities(A, D, 7);
  ConnectTwoCities(B, C, 4);
  ConnectTwoCities(B, D, 2);
  ConnectTwoCities(D, E, 4);
  ConnectTwoCities(D, C, 5);
  ConnectTwoCities(C, E, 6);
  return [A, B, C, D, E];
};
function Init(sceneNumber) {
  if (sceneNumber == 1)
    return Init1();
  else
    return Init2();
}

// index.ts
var UpdatePriorityQueue = function(queue, node) {
  let index = queue.indexOf(node);
  queue.splice(index, 1);
  let i = queue.length - 1;
  while (i >= 0 && queue[i].smallestCost < node.smallestCost)
    i--;
  queue.splice(i + 1, 0, node);
};
var dijkstra = function(Cities) {
  let priorityQueue = [Cities[0]];
  let currentCity;
  for (let i = 0;i < Cities.length; i++) {
    currentCity = priorityQueue.pop();
    for (let path2 of currentCity.neighbours) {
      if (path2.to.smallestCost > currentCity?.smallestCost + path2.cost) {
        path2.to.smallestCost = currentCity?.smallestCost + path2.cost;
        path2.to.previousCity = currentCity;
        priorityQueue.push(path2.to);
        UpdatePriorityQueue(priorityQueue, path2.to);
      }
    }
  }
};
var Cities = Init(1);
dijkstra(Cities);
for (let i of Cities) {
  let path2 = [];
  let foo = i;
  while (foo != null) {
    path2.push(foo.name);
    foo = foo.previousCity;
  }
  console.log(`shortest path from ${Cities[0].name} to ${i.name} is ${path2.reverse()} with cost ${i.smallestCost}`);
}
