class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLen = 0;
        for(let i = 0; i < nums.length; i++){
            if(!set.has(nums[i] - 1)){
                let current = nums[i]
                let length = 1;
                while(set.has(current + 1)){
                    length++;
                    current++;
                }
                maxLen = Math.max(length, maxLen)
            }
        }
        return maxLen;
    }
}
