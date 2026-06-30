class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const reversedArray = new Array(s.length)
        for(let i = s.length - 1, j=0; i >= 0, j<s.length; i--, j++){
            reversedArray[j] = s[i];
        }
        for(let i = 0; i<s.length; i++){
            s[i] = reversedArray[i]
        }
    }
}
