const sortString = (arr) => {
  let countA = new Array(26).fill(0);
  const arrS = arr.split('');
  for( let i=0; i < arrS.length; i++ ) {
    const count = arrS[i].charCodeAt(0);
    let index = count - 97;
    countA[index]++;
  }
  let sb = [];
  for( let i=0; i < 26; i++ ) {
    const count = countA[i];
    for(let j =0; j < count; j++) {
      sb.push(String.fromCharCode('a'.charCodeAt(0) + i));
    }
  }

  return sb.join();
}

console.log(sortString('dabaedb'))