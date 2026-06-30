class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        if(strs.length === 0){
           return [];
        } else if(strs.length === 1){
            return [[strs[0]]];
        } else {
            for(let i = 0; i < strs.length; i++){
                const sortedString = strs[i].split('').sort().join('');
                if(!map[sortedString]){
                    map[sortedString] = [strs[i]];
                } else {
                    map[sortedString].push(strs[i]);
                }
            }
            return Object.values(map)
        }
    }
}
