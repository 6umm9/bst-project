import Tree from './tree.js';

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║           REBALANCING DEMONSTRATION                        ║');
console.log('╚════════════════════════════════════════════════════════════╝');

console.log('\n📝 Scenario: Building an unbalanced tree by inserting in order\n');

// Start with an empty tree and insert values in ascending order
const tree = new Tree([50]);

console.log('Step 1: Starting with root = 50');
tree.prettyPrint();
console.log('Balanced?', tree.isBalanced(), '| Height:', tree.height(50));

console.log('\n' + '─'.repeat(60));
console.log('Step 2: Inserting 60 (right-skewed)');
tree.insert(60);
tree.prettyPrint();
console.log('Balanced?', tree.isBalanced(), '| Root height:', tree.height(50));

console.log('\n' + '─'.repeat(60));
console.log('Step 3: Inserting 70 (more right-skewed)');
tree.insert(70);
tree.prettyPrint();
console.log('Balanced?', tree.isBalanced(), '| Root height:', tree.height(50));

console.log('\n' + '─'.repeat(60));
console.log('Step 4: Inserting 80 (even more right-skewed)');
tree.insert(80);
tree.prettyPrint();
console.log('Balanced?', tree.isBalanced(), '| Root height:', tree.height(50));

console.log('\n' + '─'.repeat(60));
console.log('Step 5: Inserting 90, 100 (completely unbalanced!)');
tree.insert(90);
tree.insert(100);
tree.prettyPrint();
console.log('Balanced?', tree.isBalanced(), '| Root height:', tree.height(50));

console.log('\n' + '═'.repeat(60));
console.log('⚠️  PROBLEM: Tree is completely right-skewed!');
console.log('═'.repeat(60));

console.log('\nAnalysis of unbalanced tree:');
console.log('• Root (50) height:', tree.height(50), '(very tall!)');
console.log('• Root (50) depth:', tree.depth(50));
console.log('• Leaf (100) height:', tree.height(100));
console.log('• Leaf (100) depth:', tree.depth(100), '(very deep!)');
console.log('• Is balanced?', tree.isBalanced());

console.log('\n' + '═'.repeat(60));
console.log('🔧 SOLUTION: Call rebalance()');
console.log('═'.repeat(60));

tree.rebalance();

console.log('\n✨ After rebalancing:');
tree.prettyPrint();

console.log('\nAnalysis of balanced tree:');
console.log('• Root (70) height:', tree.height(70), '(much better!)');
console.log('• Root (70) depth:', tree.depth(70));
console.log('• Leaf (50) height:', tree.height(50));
console.log('• Leaf (50) depth:', tree.depth(50));
console.log('• Leaf (100) height:', tree.height(100));
console.log('• Leaf (100) depth:', tree.depth(100), '(much shallower!)');
console.log('• Is balanced?', tree.isBalanced(), '✅');

console.log('\n' + '═'.repeat(60));
console.log('📊 COMPARISON');
console.log('═'.repeat(60));

console.log('\nBEFORE rebalance:');
console.log('  Structure: Completely right-skewed (like a linked list)');
console.log('  Root height: 5 edges to furthest leaf');
console.log('  Search efficiency: O(n) - worst case!');
console.log('  Balanced: ❌ false');

console.log('\nAFTER rebalance:');
console.log('  Structure: Properly balanced binary tree');
console.log('  Root height: 2 edges to furthest leaf');
console.log('  Search efficiency: O(log n) - optimal! ⚡');
console.log('  Balanced: ✅ true');

console.log('\n' + '═'.repeat(60));
console.log('🎯 KEY TAKEAWAYS');
console.log('═'.repeat(60));
console.log('\n1. Height: Number of edges from node to furthest leaf');
console.log('   • Leaf nodes have height 0');
console.log('   • Root of balanced tree has minimal height');
console.log('');
console.log('2. Depth: Number of edges from root to node');
console.log('   • Root has depth 0');
console.log('   • In balanced tree, max depth is minimized');
console.log('');
console.log('3. Balanced: Height difference ≤ 1 for all nodes');
console.log('   • Ensures O(log n) operations');
console.log('   • Prevents tree from becoming a linked list');
console.log('');
console.log('4. Rebalance: Rebuilds tree from in-order traversal');
console.log('   • Gets sorted values using inOrderForEach()');
console.log('   • Rebuilds using buildTree() for perfect balance');
console.log('   • Restores O(log n) efficiency');

console.log('\n✅ Demonstration complete!\n');
