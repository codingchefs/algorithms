const naiveSearch = (long, short) => {
    // loop over the longer string
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        // loop over the shorter string
        for (let j = 0; j < short.length; j++) {
            // if chars dont match,break out of the inner loop
            if (long[i + j] !== short[j]) {
                break;
            }
            // if chars do match keep going
            // if you complete the inner loop and find a match, increment the count of matches
            if (j === short.length - 1) {
                count++;
            }
        }
    }

    // return count
    return count;
}

console.log(naiveSearch("lorie loled lolled", "lol"));
// lorie loled , lol
module.exports = naiveSearch;