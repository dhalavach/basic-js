class Link {
  constructor(link) {
    this.link = link;
    this.next = null;
  }
}

class Chainmaker {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getLength() {
    return this.length;
  }

  addLink(value) {
    let link = new Link(value);

    let current;

    if (this.head == null) {
      this.head = link;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = link;
    }

    this.length++;
  }

  removeLink(index) {
    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      this.length--;
    } else {
      let previous;
      let counter = 0;
      while (counter < index) {
        previous = current;
        current = current.next;
        counter++;
      }
      previous.next = current.next;
      this.length--;
    }
  }

  //   reverseChain() {
  //     let prev = null;
  //     let current = this.head;
  //     let next = null;
  //     while (current != null) {
  //       next = current.next;
  //       current.next = prev;
  //       prev = current;
  //       current = next;
  //     }
  //     this.head = prev;
  //     return this;
  //   }

  reverseChain() {
    let head = this.head;

    function reverseRecursively(head) {
      if (head === null || head.next === null) {
        return head;
      }

      let reversedHead = reverseRecursively(head.next);
      head.next.next = head;
      head.next = null;
      return reversedHead;
    }
    return reverseRecursively(head);
  }
}

let testchain = new Chainmaker();

testchain.addLink("1st");
testchain.addLink("2nd");
testchain.addLink("3rd");
// console.log(testchain.getLength());
// console.log(testchain);
console.log(testchain);

console.log(testchain.reverseChain());
