/**
 * HashTable Implementation
 * - 'Set' to store a key-value pair
 * - 'Get' to retrieve a value given its key
 * - 'Remove' to delete a key value pair
 * - 'Hashing function' to convert a string ket to a numeric index
 */
class HashTable {

  constructor(size) {
    this.keyMap = new Array(size);
    this.size = size;
  }

  /**
   *
   * @param {string} key
   * @return {number} index
   */
  hash(key) {
    let total = 0;
    let RANDOM_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const currentChar = key[i];
      const asciiValue = currentChar.charCodeAt(0) - 96;
      total = (total * RANDOM_PRIME + asciiValue) % this.size;
    }
  }


  /**
   * @param {string} key
   * @param {string|number} value
   */
  set(key, value) {
    const index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  /**
   * @param {string} key
   * @return {string|undefined}
   */
  get(key) {
    const index = this.hash(key);
    const bucket = this.keyMap[index];
    if(bucket) {
      const existingItemWithSameKey = bucket.find(item => item[0] === key);
      if(existingItemWithSameKey) {
        return existingItemWithSameKey
      }
    }
  }

  /**
   * @param {string} key
   */
  remove(key) {
    const index = this.hash(key);
    const bucket = this.keyMap[index];
    if (bucket) {
      const existingItemWithSameKey = bucket.find(item => item[0] === key);
      if (existingItemWithSameKey) {
        bucket.splice(bucket.indexOf(existingItemWithSameKey, 1));
      }
    }
  }

  display(){
    for(const key in this.keyMap) {
      console.log(this.keyMap[key]);
    }
  }
}

// Execution
const table = new HashTable(50);

table.set('name', 'Bruce');
table.set('age', 25);
table.set('mane', 'culater');
console.log(table.get('mane'));
table.display();
table.remove('mane');
table.display();
