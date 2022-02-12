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
    console.log("hash", hash);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    return this.data[hash];
  }

  set(key, value) {
    const hash = this._hash(key);
    console.log("hash on set ", hash);
    this.data[hash] = [key, value];
  }

  display() {
    console.log(this.data);
  }
}

const h = new HashTable(50);
h.set("gaps", 100);
h.set("gaps", 400);
console.log(h.get("gaps"));
h.display();
