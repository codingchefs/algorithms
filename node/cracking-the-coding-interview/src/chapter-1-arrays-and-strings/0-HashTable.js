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
    return total;
  }


  /**
   * @param {string} key
   * @param {string|number} value
   */
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.keyMap[index];

    if (!bucket) {
      this.keyMap[index] = [[key, value]];
    } else {
      const existingItemWithSameKey = bucket.find(([k]) => k === key);

      if (existingItemWithSameKey) {
        existingItemWithSameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
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

  keys() {
    let keysArr = [];
    for(const key in this.keyMap) {
        for(let i = 0; i < this.keyMap[key].length; i++) {
          if(!keysArr.includes(this.keyMap[key][i][0])) {
            keysArr.push(this.keyMap[key][i][0]);
          }
        }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for(const key in this.keyMap) {
        for(let i = 0; i < this.keyMap[key].length; i++) {
          if(!valuesArr.includes(this.keyMap[key][i][1])) {
            valuesArr.push(this.keyMap[key][i][1]);
          }
        }
      }
    return valuesArr;
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
table.set('firstName', 'Bruce');
table.set('age', 26);
console.log('mane value:', table.get('mane'));
table.display();
console.log('keys:', table.keys());
console.log('values:', table.values());
table.remove('mane');
table.display();

