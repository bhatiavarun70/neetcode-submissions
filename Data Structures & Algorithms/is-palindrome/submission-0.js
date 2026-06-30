class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const chars = s.toLowerCase().split(' ');
        const str = chars.join('').replace(/[^a-zA-Z0-9]/g, '')
        const reversed = str.split('').reverse().join('');
        console.log('reversed', str, reversed)
        return str === reversed;
    }
}
