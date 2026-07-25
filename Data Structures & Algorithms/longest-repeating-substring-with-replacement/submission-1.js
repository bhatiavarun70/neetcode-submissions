class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = {};
        let l = 0,
        r = 0;
        let maxFreq = 0;
        let maxLen = 0;
        while (r < s.length) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, map[s[r]]);
            let changes = r - l + 1 - maxFreq;
            while (r - l + 1 - maxFreq > k) {
                map[s[l]]--;
                l++;
                changes = r - l + 1 - maxFreq;
            }
            maxLen = Math.max(maxLen, r - l + 1);
            r++;
        }
        return maxLen;
    }
}
