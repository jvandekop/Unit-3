class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating the tree
const head = new Leaf(10);
head.left = new Leaf(5);
head.right = new Leaf(15);
head.left.left = new Leaf(3);
head.left.right = new Leaf(7);
head.right.left = new Leaf(12);
head.right.right = new Leaf(17);
head.left.left.left = new Leaf(1);
head.left.left.right = new Leaf(4);
head.right.left.left = new Leaf(11);
head.right.left.right = new Leaf(14);

// Arrays to store search results
let breadth = [];
let depth = [];

// Depth First Search function
function depthFirstSearch(node = head) {
    if (node !== null) {
        depth.push(node.value);
        depthFirstSearch(node.left);
        depthFirstSearch(node.right);
    }
}

// Breadth First Search function
function breadthFirstSearch() {
    const queue = [];
    queue.push(head);
    while (queue.length > 0) {
        const current = queue.shift();
        breadth.push(current.value);
        if (current.left !== null) {
            queue.push(current.left);
        }
        if (current.right !== null) {
            queue.push(current.right);
        }
    }
}

// Displaying results in HTML
function displayResults() {
    const depthResult = document.getElementById('depthResult');
    const breadthResult = document.getElementById('breadthResult');

    depthResult.innerText = "Depth First Search Result: " + depth.join(', ');
    breadthResult.innerText = "Breadth First Search Result: " + breadth.join(', ');
}

// Testing the code
depthFirstSearch();
breadthFirstSearch();
displayResults();
