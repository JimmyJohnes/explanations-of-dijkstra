export default class City{
	public name: string;
	public smallestCost: number;
	public neighbours: [];
	constructor(name: string){
		this.name = name;
		this.smallestCost = Infinity;
		this.neighbours = [];
	}
}

