export const algorithems = {
    'tree-traversal': {
        title: "Tree Traversal",
        link: '/algorithms/tree-traversal',
        content: [
            {
                description: 
`1. Depth-First Search (DFS)
DFS involves exploring a branch as deeply as possible before backtracking to explore other branches. It can be implemented recursively or iteratively using a stack.

a. Preorder Traversal (Root, Left, Right)
Recursive: Visit the root, then traverse the left subtree recursively, followed by the right subtree.
Iterative: Use a stack. Push the root to the stack, then while the stack is not empty, pop a node, visit it, and push its right and then left child (if they exist) onto the stack.

b. Inorder Traversal (Left, Root, Right)
Recursive: Traverse the left subtree, visit the root, then traverse the right subtree.
Iterative: Use a stack. Start from the root and go to the leftmost node, pushing each node onto the stack. Then, pop a node from the stack, visit it, and consider its right subtree.

c. Postorder Traversal (Left, Right, Root)
Recursive: Traverse the left subtree, then the right subtree, and finally visit the root.
Iterative: Use two stacks. Push the root to the first stack. Then pop a node from the first stack, push it to the second stack, and push its left and right children to the first stack. Finally, pop all nodes from the second stack and visit them.

2. Breadth-First Search (BFS)
BFS involves exploring all nodes at the present depth level before moving to the next level. It's usually implemented using a queue.

Iterative: Use a queue. Enqueue the root, then while the queue is not empty, dequeue a node, visit it, and enqueue its left and right children (if they exist).
`,
                code:                
`class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
// DFS - Preorder Traversal (Iterative)
function preorderTraversalIterative(root) {
    if (!root) return;
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        console.log(node.value);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}
// DFS - Preorder Traversal (Recursive)
function preorderTraversal(root) {
    if (root) {
        console.log(root.value);         // Visit the root
        preorderTraversal(root.left);    // Traverse left subtree
        preorderTraversal(root.right);   // Traverse right subtree
    }
}
  
// DFS - Inorder Traversal (Iterative)
function inorderTraversalIterative(root) {
    const stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
        stack.push(current);
        current = current.left;
        }
        current = stack.pop();
        console.log(current.value);
        current = current.right;
    }
}

// DFS - Inorder Traversal (Recursive)
function inorderTraversal(root) {
  if (root) {
    inorderTraversal(root.left);     // Traverse left subtree
    console.log(root.value);         // Visit the root
    inorderTraversal(root.right);    // Traverse right subtree
  }
}

// DFS - Postorder Traversal (Iterative)
function postorderTraversalIterative(root) {
    if (!root) return;
    const s1 = [root];
    const s2 = [];
    while (s1.length) {
        const node = s1.pop();
        s2.push(node);
        if (node.left) s1.push(node.left);
        if (node.right) s1.push(node.right);
    }
    while (s2.length) {
        const node = s2.pop();
        console.log(node.value);
    }
}

// DFS - Postorder Traversal (Recursive)
function postorderTraversal(root) {
  if (root) {
    postorderTraversal(root.left);   // Traverse left subtree
    postorderTraversal(root.right);  // Traverse right subtree
    console.log(root.value);         // Visit the root
  }
}

// BFS Traversal (Iterative)
function bfsTraversal(root) {
    if (!root) return;
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        console.log(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Preorder Traversal (Iterative):");
preorderTraversalIterative(root);

console.log("Inorder Traversal (Iterative):");
inorderTraversalIterative(root);

console.log("Postorder Traversal (Iterative):");
postorderTraversalIterative(root);

console.log("BFS Traversal:");
bfsTraversal(root);

`
            },
        ]
    },
    'test': {
        title: "Test",
        link: '/algorithms/test',
        content: [
            {
                description: '',
                code: ''
            },
        ],
    },
    'test2': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test3': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test4': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test5': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test6': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test7': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test8': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test9': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test10': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test11': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test12': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test13': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test14': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test15': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test16': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test17': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test18': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test19': {
        title: "Test",
        link: '/algorithms/test',
    },
    'test20': {
        title: "Test",
        link: '/algorithms/test',
    },
}