import City from "./data_structures/city.ts";
import Path from "./data_structures/path.ts";
import Init from "./initialize_graph.ts";

function UpdateCostOfNeighbours(currentCity: City){
	for(let path of currentCity.neighbours){
		let price = currentCity.smallestCost + path.cost;
		if(path.to.smallestCost > price){
			path.to.smallestCost = price;
		}
	}
}
function findCityWithSmallestCost(currentCity: City){
	currentCity.neighbours.sort((a,b) => a.cost - b.cost) // sorts neighbours Array from smallest cost to highest
	let nextCity = currentCity.neighbours[0].to;
	if (nextCity == currentCity.previousCity){
		nextCity = currentCity.neighbours[1].to;
	}
	nextCity.previousCity = currentCity;
	currentCity.neighbours.shift();
	return nextCity;
}
function dijkstra(currentCity: City){
	UpdateCostOfNeighbours(currentCity);
	currentCity  = findCityWithSmallestCost(currentCity)
	if(currentCity.name != 'D')
	{
		return dijkstra(currentCity);
	}
	return currentCity
}
let S: City | null = Init();
S = dijkstra(S);
console.log(S.smallestCost);
while(S.previousCity != null){
	console.log(S.name);
	S = S.previousCity
}
