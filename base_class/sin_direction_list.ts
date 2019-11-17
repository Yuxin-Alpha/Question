export class Node {
    data: number
    next: Node | null
    constructor(data: number) {
        this.data = data
    }
}
export class SinDirectionList {
    head: Node | null
    // TODO 对单项列表的继续封装
}
let node = new Node(8)
console.log(node);
