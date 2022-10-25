function LinkedList() {
    this.head = null
    this.tail = null
}

function Node(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
}

LinkedList.prototype.addToHead = function (value) {
    let newNode = new Node(value, this.head, null)
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode
    }
    this.head = newNode
}


LinkedList.prototype.addToTail = function (value) {
    let newNode = new Node(value, null, this.tail)
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode
    }
    this.tail = newNode
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) {
        return null
    }
    let val = this.head.value
    this.head = this.head.next
    if(this.head){
        this.head.prev = null
    }else {
        this.tail = null
    }
    return  val
}

LinkedList.prototype.removeTail = function () {
    if (!this.tail) {
        return null
    }
    let val = this.tail.value
    this.tail = this.tail.prev
    if(this.tail){
        this.tail.next = null
    }else {
        this.head = null
    }
    return  val
}

LinkedList.prototype.search = function (searchValue) {
    let currentNode = this.head
    while(currentNode){
        if (currentNode.value === searchValue) return currentNode.value
        currentNode = currentNode.next
    }
}

LinkedList.prototype.indexOf = function (searchValue) {
    let currentNode = this.head
    let currentIndex = 0
    const indexArray = []
    while(currentNode){
        if (currentNode.value === searchValue){
            indexArray.push(currentIndex)
        }
        currentIndex++
        currentNode = currentNode.next
    }
    return indexArray
}

let ll = new LinkedList()
// 可以使用這些實做出來的方法在broswer查看

