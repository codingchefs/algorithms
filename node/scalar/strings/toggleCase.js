const toggleCase = (s) => {
  s = s.split('');
  for(let i=0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0);
    if(s[i] >= 'a' && s[i] <= 'z') {
      s[i] = String.fromCharCode(charCode - 32);
    } else if(s[i] >= 'A' && s[i] <= 'Z') {
      s[i] = String.fromCharCode(charCode + 32)
    }
  }

  return s.join();
}

console.log(toggleCase('cTxPOsY'))