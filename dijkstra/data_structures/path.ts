import City from "./city";

/**
 * Path datastructure
 * @module Path
 */
export default class Path{
	public from: City;
	public to: City;
	public cost: number;
	constructor(from: City, to: City, cost: number){
		this.from = from;
		this.to = to;
		this.cost = cost;
	}
}
