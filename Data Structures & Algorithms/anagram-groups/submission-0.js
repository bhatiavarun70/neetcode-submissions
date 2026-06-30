class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const answer = [];
        const visited = new Set();
        if(strs.length <= 1){
            answer.push([strs[0]]);
            return answer;
        }
        for(let i = 0; i<strs.length; i++){
            if(visited.has(i)) continue;
            let list = [];
            const str1Sorted = strs[i].split('').sort().join('');
            for(let j = 0; j< strs.length; j++){
                const str2Sorted = strs[j].split('').sort().join('');
                if(str1Sorted === str2Sorted){
                   list.push(strs[j]);
                   visited.add(j)
                }
            }
            answer.push(list);
        }
        return answer;
    }
}
