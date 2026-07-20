class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++){
                if(i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k){
                    return true;
                }
            }
        }
        return false;
    }
}
