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

    // Insert a value into the BST
    insert(value) {
        this.root = this.#insertRec(this.root, value);
    }

    #insertRec(node, value) {
        // Base case: found the position to insert
        if (node === null) {
            return new Node(value);
        }

        // Ignore duplicates
        if (value === node.data) {
            return node;
        }

        // Traverse left or right based on value
        if (value < node.data) {
            node.left = this.#insertRec(node.left, value);
        } else {
            node.right = this.#insertRec(node.right, value);
        }

        return node;
    }

    // Find and return the node with the given value
    find(value) {
        return this.#findRec(this.root, value);
    }

    #findRec(node, value) {
        // Base case: not found or found
        if (node === null || node.data === value) {
            return node;
        }

        // Traverse left or right based on value
        if (value < node.data) {
            return this.#findRec(node.left, value);
        } else {
            return this.#findRec(node.right, value);
        }
    }

    // Delete a value from the BST
    deleteItem(value) {
        this.root = this.#deleteRec(this.root, value);
    }

    #deleteRec(node, value) {
        // Base case: value not found
        if (node === null) {
            return null;
        }

        // Traverse to find the node to delete
        if (value < node.data) {
            node.left = this.#deleteRec(node.left, value);
            return node;
        } else if (value > node.data) {
            node.right = this.#deleteRec(node.right, value);
            return node;
        }

        // Node to delete found (node.data === value)

        // Case 1: Node has no children (leaf node)
        if (node.left === null && node.right === null) {
            return null;
        }

        // Case 2: Node has only one child
        if (node.left === null) {
            return node.right;
        }
        if (node.right === null) {
            return node.left;
        }

        // Case 3: Node has two children
        // Find the inorder successor (smallest value in right subtree)
        const successor = this.#findMin(node.right);

        // Replace node's data with successor's data
        node.data = successor.data;

        // Delete the successor
        node.right = this.#deleteRec(node.right, successor.data);

        return node;
    }

    // Level-order traversal (breadth-first) - Iterative implementation
    levelOrderForEach(callback) {
        if (!callback) {
            throw new Error('Callback function is required');
        }

        if (this.root === null) {
            return;
        }

        // Use array as a queue
        const queue = [this.root];

        while (queue.length > 0) {
            // Dequeue the first node
            const currentNode = queue.shift();

            // Call the callback with the current node
            callback(currentNode);

            // Enqueue left child if it exists
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            // Enqueue right child if it exists
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }

    // Level-order traversal (breadth-first) - Recursive implementation
    levelOrderForEachRecursive(callback) {
        if (!callback) {
            throw new Error('Callback function is required');
        }

        if (this.root === null) {
            return;
        }

        const queue = [this.root];
        this.#levelOrderRec(queue, callback);
    }

    #levelOrderRec(queue, callback) {
        if (queue.length === 0) {
            return;
        }

        const currentNode = queue.shift();
        callback(currentNode);

        if (currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            queue.push(currentNode.right);
        }

        this.#levelOrderRec(queue, callback);
    }

    // In-order traversal (left -> root -> right)
    inOrderForEach(callback) {
        if (!callback) {
            throw new Error('Callback function is required');
        }

        this.#inOrderRec(this.root, callback);
    }

    #inOrderRec(node, callback) {
        if (node === null) {
            return;
        }

        // Traverse left subtree
        this.#inOrderRec(node.left, callback);

        // Visit root
        callback(node);

        // Traverse right subtree
        this.#inOrderRec(node.right, callback);
    }

    // Pre-order traversal (root -> left -> right)
    preOrderForEach(callback) {
        if (!callback) {
            throw new Error('Callback function is required');
        }

        this.#preOrderRec(this.root, callback);
    }

    #preOrderRec(node, callback) {
        if (node === null) {
            return;
        }

        // Visit root
        callback(node);

        // Traverse left subtree
        this.#preOrderRec(node.left, callback);

        // Traverse right subtree
        this.#preOrderRec(node.right, callback);
    }

    // Post-order traversal (left -> right -> root)
    postOrderForEach(callback) {
        if (!callback) {
            throw new Error('Callback function is required');
        }

        this.#postOrderRec(this.root, callback);
    }

    #postOrderRec(node, callback) {
        if (node === null) {
            return;
        }

        // Traverse left subtree
        this.#postOrderRec(node.left, callback);

        // Traverse right subtree
        this.#postOrderRec(node.right, callback);

        // Visit root
        callback(node);
    }

    // Helper method to find the minimum value node in a subtree
    #findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
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
