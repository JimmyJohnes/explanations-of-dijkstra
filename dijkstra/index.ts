import City from "./data_structures/city.ts";
import Path from "./data_structures/path.ts";

/**
 * Sets up the initial state of 5 connected cities, returns the Sing city
 * @return {City} S the city where the algorithm starts, with 4 other cities connected
 */
function Init(): City{
	const S = new City('S');
	let A = new City('A');
	S.neighbours.push(new Path(S,A,1));
	let B= new City('B');
	S.neighbours.push(new Path(S,B,2));
	B.neighbours.push(new Path(B,A,1))
	let C= new City('C');
	A.neighbours.push(new Path(S,C,2));
	let D = new City('D');
	B.neighbours.push(new Path(B,D,1));
	C.neighbours.push(new Path(C,D,1));
	S.smallestCost = 0;
	return S;
}
function printALlCities(startingCity: City){
	console.log(`name: ${startingCity.name} \nneighbours: ${startingCity.neighbours}\ncost: ${startingCity.smallestCost}`);
	if(startingCity.name =='D') return
	for (let i of startingCity.neighbours){
		printALlCities(i.to);
	}
}

function UpdateCostOfNeighbours(currentCity: City){
	for(let path of currentCity.neighbours){
		let price = currentCity.smallestCost + path.cost;
		if(path.to.smallestCost < price){
			path.to.smallestCost = price
		}
	}
}

let S = Init();
UpdateCostOfNeighbours(S);
printALlCities(Init());
