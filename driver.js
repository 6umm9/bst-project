import Tree from './tree.js';

// Helper function to generate an array of random numbers
function generateRandomNumbers(count, max) {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.floor(Math.random() * max));
    }
    return array;
}

// Function to print all traversals
function printTraversals(tree) {
    const levelOrder = [];
    tree.levelOrderForEach(node => levelOrder.push(node.data));
    console.log('Level-Order:', levelOrder.join(', '));

    const inOrder = [];
    tree.inOrderForEach(node => inOrder.push(node.data));
    console.log('In-Order:', inOrder.join(', '));

    const preOrder = [];
    tree.preOrderForEach(node => preOrder.push(node.data));
    console.log('Pre-Order:', preOrder.join(', '));

    const postOrder = [];
    tree.postOrderForEach(node => postOrder.push(node.data));
    console.log('Post-Order:', postOrder.join(', '));
}

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║                   BST DRIVER SCRIPT                        ║');
console.log('╚════════════════════════════════════════════════════════════╝');

// 1. Create a binary search tree from an array of random numbers < 100
console.log('\n--- 1. Creating BST from random numbers (< 100) ---');
const randomNums = generateRandomNumbers(15, 100);
console.log('Numbers used:', randomNums.join(', '));
const tree = new Tree(randomNums);

// 2. Confirm that the tree is balanced
console.log('\n--- 2. Checking if tree is balanced ---');
console.log('Is balanced?', tree.isBalanced());

// 3. Print out all elements in level, pre, post, and in order
console.log('\n--- 3. Elements in various orders ---');
printTraversals(tree);

// 4. Unbalance the tree by adding several numbers > 100
console.log('\n--- 4. Unbalancing tree by adding numbers > 100 ---');
const largeNums = [101, 150, 200, 250, 300, 350, 400];
console.log('Adding:', largeNums.join(', '));
largeNums.forEach(num => tree.insert(num));

// 5. Confirm that the tree is unbalanced
console.log('\n--- 5. Checking if tree is balanced ---');
console.log('Is balanced?', tree.isBalanced());

// 6. Balance the tree by calling rebalance
console.log('\n--- 6. Rebalancing tree ---');
tree.rebalance();

// 7. Confirm that the tree is balanced
console.log('\n--- 7. Checking if tree is balanced ---');
console.log('Is balanced?', tree.isBalanced());

// 8. Print out all elements in level, pre, post, and in order
console.log('\n--- 8. Elements in various orders after rebalance ---');
printTraversals(tree);

console.log('\nVisualizing the final balanced tree:');
tree.prettyPrint();
