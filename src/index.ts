import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([5, 2, 65, -2]);
const charactersCollection = new CharactersCollection('DhfgjhfD');
const linkedlist = new LinkedList();

numberCollection.sort();
console.log(numberCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

linkedlist.add(13);
linkedlist.add(-13);
linkedlist.add(2);
linkedlist.add(5);
linkedlist.add(100);
linkedlist.sort();
linkedlist.print();
