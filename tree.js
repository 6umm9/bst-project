import Node from './node.js';

// Tree class for BST
class Tree {
    constructor(array) {
        // Remove duplicates and sort the array
        const uniqueSorted = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(uniqueSorted);
    }

    buildTree(array) {
        // Base case: empty array
        if (array.length === 0) {
            return null;
        }

        // Find the middle element
        const mid = Math.floor(array.length / 2);

        // Create root node with middle element
        const node = new Node(array[mid]);

        // Recursively build left and right subtrees
        node.left = this.buildTree(array.slice(0, mid));
        node.right = this.buildTree(array.slice(mid + 1));

        return node;
    }

    // Helper method to visualize the tree (optional but useful for testing)
    prettyPrint(node = this.root, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}

export default Tree;
