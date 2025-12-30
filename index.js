import Tree from './tree.js';

// Test the BST implementation
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

console.log('Original array:', testArray);
console.log('Array with duplicates:', testArray.filter((item, index) => testArray.indexOf(item) !== index));

const tree = new Tree(testArray);

console.log('\nBalanced BST:');
tree.prettyPrint();

console.log('\nRoot node:', tree.root.data);
console.log('Root left child:', tree.root.left?.data);
console.log('Root right child:', tree.root.right?.data);
