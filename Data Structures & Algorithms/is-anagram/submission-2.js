class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const freq = {};
        for(let i = 0; i<s.length; i++){
            if(!freq[s[i]]) freq[s[i]] = 1;
            else if(freq[s[i]]) freq[s[i]]++;
        }
        for(let i=0; i<t.length; i++){
            freq[t[i]]--;
            if(freq[t[i]] === 0) delete freq[t[i]];
        }
        if(Object.keys(freq).length === 0) return true;
        else return false;
    }
}
