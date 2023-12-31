import City from "./data_structures/city.ts";
import Init from "./initialize_graph.ts";

function UpdatePriorityQueue(queue: Array<City>, node: City){
	let index = queue.indexOf(node);
	queue.splice(index,1);
	let i = queue.length-1;
	while(i>=0 && queue[i].smallestCost < node.smallestCost) i--;
	queue.splice(i+1,0,node);
}

function dijkstra(Cities: Array<City>){
	let priorityQueue: Array<City> = [Cities[0]];
	let currentCity;
	for(let i = 0; i < Cities.length ; i++){ 
		currentCity = priorityQueue.pop();
		for(let path of currentCity!.neighbours){
			if (path.to.smallestCost > currentCity?.smallestCost + path.cost){
				path.to.smallestCost = currentCity?.smallestCost + path.cost;
				path.to.previousCity = currentCity;
				priorityQueue.push(path.to);
				UpdatePriorityQueue(priorityQueue, path.to);
			}
		}
	}
}

let Cities: Array<City> | null = Init(1);
dijkstra(Cities)

for(let i of Cities){
	let path = [];
	let foo: City | null = i;
	while(foo != null){
		path.push(foo.name);
		foo = foo.previousCity;
	}
	console.log(`shortest path from ${Cities[0].name} to ${i.name} is ${path.reverse()} with cost ${i.smallestCost}`);
}
