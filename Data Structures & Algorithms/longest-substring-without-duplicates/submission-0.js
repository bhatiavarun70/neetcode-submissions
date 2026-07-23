class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0, maxLen = 0;
        const map = {};
        while(r < s.length){
            map[s[r]] = (map[s[r]] || 0) + 1;
            while(map[s[r]] > 1){
                map[s[l]]--
                if(map[s[l]] === 0) delete map[s[l]]
                l++;
            }
            let length = r - l + 1;
            maxLen = Math.max(maxLen, length);
            r++;
        }
        return maxLen;
    }
}
