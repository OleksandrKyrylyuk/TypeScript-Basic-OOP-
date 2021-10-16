import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter{
	constructor(public	 data: string){
		super();
	}

	get length(): number {
		return this.data.length
	}
	compare(i:number, j: number): boolean {
		return this.data[i].toLocaleLowerCase() > this.data[j].toLocaleLowerCase()
	}

	swap(i:number, j: number): void {
		const characters = this.data.split('');
		const tmp = characters[i];
		characters[i] = characters[j];
		characters[j] = tmp;
		this.data = characters.join('');
	}
}