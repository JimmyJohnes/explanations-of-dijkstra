export default class Path{
	public from: string;
	public to: string;
	public cost: number;
	constructor(from: string, to:string, cost: number){
		this.from = from;
		this.to = to;
		this.cost = cost;
	}
}
