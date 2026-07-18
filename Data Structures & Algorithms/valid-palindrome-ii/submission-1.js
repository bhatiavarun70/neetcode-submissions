class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s, left, right){
        while(left < right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true
    }
    validPalindrome(s) {
        let l = 0, r=s.length - 1;
        while(l < r){
            if(s[l] !== s[r]){
                if(this.isPalindrome(s, l + 1 , r) || this.isPalindrome(s, l, r - 1)){
                    return true;
                } else return false
            }
            l++;
            r--
        }
        return true;
    }
}
