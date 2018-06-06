
//to implement a stack in javascript we use an array, so is there a way to make it an actual queue?
Elements can be added to or removed from a stack at only one end (the top).
Elements can be added to a queue only at one end (the rear), and removed only from the other end (the front).

//Learning Objectives
//By the end you will be able to
//Describe a stack
//Describe a queue
//When would you use these data structures? //talk about real life examples
//

////////////// STACK////////////////////////
Elements can be added to or removed from a stack at only one end.
Since we view this end as the "top" of the stack, we use the term "push" for add, and the term "pop" for remove.

Examples of stacks in "real life":
The stack of trays in a cafeteria;
A stack of plates in a cupboard;
A driveway that is only one car wide. [Riley, p. 290]


Examples of stacks in computing:
Back/Forward stacks on browsers;
Undo/Redo stacks in Excel or Word;
Activation records of method calls;

used in depth first search

////////////////queue////////////////////////

Elements can be added only at one end, the "rear", Elements can be removed only at the other end, the "front".
We call adding to a queue "enqueueing", and removing from a queue "dequeueing".
Since the element dequeued is always the first one enqueued (among those still on it), a queue is referred to as a First-In-First-Out (FIFO) list.

Examples of queues in "real life":
A ticket line;
An escalator;
A car wash.
Examples of queues in computing:
A printer queue;
An input stream;

Used in breadth first search
