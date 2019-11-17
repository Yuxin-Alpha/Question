export class Node {
  data: number
  next: Node | null
  constructor(data: number) {
    this.data = data
  }
}
export class SinDirectionList {
  head: Node | null
  length: number
  constructor() {
    this.length = 0
  }
  findNode(data: number): number {
    let position: number = 0
    let currentNode: Node = this.head
    if(!currentNode) {
      throw new Error('Attention: The List does not have any Node')
    }
    return
  }
  insertNode(node: Node, pos: number): void {
    if(!this.head && !pos) {
      this.head = node
      return
    }
    let index: number = 0
    let currentNode: Node = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
      index ++
    }
    if(index < pos) {
      throw new Error('Error Input Position')
    } else if(index === pos) {
      currentNode.next = node
    } else {
      node.next = currentNode.next
      currentNode.next = node
    }
  }
}
let node = new Node(8)
console.log(node);
