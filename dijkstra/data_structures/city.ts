/**
 * City datastructure
 * @module City
 */
export default class City{
	public name: string;
	public smallestCost: number;
	public neighbours: Array<any>;
	/**
	 * City datastructure constructor
	 * @param {string} name Name of the City
	 */
	constructor(name: string){
		this.name = name;
		this.smallestCost = Infinity;
		this.neighbours = [];
	}
}

