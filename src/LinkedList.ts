import { Sorter } from './Sorter';

class Nodes {
	next: Nodes | null = null;
	constructor(public value: number){}
}

export class LinkedList extends Sorter{
	head: Nodes | null = null;

	add(data: number): void {

		const node = new Nodes(data);

		if (!this.head) {
			this.head = node;
			return
		}

		let tail = this.head;
		while (tail.next){
			tail = tail.next;
		}
		tail.next = node;
	}

	get length(): number {

		if(!this.head) return 0

		let node = this.head;
		let length = 1;
		while (node.next){
			node = node.next;
			length++;
		}
		
		return length
	}

	at(i: number): Nodes {
		if(!this.head) throw new Error('Error');

		let node: Nodes | null = this.head;
		let counter = 0;
		while (node){
			if (counter === i) return node;
			counter++;
			node = node.next;
		}
		throw new Error('Error');
	}

	compare (i: number, j: number): boolean {
		if(!this.head) throw new Error('Error');
		return this.at(i).value > this.at(j).value	
	}

	swap(i: number, j: number):void{
		const tmp = this.at(i).value;
		this.at(i).value = this.at(j).value;
		this.at(j).value = tmp;
	}

	print():void{
		if(!this.head) throw new Error('Error');

		let node: Nodes | null = this.head;
		while(node){
			console.log(node.value);
			node = node.next;
		}
	}
}