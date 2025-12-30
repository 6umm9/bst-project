import Tree from './tree.js';

// Test the BST implementation
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

console.log('Original array:', testArray);
console.log('Array with duplicates:', testArray.filter((item, index) => testArray.indexOf(item) !== index));

const tree = new Tree(testArray);

console.log('\n=== Initial Balanced BST ===');
tree.prettyPrint();

// Test insert method
console.log('\n=== Testing insert() ===');
console.log('Inserting 10...');
tree.insert(10);
tree.prettyPrint();

console.log('\nInserting 2...');
tree.insert(2);
tree.prettyPrint();

console.log('\nInserting 100...');
tree.insert(100);
tree.prettyPrint();

console.log('\nTrying to insert duplicate 8 (should be ignored)...');
tree.insert(8);
tree.prettyPrint();

// Test find method
console.log('\n=== Testing find() ===');
const found23 = tree.find(23);
console.log('Finding 23:', found23 ? `Found! Data: ${found23.data}` : 'Not found');

const found100 = tree.find(100);
console.log('Finding 100:', found100 ? `Found! Data: ${found100.data}` : 'Not found');

const found999 = tree.find(999);
console.log('Finding 999 (not in tree):', found999 ? `Found! Data: ${found999.data}` : 'Not found');

// Test deleteItem method
console.log('\n=== Testing deleteItem() ===');

console.log('\nDeleting leaf node (100)...');
tree.deleteItem(100);
tree.prettyPrint();

console.log('\nDeleting node with one child (3)...');
tree.deleteItem(3);
tree.prettyPrint();

console.log('\nDeleting node with two children (67)...');
tree.deleteItem(67);
tree.prettyPrint();

console.log('\nDeleting root node (8)...');
tree.deleteItem(8);
tree.prettyPrint();

console.log('\nTrying to delete non-existent value (999)...');
tree.deleteItem(999);
tree.prettyPrint();

// Verify find after deletions
console.log('\n=== Verifying deletions with find() ===');
console.log('Finding deleted value 100:', tree.find(100) ? 'Found (ERROR!)' : 'Not found (correct)');
console.log('Finding deleted value 67:', tree.find(67) ? 'Found (ERROR!)' : 'Not found (correct)');
console.log('Finding existing value 23:', tree.find(23) ? 'Found (correct)' : 'Not found (ERROR!)');

