//singly linkedlist
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
} class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        
    }
}

var list = new singlyLinkedList()
list.push('hi');
list.push('by');
console.log(list);
