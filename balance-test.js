import Tree from './tree.js';

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║     BST HEIGHT, DEPTH, BALANCE & REBALANCE TESTS           ║');
console.log('╚════════════════════════════════════════════════════════════╝');

// Create a balanced tree
console.log('\n=== Test 1: Balanced Tree ===');
const balancedTree = new Tree([1, 2, 3, 4, 5, 6, 7]);
console.log('\nTree structure:');
balancedTree.prettyPrint();

console.log('\n--- Height Tests ---');
console.log('Height of root (4):', balancedTree.height(4)); // Should be 2
console.log('Height of node (2):', balancedTree.height(2)); // Should be 1
console.log('Height of node (6):', balancedTree.height(6)); // Should be 1
console.log('Height of leaf (1):', balancedTree.height(1)); // Should be 0
console.log('Height of leaf (7):', balancedTree.height(7)); // Should be 0
console.log('Height of non-existent (99):', balancedTree.height(99)); // Should be null

console.log('\n--- Depth Tests ---');
console.log('Depth of root (4):', balancedTree.depth(4)); // Should be 0
console.log('Depth of node (2):', balancedTree.depth(2)); // Should be 1
console.log('Depth of node (6):', balancedTree.depth(6)); // Should be 1
console.log('Depth of leaf (1):', balancedTree.depth(1)); // Should be 2
console.log('Depth of leaf (7):', balancedTree.depth(7)); // Should be 2
console.log('Depth of non-existent (99):', balancedTree.depth(99)); // Should be null

console.log('\n--- Balance Test ---');
console.log('Is tree balanced?', balancedTree.isBalanced()); // Should be true

// Create an unbalanced tree by inserting values sequentially
console.log('\n\n=== Test 2: Unbalanced Tree ===');
const unbalancedTree = new Tree([1]);
unbalancedTree.insert(2);
unbalancedTree.insert(3);
unbalancedTree.insert(4);
unbalancedTree.insert(5);
unbalancedTree.insert(6);
unbalancedTree.insert(7);

console.log('\nUnbalanced tree structure (right-skewed):');
unbalancedTree.prettyPrint();

console.log('\n--- Height Tests on Unbalanced Tree ---');
console.log('Height of root (1):', unbalancedTree.height(1)); // Should be 6
console.log('Height of node (4):', unbalancedTree.height(4)); // Should be 3
console.log('Height of leaf (7):', unbalancedTree.height(7)); // Should be 0

console.log('\n--- Depth Tests on Unbalanced Tree ---');
console.log('Depth of root (1):', unbalancedTree.depth(1)); // Should be 0
console.log('Depth of node (4):', unbalancedTree.depth(4)); // Should be 3
console.log('Depth of leaf (7):', unbalancedTree.depth(7)); // Should be 6

console.log('\n--- Balance Test ---');
console.log('Is tree balanced?', unbalancedTree.isBalanced()); // Should be false

console.log('\n--- Rebalancing ---');
console.log('Calling rebalance()...');
unbalancedTree.rebalance();

console.log('\nRebalanced tree structure:');
unbalancedTree.prettyPrint();

console.log('\nIs tree balanced now?', unbalancedTree.isBalanced()); // Should be true
console.log('Height of root (4):', unbalancedTree.height(4)); // Should be 2 (much better!)

// Test with a more complex scenario
console.log('\n\n=== Test 3: Complex Scenario ===');
const complexTree = new Tree([15, 10, 20, 8, 12, 17, 25]);
console.log('\nInitial balanced tree:');
complexTree.prettyPrint();
console.log('Is balanced?', complexTree.isBalanced()); // true

console.log('\n--- Height and Depth for all nodes ---');
const values = [8, 10, 12, 15, 17, 20, 25];
console.log('\n┌───────┬────────┬───────┐');
console.log('│ Value │ Height │ Depth │');
console.log('├───────┼────────┼───────┤');
values.forEach(val => {
    const h = complexTree.height(val);
    const d = complexTree.depth(val);
    console.log(`│  ${val.toString().padEnd(4)} │   ${h}    │   ${d}   │`);
});
console.log('└───────┴────────┴───────┘');

// Make tree unbalanced by adding nodes to one side
console.log('\n--- Making tree unbalanced ---');
console.log('Inserting 30, 35, 40 (all to the right)...');
complexTree.insert(30);
complexTree.insert(35);
complexTree.insert(40);

console.log('\nUnbalanced tree:');
complexTree.prettyPrint();
console.log('Is balanced?', complexTree.isBalanced()); // false

console.log('\n--- Rebalancing ---');
complexTree.rebalance();
console.log('\nRebalanced tree:');
complexTree.prettyPrint();
console.log('Is balanced?', complexTree.isBalanced()); // true

// Edge cases
console.log('\n\n=== Test 4: Edge Cases ===');

console.log('\n--- Single Node Tree ---');
const singleNode = new Tree([42]);
singleNode.prettyPrint();
console.log('Height of root (42):', singleNode.height(42)); // 0
console.log('Depth of root (42):', singleNode.depth(42)); // 0
console.log('Is balanced?', singleNode.isBalanced()); // true

console.log('\n--- Two Node Tree ---');
const twoNodes = new Tree([10, 20]);
twoNodes.prettyPrint();
console.log('Height of root (10):', twoNodes.height(10)); // 1
console.log('Height of leaf (20):', twoNodes.height(20)); // 0
console.log('Depth of root (10):', twoNodes.depth(10)); // 0
console.log('Depth of leaf (20):', twoNodes.depth(20)); // 1
console.log('Is balanced?', twoNodes.isBalanced()); // true

// Demonstrate height + depth relationship
console.log('\n\n=== Test 5: Height + Depth Relationship ===');
const relationTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log('\nPerfect binary tree:');
relationTree.prettyPrint();

console.log('\nFor each node, height + depth relates to tree structure:');
console.log('Root (8): height =', relationTree.height(8), ', depth =', relationTree.depth(8));
console.log('Node (4): height =', relationTree.height(4), ', depth =', relationTree.depth(4));
console.log('Node (12): height =', relationTree.height(12), ', depth =', relationTree.depth(12));
console.log('Leaf (1): height =', relationTree.height(1), ', depth =', relationTree.depth(1));
console.log('Leaf (15): height =', relationTree.height(15), ', depth =', relationTree.depth(15));

console.log('\n✅ All tests completed!');
