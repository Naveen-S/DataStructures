class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  get(key) {
    const hash = this._hash(key);
    console.log("container bucket: ", this.data[hash]);
    return this.data[hash].forEach((item) => {
      if (item[0] === key) {
        console.log("key value pair: ", key, item[1]);
      }
    });
  }

  set(key, value) {
    const hash = this._hash(key);
    console.log("this.data[hash] ", this.data[hash]);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }

  display() {
    console.log(this.data);
  }
}

const h = new HashTable(2);
h.set("grapes", 100);
h.set("apples", 400);
console.log(h.get("grapes"));
h.display();
