import Tree from './tree.js';

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║        COMPLETE BST IMPLEMENTATION - ALL FEATURES          ║');
console.log('╚════════════════════════════════════════════════════════════╝');

// Create initial tree
const tree = new Tree([15, 10, 20, 8, 12, 17, 25, 6, 11, 16, 27]);

console.log('\n📊 INITIAL TREE');
console.log('═'.repeat(60));
tree.prettyPrint();

console.log('\n' + '─'.repeat(60));
console.log('1️⃣  BASIC OPERATIONS');
console.log('─'.repeat(60));

console.log('\n🔍 find(17):');
const found = tree.find(17);
console.log('   Result:', found ? `Found node with data ${found.data}` : 'Not found');

console.log('\n➕ insert(14):');
tree.insert(14);
tree.prettyPrint();

console.log('\n➖ deleteItem(8):');
tree.deleteItem(8);
tree.prettyPrint();

console.log('\n' + '─'.repeat(60));
console.log('2️⃣  TRAVERSAL METHODS');
console.log('─'.repeat(60));

const levelOrder = [];
tree.levelOrderForEach((node) => levelOrder.push(node.data));
console.log('\n🔵 Level-Order:', levelOrder.join(' → '));

const inOrder = [];
tree.inOrderForEach((node) => inOrder.push(node.data));
console.log('🟢 In-Order (sorted):', inOrder.join(' → '));

const preOrder = [];
tree.preOrderForEach((node) => preOrder.push(node.data));
console.log('🟡 Pre-Order:', preOrder.join(' → '));

const postOrder = [];
tree.postOrderForEach((node) => postOrder.push(node.data));
console.log('🔴 Post-Order:', postOrder.join(' → '));

console.log('\n' + '─'.repeat(60));
console.log('3️⃣  TREE ANALYSIS');
console.log('─'.repeat(60));

console.log('\n📏 Height Analysis:');
console.log('   Root (15): height =', tree.height(15));
console.log('   Node (12): height =', tree.height(12));
console.log('   Leaf (27): height =', tree.height(27));

console.log('\n📐 Depth Analysis:');
console.log('   Root (15): depth =', tree.depth(15));
console.log('   Node (12): depth =', tree.depth(12));
console.log('   Leaf (27): depth =', tree.depth(27));

console.log('\n⚖️  Balance Check:');
console.log('   Is balanced?', tree.isBalanced() ? '✅ Yes' : '❌ No');

console.log('\n' + '─'.repeat(60));
console.log('4️⃣  MAKING TREE UNBALANCED');
console.log('─'.repeat(60));

console.log('\nInserting 30, 35, 40, 45, 50 (all to the right)...');
[30, 35, 40, 45, 50].forEach(val => tree.insert(val));

tree.prettyPrint();

console.log('\n⚠️  Analysis of unbalanced tree:');
console.log('   Root height:', tree.height(15));
console.log('   Is balanced?', tree.isBalanced() ? '✅ Yes' : '❌ No');

console.log('\n' + '─'.repeat(60));
console.log('5️⃣  REBALANCING');
console.log('─'.repeat(60));

console.log('\nCalling rebalance()...\n');
tree.rebalance();

tree.prettyPrint();

console.log('\n✅ Analysis of rebalanced tree:');
console.log('   Root height:', tree.height(20));
console.log('   Is balanced?', tree.isBalanced() ? '✅ Yes' : '❌ No');

console.log('\n' + '═'.repeat(60));
console.log('📋 COMPLETE METHOD SUMMARY');
console.log('═'.repeat(60));

console.log('\n✅ Core Structure:');
console.log('   • Node class (data, left, right)');
console.log('   • Tree class (root)');
console.log('   • buildTree(array) - creates balanced BST');

console.log('\n✅ Basic Operations:');
console.log('   • insert(value) - O(log n)');
console.log('   • deleteItem(value) - O(log n)');
console.log('   • find(value) - O(log n)');

console.log('\n✅ Traversals (all require callback):');
console.log('   • levelOrderForEach() - breadth-first (iterative)');
console.log('   • levelOrderForEachRecursive() - breadth-first (recursive)');
console.log('   • inOrderForEach() - depth-first (sorted!)');
console.log('   • preOrderForEach() - depth-first (parent first)');
console.log('   • postOrderForEach() - depth-first (children first)');

console.log('\n✅ Tree Analysis:');
console.log('   • height(value) - edges to furthest leaf');
console.log('   • depth(value) - edges from root');
console.log('   • isBalanced() - checks balance condition');
console.log('   • rebalance() - rebuilds balanced tree');

console.log('\n✅ Utility:');
console.log('   • prettyPrint() - visual representation');

console.log('\n' + '═'.repeat(60));
console.log('🎯 KEY FEATURES');
console.log('═'.repeat(60));

console.log('\n• Automatic duplicate removal in buildTree()');
console.log('• Automatic sorting in buildTree()');
console.log('• Error handling for missing callbacks');
console.log('• Efficient O(log n) operations when balanced');
console.log('• Easy rebalancing with one method call');
console.log('• Both iterative and recursive implementations');
console.log('• Comprehensive tree analysis tools');

console.log('\n✅ BST Implementation Complete! 🎉\n');
