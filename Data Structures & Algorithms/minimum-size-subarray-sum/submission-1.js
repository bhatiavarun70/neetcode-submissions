class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0, r = 0, minLen = Infinity;
        let sum = 0;
        while(r < nums.length){
            sum += nums[r];
            while(sum >= target){
                minLen = Math.min(minLen, r - l + 1);
                sum = sum - nums[l]
                l++
            }
            r++
        }
        return minLen === Infinity ? 0 : minLen;
    }
}
