class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let need = {};
        let window = {};
        if(s1.length > s2.length) return false;
        for(let i = 0; i < s1.length; i++){
            need[s1[i]] = (need[s1[i]] || 0) + 1;
        }
        let l = 0, r = 0;
        let keysNeed = Object.keys(need)
        while(r < s2.length){
            window[s2[r]] = (window[s2[r]] || 0) + 1;
            while(r - l + 1 > s1.length){
                window[s2[l]]--
                if(window[s2[l]] === 0) delete window[s2[l]]
                l++;
            }
            let isEqual = keysNeed.every(key => Object.prototype.hasOwnProperty.call(window, key) && need[key] === window[key])
            if(isEqual) return true
            r++;
        }
        return false
    }
}
