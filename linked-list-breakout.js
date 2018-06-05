//Topic: Linked Lists
//You will be able to :
//create a Linked List class
//create a Node class
//learn how to traverse a Linked list
//learn how to add a node to the list
//learn how to find a Node
//talk about the time complexities of the methods



Looking forward to our session together today! By the end of today you will be able to :

-create a Linked List and Node Class
-learn how to traverse a Linked list
-learn how to add a node to the list
-learn how to find a Node
-be able to explain the differences between arrays and linked list in terms of Time

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    //add node
    //O(1) vs o(n) with array
    addToHead(value) {
       const newNode = new Node(value); // 1
       newNode.next = this.head;  // 2
       this.head = newNode;       // 3
       this.length++;
       return this;
   }

   //find
   //O(n) vs O(1) for array
   find(val) {
    let thisNode = this.head;

    while(thisNode) {
        if(thisNode.value === val) {
            return thisNode;
        }
 
        thisNode = thisNode.next;
    }

    return thisNode;
}

   //remove on their own
}

class Node {
    constructor(val)
    {
        this.val = val;
        this.next = null
    }
}
