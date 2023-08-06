# Arrays & Strings

## Hash Table

* A hash table, also known as a hash map, is a nifty data structure used for storing key-value pairs. Whenever you have
  a key, you can easily associate a corresponding value with it, making lookups super fast.
    * example: in => 'India', 'au' => 'Australia' 
* Inserting a key (which could be a string or any other data type) and its corresponding value is done in a few simple
  steps:

    1. First, we calculate the hash code of the key, usually resulting in an integer or long value. Keep in mind that
       different keys might end up with the same hash code, considering there's an infinite number of keys but only a
       finite number of integers.
    2. Next, we map this hash code to an index in the array. This mapping can be achieved through something like hash(
       key) % array_length. Don't be surprised if different hash codes point to the same index, that's perfectly normal.
    3. At this specific index, there exists a linked list of keys and values. We store the key-value pair in this index.
       The use of a linked list is essential due to potential collisions; you could encounter two different keys with
       the same hash code or two different hash codes pointing to the same index.
      
![HashCode](../../images/hashtable_example.png, "HashCode")

* Now, when it comes to performance, if there are a lot of collisions, the worst-case runtime is O(N), where N
  represents the number of keys. However, if collisions are not too frequent, the runtime is an impressive O(1) –
  constant time lookup.

* Interestingly, we have another option to implement the hash table using a balanced binary search tree, which would
  give us a runtime of O(log N). Cool, right?

* JavaScript's object also serves as a unique implementation of a hash table. But be cautious, the Object class adds its
  own keys, which could clash and overwrite your inherited default properties. To avoid this, you have Maps, introduced
  in 2015, which provide a reliable way to store key-value pairs

## Implementing Hashtable 
* We need to implement the below 
    * Set to store a key value pair
    * Get to retrieve a value given its key
    * Remove to delete a key value pair
    * display contents of hash table  
    * Hashing function to convert a string key to a numeric index.
- see code [here](./0-HashTable.js)

![HashCode avoiding collisions](../../images/hashcode_avoid_collisions.png, "HashCode avoiding collisions")

## Time complexity

| Algorithm    | Average | Worst Case |
| ------------ | ------- | ---------- |
| Space        | O(n)    | O(n)       |
| Search       | O(1)    | O(n)       |
| Insert       | O(1)    | O(n)       |
| Delete       | O(1)    | O(n)       |

## ArrayList & Resizable Arrays

* In certain languages, arrays or lists can grow automatically as you add more items. However, in Java, arrays have a
  fixed length. To achieve dynamic behavior similar to a resizable array, a common implementation involves creating an
  array that doubles in size whenever it gets full, accommodating new elements seamlessly. 
