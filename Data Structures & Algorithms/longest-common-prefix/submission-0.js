class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        let minLength = Infinity;
        strs.forEach(str => {
            minLength = Math.min(minLength, str.length)
        })
        for(let i = 1; i<strs.length; i++){
            let j = 0;
            while(j < minLength){
                if(prefix[j] !== strs[i][j]){
                    break;
                }
                j++;
            }
            prefix = prefix.slice(0, j)
        }
        return prefix;
    }
}
