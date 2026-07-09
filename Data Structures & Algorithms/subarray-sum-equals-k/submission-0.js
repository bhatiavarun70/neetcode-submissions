class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = {0: 1};
        let prefixSum = 0;
        let count = 0;
        for(let i = 0; i<nums.length; i++){
            prefixSum += nums[i];
            const required = prefixSum - k;
            if(map[required]){
             count += map[required];
            }
            map[prefixSum] = (map[prefixSum] || 0) + 1;
        }
        return count;
    }
}
