class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }
}
