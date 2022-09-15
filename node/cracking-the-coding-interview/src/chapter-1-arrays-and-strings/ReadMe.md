# Arrays & Strings

## Hash Table
* A hash table is a data structure that maps keys to values for highly efficient lookup.
* To insert a key (which might be a string or essentially any other data type) and value, we do the following:
    * First, compute the key's hash code, which will usually be an int or long. Note that two different keys could have 
      the same hash code, as there may be an infinite number of keys and a finite number of ints.
    * Then,map the hashcode to an index in the array.This could be done with something like hash(key) % array_length.Two
      different hashcodes could,of course,map to the same index.
    * At this index,there is a linkedlist of keys and values.Store the key and value in this index.We must use a linked 
      list because of collisions: you could have two different keys with the same hash code, or two different hash codes 
      that map to the same index.
* If the number of collisions is very high, the worst case runtime is O(N), where N is the number of keys. Otherwise,
the runtime is O(1).
* We can implement the hashtable with a balanced binary search tree.This gives us a O(log N).

## 
