import Tree from './tree.js';

// Create a simple tree for clear visualization
const tree = new Tree([4, 2, 6, 1, 3, 5, 7]);

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║         BST TRAVERSAL METHODS - VISUAL COMPARISON          ║');
console.log('╚════════════════════════════════════════════════════════════╝');

console.log('\n📊 Tree Structure:');
console.log('');
console.log('        4');
console.log('       / \\');
console.log('      2   6');
console.log('     / \\ / \\');
console.log('    1  3 5  7');
console.log('');

tree.prettyPrint();

console.log('\n' + '='.repeat(60));
console.log('BREADTH-FIRST TRAVERSAL');
console.log('='.repeat(60));

console.log('\n🔵 Level-Order (Iterative):');
console.log('   Visits nodes level by level, left to right');
const levelOrder = [];
tree.levelOrderForEach((node) => levelOrder.push(node.data));
console.log('   Order: ' + levelOrder.join(' → '));
console.log('   Levels: [4] → [2, 6] → [1, 3, 5, 7]');

console.log('\n🔵 Level-Order (Recursive):');
console.log('   Same as iterative, but uses recursion');
const levelOrderRec = [];
tree.levelOrderForEachRecursive((node) => levelOrderRec.push(node.data));
console.log('   Order: ' + levelOrderRec.join(' → '));

console.log('\n' + '='.repeat(60));
console.log('DEPTH-FIRST TRAVERSALS');
console.log('='.repeat(60));

console.log('\n🟢 In-Order (Left → Root → Right):');
console.log('   Visits left subtree, then root, then right subtree');
console.log('   ✨ Special property: Returns values in SORTED order!');
const inOrder = [];
tree.inOrderForEach((node) => inOrder.push(node.data));
console.log('   Order: ' + inOrder.join(' → '));
console.log('   Path: 1(L) → 2(R) → 3(L) → 4(R) → 5(L) → 6(R) → 7(L)');

console.log('\n🟡 Pre-Order (Root → Left → Right):');
console.log('   Visits root first, then left subtree, then right subtree');
console.log('   💡 Use case: Copying tree structure');
const preOrder = [];
tree.preOrderForEach((node) => preOrder.push(node.data));
console.log('   Order: ' + preOrder.join(' → '));
console.log('   Path: 4(R) → 2(R) → 1(L) → 3(L) → 6(R) → 5(L) → 7(L)');

console.log('\n🔴 Post-Order (Left → Right → Root):');
console.log('   Visits left subtree, then right subtree, then root');
console.log('   💡 Use case: Deleting tree (children before parent)');
const postOrder = [];
tree.postOrderForEach((node) => postOrder.push(node.data));
console.log('   Order: ' + postOrder.join(' → '));
console.log('   Path: 1(L) → 3(L) → 2(R) → 5(L) → 7(L) → 6(R) → 4(R)');

console.log('\n' + '='.repeat(60));
console.log('SUMMARY TABLE');
console.log('='.repeat(60));
console.log('');
console.log('┌─────────────────┬─────────────────────────────────────────┐');
console.log('│ Traversal       │ Output                                  │');
console.log('├─────────────────┼─────────────────────────────────────────┤');
console.log(`│ Level-Order     │ ${levelOrder.join(', ').padEnd(39)} │`);
console.log(`│ In-Order        │ ${inOrder.join(', ').padEnd(39)} │`);
console.log(`│ Pre-Order       │ ${preOrder.join(', ').padEnd(39)} │`);
console.log(`│ Post-Order      │ ${postOrder.join(', ').padEnd(39)} │`);
console.log('└─────────────────┴─────────────────────────────────────────┘');

console.log('\n' + '='.repeat(60));
console.log('WHEN TO USE EACH TRAVERSAL');
console.log('='.repeat(60));
console.log('');
console.log('🔵 Level-Order:');
console.log('   • Finding shortest path');
console.log('   • Level-by-level processing');
console.log('   • Breadth-first search');
console.log('');
console.log('🟢 In-Order:');
console.log('   • Getting sorted values from BST ⭐');
console.log('   • Validating BST property');
console.log('   • Range queries');
console.log('');
console.log('🟡 Pre-Order:');
console.log('   • Creating a copy of the tree');
console.log('   • Prefix expression evaluation');
console.log('   • Serializing tree');
console.log('');
console.log('🔴 Post-Order:');
console.log('   • Deleting tree nodes safely');
console.log('   • Postfix expression evaluation');
console.log('   • Calculating subtree properties');
console.log('');
