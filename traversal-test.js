import Tree from './tree.js';

// Create a simple balanced BST for testing traversals
const testArray = [1, 2, 3, 4, 5, 6, 7];
const tree = new Tree(testArray);

console.log('=== Tree Structure ===');
tree.prettyPrint();

console.log('\n=== Level-Order Traversal (Breadth-First) - Iterative ===');
console.log('Expected order: 4, 2, 6, 1, 3, 5, 7');
const levelOrderValues = [];
tree.levelOrderForEach((node) => {
    levelOrderValues.push(node.data);
});
console.log('Actual order:', levelOrderValues.join(', '));

console.log('\n=== Level-Order Traversal (Breadth-First) - Recursive ===');
const levelOrderRecValues = [];
tree.levelOrderForEachRecursive((node) => {
    levelOrderRecValues.push(node.data);
});
console.log('Actual order:', levelOrderRecValues.join(', '));

console.log('\n=== In-Order Traversal (Left -> Root -> Right) ===');
console.log('Expected order: 1, 2, 3, 4, 5, 6, 7 (sorted)');
const inOrderValues = [];
tree.inOrderForEach((node) => {
    inOrderValues.push(node.data);
});
console.log('Actual order:', inOrderValues.join(', '));

console.log('\n=== Pre-Order Traversal (Root -> Left -> Right) ===');
console.log('Expected order: 4, 2, 1, 3, 6, 5, 7');
const preOrderValues = [];
tree.preOrderForEach((node) => {
    preOrderValues.push(node.data);
});
console.log('Actual order:', preOrderValues.join(', '));

console.log('\n=== Post-Order Traversal (Left -> Right -> Root) ===');
console.log('Expected order: 1, 3, 2, 5, 7, 6, 4');
const postOrderValues = [];
tree.postOrderForEach((node) => {
    postOrderValues.push(node.data);
});
console.log('Actual order:', postOrderValues.join(', '));

// Test error handling
console.log('\n=== Error Handling Tests ===');
try {
    tree.levelOrderForEach();
    console.log('❌ levelOrderForEach should throw error without callback');
} catch (error) {
    console.log('✅ levelOrderForEach throws error:', error.message);
}

try {
    tree.inOrderForEach();
    console.log('❌ inOrderForEach should throw error without callback');
} catch (error) {
    console.log('✅ inOrderForEach throws error:', error.message);
}

try {
    tree.preOrderForEach();
    console.log('❌ preOrderForEach should throw error without callback');
} catch (error) {
    console.log('✅ preOrderForEach throws error:', error.message);
}

try {
    tree.postOrderForEach();
    console.log('❌ postOrderForEach should throw error without callback');
} catch (error) {
    console.log('✅ postOrderForEach throws error:', error.message);
}

// Test with more complex tree
console.log('\n\n=== Complex Tree Example ===');
const complexArray = [15, 10, 20, 8, 12, 17, 25, 6, 11, 16, 27];
const complexTree = new Tree(complexArray);

console.log('\nTree Structure:');
complexTree.prettyPrint();

console.log('\nLevel-Order (by levels):');
const levels = [];
complexTree.levelOrderForEach((node) => {
    levels.push(node.data);
});
console.log(levels.join(' -> '));

console.log('\nIn-Order (sorted):');
const sorted = [];
complexTree.inOrderForEach((node) => {
    sorted.push(node.data);
});
console.log(sorted.join(' -> '));

console.log('\nPre-Order (useful for copying tree):');
const preOrder = [];
complexTree.preOrderForEach((node) => {
    preOrder.push(node.data);
});
console.log(preOrder.join(' -> '));

console.log('\nPost-Order (useful for deleting tree):');
const postOrder = [];
complexTree.postOrderForEach((node) => {
    postOrder.push(node.data);
});
console.log(postOrder.join(' -> '));

// Demonstrate practical use case
console.log('\n\n=== Practical Use Case: Sum all values ===');
let sum = 0;
complexTree.inOrderForEach((node) => {
    sum += node.data;
});
console.log('Sum of all values:', sum);

console.log('\n=== Practical Use Case: Find all values > 15 ===');
const valuesGreaterThan15 = [];
complexTree.inOrderForEach((node) => {
    if (node.data > 15) {
        valuesGreaterThan15.push(node.data);
    }
});
console.log('Values > 15:', valuesGreaterThan15.join(', '));
