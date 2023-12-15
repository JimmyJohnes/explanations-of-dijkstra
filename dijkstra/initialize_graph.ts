import City from "./data_structures/city.ts";
import Path from "./data_structures/path.ts";
function ConnectTwoCities(city1: City, city2:City, pathCost: number){
	city1.neighbours.push(new Path(city1,city2,pathCost));
	city2.neighbours.push(new Path(city2,city1,pathCost));
}
/**
 * Sets up the initial state of 5 connected cities, returns the Sing city
 * @return {City} S the city where the algorithm starts, with 4 other cities connected
 */
export default function Init(): City{
	const S = new City('S');
	let A = new City('A');
	ConnectTwoCities(S,A,1);
	let B= new City('B');
	ConnectTwoCities(S,B,2);
	ConnectTwoCities(B,A,1);
	let C= new City('C');
	ConnectTwoCities(A,C,2);
	let D = new City('D');
	ConnectTwoCities(C,D,1);
	ConnectTwoCities(B,D,1);
	S.smallestCost = 0;
	return S;
}
