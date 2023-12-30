class City{
	public name: string;
	public smallestCost: number;
	public neighbours: Array<any>;
	public previousCity: City | null;
	/**
	 * City datastructure constructor
	 * @param {string} name Name of the City
	 */
	constructor(name: string){
		this.name = name;
		this.smallestCost = Infinity;
		this.neighbours = [];
		this.previousCity = null;
	}
}
class Path{
	public from: City;
	public to: City;
	public cost: number;
	constructor(from: City, to: City, cost: number){
		this.from = from;
		this.to = to;
		this.cost = cost;
	}
}

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

