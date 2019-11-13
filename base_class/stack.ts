class MyStack {
  items: Array<number>
  constructor () {
    this.items = []
  }
  getLength(): number {
    return this.items.length
  }
  isEmpty(): boolean {
    return this.getLength() === 0
  }
  push(item: number): void {
    this.items.push(item)
  }
  pop(): number{
    let item = this.items.pop()
    return item
  }
  getTop(): number{
    return this.items[this.getLength() - 1]
  }
}

export {MyStack}