class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sString = s.split('').sort().join('');
        const tString = t.split('').sort().join('');
        return sString === tString
    }
}
