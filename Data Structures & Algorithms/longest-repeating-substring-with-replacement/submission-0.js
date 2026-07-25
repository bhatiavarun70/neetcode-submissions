class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = {};
  let l = 0,
    r = 0,
    maxLen = 0,
    maxFreq = 0;

  while (r < s.length) {
    map[s[r]] = (map[s[r]] || 0) + 1;
    maxFreq = Math.max(maxFreq, map[s[r]]);
    let changes = r - l + 1 - maxFreq;
    while (changes > k) {
      map[s[l]]--;
      if (map[s[l]] === 0) delete map[s[l]];
      l++;
      maxFreq = Math.max(maxFreq, map[s[l]]);
      changes = r - l + 1 - maxFreq;
    }
    if (changes <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  return maxLen;
    }
}
