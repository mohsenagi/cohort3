class ListNode{
    constructor(subject, amount, next = null, prev = null){
        this.subject = subject
        this.amount = amount
        this.next = next
        this.prev = prev
    }

    show() {
        return `subject is "${this.subject}" and amount is "${this.amount}"`
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.current = null;
        this.tail = null;
    }

    next() {
        if (this.current === null) return;
        if (this.current.next === null) return;
        this.current = this.current.next;
    }

    prev () {
        if (this.current === null) return;
        if (this.current.prev === null) return;
        this.current = this.current.prev;
    }

    last () {
        this.current = this.tail;
    }

    first () {
        this.current = this.head;
    }

    insertAtBeginning (subject, amount) {
        let newNode = new ListNode(subject, amount);
        if (this.head !== null) {
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.head = newNode;
        if (!this.current) this.current = newNode;
        if (!this.tail) this.tail = newNode;
        return;
    }
    
    insertAtEnd (subject, amount){
        let newNode = new ListNode(subject, amount);
        if (this.tail !== null) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.current) this.current = newNode;
        if (!this.head) this.head = newNode;
        return;
    }
    
    insertAfterCurrent (subject, amount) {
        let target = this.current;
        if (target === null) return;
        let newNode = new ListNode(subject, amount, target.next, target);
        if(target.next !== null) target.next.prev = newNode;
        if(target.next === null) this.tail = newNode;
        target.next = newNode;
        return;
    }

    deleteCurrent() {
        let target = this.current;
        if (target === null) return;
        if (target.next && target.prev) {
            target.prev.next = target.next;
            target.next.prev = target.prev;
            this.current = target.next;
            return;
        }
        if (target.next && !target.prev) {
            target.next.prev = null;
            this.head = target.next
            this.current = target.next;
            return;
        }
        if (!target.next && target.prev) {
            target.prev.next = null;
            this.tail = target.prev;
            this.current = target.prev;
            return;
        }
        if (!target.next && !target.prev) {
            this.head = null;
            this.current = null;
            this.tail = null;
            return;
        }
    }
}

export {ListNode, LinkedList}