/**
 * HashTable Implementation
 * - 'Set' to store a key-value pair
 * - 'Get' to retrieve a value given its key
 * - 'Remove' to delete a key value pair
 * - 'Hashing function' to convert a string ket to a numeric index
 */
class HashTable {

  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  /**
   * Add all the charcodes of individual chars modulus by table size
   * @param{String} key
   */
  hash(key) {
    let total = 0;
    for(let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    delete this.table[index];
  }

  display(){
    for(const key in this.table) {
      console.log(this.table[key]);
    }
  }
}

// Execution
const table = new HashTable(50);

table.set('name', 'Bruce');
table.set('age', 25);
table.display();
