/**
 * 1. Define p1 and p2 initialized to Head.
 * 2. Move p1 to k position and
 * 3. Move p1 and p2 till p1 reaches end.
 * 4. Return p2.
 * @param head
 * @param k
 * @returns {((value?: any) => IteratorResult<any>) | ((value?: any) => Promise<IteratorResult<any>>) | Node | * | LLNode|null}
 */
const nthToLast = (head, k) => {
  //define p1 and p2
  let p1 = head;
  let p2 = head;

  // move p1 to k position
  for(let i=0; i< k; i++) {
    if(!p1) return null;
    p1 = p1.next;
  }

  //then move p1 and p2 till p1 reaches end
  while(p1) {
    p2 = p2.next;
    p1 = p1.next;
  }

  return p2;

};

module.exports = nthToLast;
